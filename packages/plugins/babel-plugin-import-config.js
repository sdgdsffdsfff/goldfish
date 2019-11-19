const libraryName = require('./package.json').name;
const codeDir = `${libraryName}/lib`;

module.exports = {
  libraryName,
  camel2DashComponentName: false,
  customName(name) {
    return {
      BridgePlugin: `${codeDir}/BridgePlugin`,
      ConfigPlugin: `${codeDir}/ConfigPlugin`,
      FeedbackPlugin: `${codeDir}/FeedbackPlugin`,
      MockBridgePlugin: `${codeDir}/MockBridgePlugin`,
      Plugin: `${codeDir}/Plugin`,
      PluginHub: `${codeDir}/PluginHub`,
    }[name];
  },
};