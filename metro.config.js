/** @type {import('expo/metro-config').MetroConfig} */
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname, {});

config.resolver.unstable_enablePackageExports = true;
config.resolver.unstable_conditionNames = ['require', 'default', 'browser'];

module.exports = withNativeWind(config, {
    input: './global.css',
    configPath: './tailwind.config.js',
});
