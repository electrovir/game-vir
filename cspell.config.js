const {baseConfig} = require('virmator/base-configs/base-cspell.js');

module.exports = {
    ...baseConfig,
    ignorePaths: [
        'tsconfig.tsbuildinfo',
        '/ts.out/',
        ...baseConfig.ignorePaths,
    ],
    words: [
        ...baseConfig.words,
    ],
};
