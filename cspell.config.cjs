const {baseConfig} = require('@virmator/spellcheck/configs/cspell.config.base.cjs');

module.exports = {
    ...baseConfig,
    ignorePaths: [
        ...baseConfig.ignorePaths,
    ],
    words: [
        ...baseConfig.words,
        'bbox',
        'cullable',
        'footguns',
        'hitbox',
        'hitboxes',
        'pixi',
        'pixijs',
        'singleplayer',
        'stunprotocol',
        'themself',
        'wasd',
        'webgpu',
    ],
};
