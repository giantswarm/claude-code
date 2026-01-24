#!/usr/bin/env node

/**
 * Validates plugin metadata against the expected schema.
 * Supports two modes:
 *   - strict mode (default): requires individual plugin.json files
 *   - non-strict mode: uses metadata from marketplace.json (when strict: false)
 *
 * Usage: node validate-schema.js [plugin-path]
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_FIELDS = ['name', 'description', 'version'];
const MARKETPLACE_PATH = path.join(__dirname, '../../.claude-plugin/marketplace.json');

function loadMarketplace() {
  if (!fs.existsSync(MARKETPLACE_PATH)) {
    return null;
  }
  try {
    const content = fs.readFileSync(MARKETPLACE_PATH, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`❌ Error: Invalid JSON in marketplace.json`);
    console.error(`   ${error.message}`);
    return null;
  }
}

function validatePluginData(pluginData, source) {
  let isValid = true;

  // Validate required fields
  for (const field of REQUIRED_FIELDS) {
    if (!pluginData[field]) {
      console.error(`❌ Error: Missing required field '${field}' in ${source}`);
      isValid = false;
    }
  }

  // Validate version format (semantic versioning)
  if (pluginData.version && !/^\d+\.\d+\.\d+/.test(pluginData.version)) {
    console.error(`❌ Warning: Version '${pluginData.version}' doesn't follow semantic versioning (x.y.z) in ${source}`);
  }

  // Validate name format (lowercase, hyphens, no spaces)
  if (pluginData.name && !/^[a-z0-9-]+$/.test(pluginData.name)) {
    console.error(`❌ Warning: Plugin name '${pluginData.name}' should only contain lowercase letters, numbers, and hyphens in ${source}`);
  }

  if (isValid) {
    console.log(`✅ Valid: ${pluginData.name} (${source})`);
  }

  return isValid;
}

function validatePluginFromMarketplace(pluginPath, marketplace) {
  const pluginName = path.basename(pluginPath);
  const pluginEntry = marketplace.plugins.find(p => p.name === pluginName);

  if (!pluginEntry) {
    console.error(`❌ Error: Plugin '${pluginName}' not found in marketplace.json`);
    return false;
  }

  return validatePluginData(pluginEntry, `marketplace.json (plugin: ${pluginName})`);
}

function validatePluginJson(pluginPath) {
  const pluginJsonPath = path.join(pluginPath, '.claude-plugin', 'plugin.json');

  if (!fs.existsSync(pluginJsonPath)) {
    console.error(`❌ Error: plugin.json not found at ${pluginJsonPath}`);
    return false;
  }

  let pluginData;
  try {
    const content = fs.readFileSync(pluginJsonPath, 'utf8');
    pluginData = JSON.parse(content);
  } catch (error) {
    console.error(`❌ Error: Invalid JSON in ${pluginJsonPath}`);
    console.error(`   ${error.message}`);
    return false;
  }

  // In strict mode, author is required
  if (!pluginData.author) {
    console.error(`❌ Error: Missing required 'author' object in ${pluginJsonPath}`);
    return false;
  }

  if (typeof pluginData.author === 'object' && !pluginData.author.name) {
    console.error(`❌ Error: Missing required field 'author.name' in ${pluginJsonPath}`);
    return false;
  }

  return validatePluginData(pluginData, pluginJsonPath);
}

function getAllPlugins(pluginsDir) {
  if (!fs.existsSync(pluginsDir)) {
    console.error(`❌ Error: Plugins directory not found: ${pluginsDir}`);
    process.exit(1);
  }

  const entries = fs.readdirSync(pluginsDir, { withFileTypes: true });
  return entries
    .filter(entry => entry.isDirectory())
    .filter(entry => !entry.name.startsWith('.')) // Exclude hidden directories
    .map(entry => path.join(pluginsDir, entry.name));
}

function main() {
  const args = process.argv.slice(2);
  const marketplace = loadMarketplace();
  const isStrictMode = !marketplace || marketplace.strict !== false;

  if (isStrictMode) {
    console.log('Running in strict mode (individual plugin.json files required)\n');
  } else {
    console.log('Running in non-strict mode (using marketplace.json metadata)\n');
  }

  if (args.length === 0) {
    // Validate all plugins in plugins/ directory
    const pluginsDir = path.join(__dirname, '../../plugins');
    const plugins = getAllPlugins(pluginsDir);

    if (plugins.length === 0) {
      console.log('No plugins found to validate');
      process.exit(0);
    }

    console.log(`Validating ${plugins.length} plugin(s)...\n`);

    let allValid = true;
    for (const plugin of plugins) {
      const isValid = isStrictMode
        ? validatePluginJson(plugin)
        : validatePluginFromMarketplace(plugin, marketplace);
      if (!isValid) {
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
  } else {
    // Validate specific plugin
    const pluginPath = path.resolve(args[0]);
    const isValid = isStrictMode
      ? validatePluginJson(pluginPath)
      : validatePluginFromMarketplace(pluginPath, marketplace);
    process.exit(isValid ? 0 : 1);
  }
}

main();
