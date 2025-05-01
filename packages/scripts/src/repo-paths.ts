import {type ArrayElement} from '@augment-vir/common';
import {join, resolve} from 'node:path';

export const monoRepoDir = resolve(import.meta.dirname, '..', '..', '..');

export const rootDistDir = join(monoRepoDir, 'dist');

export const packagesDir = join(monoRepoDir, 'packages');

const packageNames = [
    'book',
    'handle-input',
    'multiplayer-demo',
    'multiplayer-server',
    'multiplayer',
    'render',
    'scripts',
    'entity',
] as const;

export const packageDirs = packageNames.reduce(
    (accum, packageName) => {
        accum[packageName] = join(packagesDir, packageName);

        return accum;
    },
    {} as Record<ArrayElement<typeof packageNames>, string>,
);
