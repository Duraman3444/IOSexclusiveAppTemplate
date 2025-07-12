const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// iOS-specific optimizations
config.resolver.platforms = ['ios', 'native'];

module.exports = config; 