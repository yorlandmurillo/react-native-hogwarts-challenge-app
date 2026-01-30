const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

// Required for @storybook/react-native - fixes loading and "promises never resolving" issues
defaultConfig.resolver.resolverMainFields = [
  'sbmodern',
  ...(defaultConfig.resolver.resolverMainFields || ['react-native', 'browser', 'main']),
];

module.exports = mergeConfig(defaultConfig, {});
