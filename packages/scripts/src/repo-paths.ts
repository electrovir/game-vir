import {join, resolve} from 'node:path';

export const monoRepoDir = resolve(import.meta.dirname, '..', '..', '..');

export const rootDistDir = join(monoRepoDir, 'dist');

const packagesDir = join(monoRepoDir, 'packages');

export const packageDirs = {
    scripts: join(packagesDir, 'scripts'),
    book: join(packagesDir, 'book'),
    'handle-input': join(packagesDir, 'handle-input'),
} as const;
