import {CommandCallback} from './command-implementation';
import {copyToDist} from './commands/copy-to-dist';

export const commands = {
    'copy-to-dist': copyToDist,
} as const satisfies Record<string, CommandCallback>;
