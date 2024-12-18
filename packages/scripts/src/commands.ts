import {CommandCallback} from './command-implementation.js';
import {copyToDist} from './commands/copy-to-dist.js';

export const commands = {
    'copy-to-dist': copyToDist,
} as const satisfies Record<string, CommandCallback>;
