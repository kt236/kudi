// KUDI Build Policy Compliance Check
// This script must be run before any code changes are merged.
// It checks for compliance with the KUDI_BUILD_POLICY.md guidelines.

const fs = require('fs');
const path = require('path');

const POLICY_FILE = path.join(__dirname, '../KUDI_BUILD_POLICY.md');
const SRC_DIR = path.join(__dirname, '../frontend/src');

function checkModularity() {
  // Check for modular components and helpers
  const files = fs.readdirSync(SRC_DIR);
  const requiredFiles = ['gmdnUtils.js', 'UDIInput.js', 'GMDNFindingsPanel.js', 'DeviceSummaryPanel.js'];
  for (const file of requiredFiles) {
    if (!files.includes(file)) {
      throw new Error(`Missing required modular file: ${file}`);
    }
  }
}

function checkNoLegacyCode() {
  // Check KudiApp.js for legacy/duplicate code markers
  const kudiAppPath = path.join(SRC_DIR, 'KudiApp.js');
  const content = fs.readFileSync(kudiAppPath, 'utf-8');
  if (/legacy|duplicate|old code/i.test(content)) {
    throw new Error('Legacy or duplicate code found in KudiApp.js. Please remove it.');
  }
}

function checkTests() {
  // Ensure KudiApp.test.js exists and tests GMDN extraction
  const testPath = path.join(SRC_DIR, 'KudiApp.test.js');
  if (!fs.existsSync(testPath)) {
    throw new Error('Missing KudiApp.test.js for unit tests.');
  }
  const testContent = fs.readFileSync(testPath, 'utf-8');
  if (!/GMDN|extract/i.test(testContent)) {
    throw new Error('No GMDN extraction tests found in KudiApp.test.js.');
  }
}

function checkPolicyFile() {
  // Ensure build policy file exists and is up to date
  if (!fs.existsSync(POLICY_FILE)) {
    throw new Error('KUDI_BUILD_POLICY.md is missing.');
  }
  const content = fs.readFileSync(POLICY_FILE, 'utf-8');
  if (!/modular|robust|testing|compliance/i.test(content)) {
    throw new Error('KUDI_BUILD_POLICY.md does not contain required sections.');
  }
}

function main() {
  try {
    checkPolicyFile();
    checkModularity();
    checkNoLegacyCode();
    checkTests();
    console.log('KUDI Build Policy compliance check PASSED.');
    process.exit(0);
  } catch (err) {
    console.error('KUDI Build Policy compliance check FAILED:', err.message);
    process.exit(1);
  }
}

main();
