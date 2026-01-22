#!/usr/bin/env node

/**
 * Validates plugin.json files against the expected schema
 * Usage: node validate-schema.js [plugin-path]
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_FIELDS = ['name', 'description', 'version', 'author'];
const REQUIRED_AUTHOR_FIELDS = ['name'];

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

  // Validate required fields
  let isValid = true;
  for (const field of REQUIRED_FIELDS) {
    if (!pluginData[field]) {
      console.error(`❌ Error: Missing required field '${field}' in ${pluginJsonPath}`);
      isValid = false;
    }
  }

  // Validate author object
  if (pluginData.author && typeof pluginData.author === 'object') {
    for (const field of REQUIRED_AUTHOR_FIELDS) {
      if (!pluginData.author[field]) {
        console.error(`❌ Error: Missing required field 'author.${field}' in ${pluginJsonPath}`);
        isValid = false;
      }
    }
  } else if (!pluginData.author) {
    console.error(`❌ Error: Missing required 'author' object in ${pluginJsonPath}`);
    isValid = false;
  }

  // Validate version format (semantic versioning)
  if (pluginData.version && !/^\d+\.\d+\.\d+/.test(pluginData.version)) {
    console.error(`❌ Warning: Version '${pluginData.version}' doesn't follow semantic versioning (x.y.z) in ${pluginJsonPath}`);
  }

  // Validate name format (lowercase, hyphens, no spaces)
  if (pluginData.name && !/^[a-z0-9-]+$/.test(pluginData.name)) {
    console.error(`❌ Warning: Plugin name '${pluginData.name}' should only contain lowercase letters, numbers, and hyphens in ${pluginJsonPath}`);
  }

  if (isValid) {
    console.log(`✅ Valid: ${pluginData.name} (${pluginJsonPath})`);
  }

  return isValid;
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
      if (!validatePluginJson(plugin)) {
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
    const isValid = validatePluginJson(pluginPath);
    process.exit(isValid ? 0 : 1);
  }
}

main();
