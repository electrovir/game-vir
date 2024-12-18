import {check} from '@augment-vir/assert';
import {joinWithFinalConjunction} from '@augment-vir/common';
import {extractRelevantArgs} from '@augment-vir/node';
import {commands} from './commands.js';

async function cli(rawArgs: ReadonlyArray<string>) {
    const relevantArgs = extractRelevantArgs({
        binName: undefined,
        fileName: import.meta.filename,
        rawArgs,
    });

    const commandName = relevantArgs[0];

    if (!commandName || !check.isKeyOf(commandName, commands)) {
        throw new Error(
            `Invalid command given: '${commandName}'. Expected one of: ${joinWithFinalConjunction(Object.keys(commands), 'or')}`,
        );
    }

    const command = commands[commandName];

    await command();
}

await cli(process.argv);
