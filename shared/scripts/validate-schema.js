#!/usr/bin/env node

/**
 * Validates plugin metadata from marketplace.json against the expected schema.
 *
 * Usage: node validate-schema.js
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_FIELDS = ['name', 'description', 'version'];
const MARKETPLACE_PATH = path.join(__dirname, '../../.claude-plugin/marketplace.json');

function loadMarketplace() {
  if (!fs.existsSync(MARKETPLACE_PATH)) {
    console.error('❌ Error: marketplace.json not found');
    process.exit(1);
  }
  try {
    const content = fs.readFileSync(MARKETPLACE_PATH, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error('❌ Error: Invalid JSON in marketplace.json');
    console.error(`   ${error.message}`);
    process.exit(1);
  }
}

function validatePluginData(pluginData) {
  let isValid = true;

  // Validate required fields
  for (const field of REQUIRED_FIELDS) {
    if (!pluginData[field]) {
      console.error(`❌ Error: Missing required field '${field}' for plugin '${pluginData.name || 'unknown'}'`);
      isValid = false;
    }
  }

  // Validate version format (semantic versioning)
  if (pluginData.version && !/^\d+\.\d+\.\d+/.test(pluginData.version)) {
    console.error(`❌ Warning: Version '${pluginData.version}' doesn't follow semantic versioning (x.y.z) for plugin '${pluginData.name}'`);
  }

  // Validate name format (lowercase, hyphens, no spaces)
  if (pluginData.name && !/^[a-z0-9-]+$/.test(pluginData.name)) {
    console.error(`❌ Warning: Plugin name '${pluginData.name}' should only contain lowercase letters, numbers, and hyphens`);
  }

  if (isValid) {
    console.log(`✅ Valid: ${pluginData.name}`);
  }

  return isValid;
}

function main() {
  const marketplace = loadMarketplace();

  if (!marketplace.plugins || marketplace.plugins.length === 0) {
    console.log('No plugins found in marketplace.json');
    process.exit(0);
  }

  console.log(`Validating ${marketplace.plugins.length} plugin(s)...\n`);

  let allValid = true;
  for (const plugin of marketplace.plugins) {
    if (!validatePluginData(plugin)) {
      allValid = false;
    }
  }

  console.log('');
  if (allValid) {
    console.log('✅ All plugins are valid!');
    process.exit(0);
  } else {
    console.error('❌ Some plugins have validation errors');
    process.exit(1);
  }
}

main();
