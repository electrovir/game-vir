const {baseConfig} = require('virmator/base-configs/base-cspell.js');

module.exports = {
    ...baseConfig,
    ignorePaths: [
        'tsconfig.tsbuildinfo',
        ...baseConfig.ignorePaths,
    ],
    words: [
        ...baseConfig.words,
    ],
};
