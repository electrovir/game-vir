import {hasKey, joinWithFinalConjunction} from '@augment-vir/common';
import {extractRelevantArgs} from 'cli-args-vir';
import {commands} from './commands';

async function cli(rawArgs: ReadonlyArray<string>) {
    const relevantArgs = extractRelevantArgs({
        binName: undefined,
        fileName: import.meta.filename,
        rawArgs,
    });

    const commandName = relevantArgs[0];

    if (!commandName || !hasKey(commands, commandName)) {
        throw new Error(
            `Invalid command given: '${commandName}'. Expected one of: ${joinWithFinalConjunction(Object.keys(commands), 'or')}`,
        );
    }

    const command = commands[commandName];

    await command();
}

cli(process.argv);
