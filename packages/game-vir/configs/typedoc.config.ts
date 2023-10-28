import {join, resolve} from 'path';
import type {TypeDocOptions} from 'typedoc';
import {baseTypedocConfig} from 'virmator/dist/compiled-base-configs/base-typedoc';

const repoRoot = resolve(__dirname, '..');
const indexTsFile = join(repoRoot, 'src', 'index.ts');

export const typeDocConfig: Partial<TypeDocOptions> = {
    ...baseTypedocConfig,
    out: join(repoRoot, 'dist-docs'),
    excludePrivate: true,
    entryPoints: [
        indexTsFile,
    ],
    navigation: {
        includeCategories: true,
    },
    defaultCategory: 'Advanced Use',
    categoryOrder: [
        'Basic Use',
        'Advanced Use',
        'Mocks',
    ],
};
