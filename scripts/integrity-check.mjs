#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const requiredFiles = [
  'NOTICE.md',
  'PROVENANCE.md',
  'README.md',
  'AGENTS.md',
  'THIRD_PARTY_LICENSES/SCROLLCRAFT-MIT.txt',
  'provenance/upstream-lock.json',
  'provenance/borrowed-elements.json',
  'docs/INTEGRITY_POLICY.md',
  '.agents/skills/scrollcraft-codex/SKILL.md'
];

const failures = [];
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) failures.push(`missing required file: ${file}`);
}

if (!failures.length) {
  const notice = read('NOTICE.md');
  const provenance = read('PROVENANCE.md');
  const license = read('THIRD_PARTY_LICENSES/SCROLLCRAFT-MIT.txt');
  const skill = read('.agents/skills/scrollcraft-codex/SKILL.md');
  const lock = JSON.parse(read('provenance/upstream-lock.json'));
  const borrowed = JSON.parse(read('provenance/borrowed-elements.json'));

  const requiredStrings = [
    ['NOTICE.md', notice, 'Nate Herk'],
    ['NOTICE.md', notice, 'https://github.com/nateherkai/scroll-craft'],
    ['NOTICE.md', notice, 'e95798551874854cef6dd3996ec7de1364a82bbd'],
    ['PROVENANCE.md', provenance, 'Orrery'],
    ['PROVENANCE.md', provenance, 'PERKFORM'],
    ['PROVENANCE.md', provenance, 'Fallowbank'],
    ['SKILL.md', skill, 'Nate Herk'],
    ['SCROLLCRAFT-MIT.txt', license, 'Copyright (c) 2026 Nate Herk'],
    ['SCROLLCRAFT-MIT.txt', license, 'Permission is hereby granted, free of charge']
  ];
  for (const [file, text, needle] of requiredStrings) {
    if (!text.includes(needle)) failures.push(`${file} missing required marker: ${needle}`);
  }

  if (lock.author !== 'Nate Herk') failures.push('upstream lock author mismatch');
  if (lock.repository !== 'https://github.com/nateherkai/scroll-craft') failures.push('upstream lock repository mismatch');
  if (lock.pinnedCommit !== 'e95798551874854cef6dd3996ec7de1364a82bbd') failures.push('upstream lock commit mismatch');
  for (const name of ['Orrery', 'PERKFORM', 'Fallowbank']) {
    if (!lock.namedExamplesReferenceOnly?.includes(name)) failures.push(`upstream lock missing reference-only example: ${name}`);
  }
  if (!Array.isArray(borrowed.records)) failures.push('borrowed-elements records must be an array');
  if (borrowed.upstream?.pinnedCommit !== lock.pinnedCommit) failures.push('borrowed-elements upstream commit does not match upstream lock');

  for (const [index, record] of (borrowed.records || []).entries()) {
    const fields = ['upstreamSource', 'upstreamCommit', 'borrowed', 'rankLabChanges', 'affectedFiles'];
    for (const field of fields) {
      if (record[field] == null || record[field] === '' || (Array.isArray(record[field]) && !record[field].length)) {
        failures.push(`borrowed-elements record ${index} missing ${field}`);
      }
    }
    if (record.upstreamCommit && record.upstreamCommit !== lock.pinnedCommit) failures.push(`borrowed-elements record ${index} uses unpinned upstream commit`);
  }
}

if (failures.length) {
  console.error('Rank Lab integrity gate: FAIL');
  for (const failure of failures) console.error(` - ${failure}`);
  process.exit(1);
}

console.log('Rank Lab integrity gate: PASS');
