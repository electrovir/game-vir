import {assert} from '@augment-vir/assert';
import {awaitedFilter} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {readdir, stat} from 'node:fs/promises';
import {join} from 'node:path';
import {packageDirs, packagesDir} from './repo-paths.js';

describe('packageDirs', () => {
    it('contains all packages', async () => {
        const packageNames = await awaitedFilter(await readdir(packagesDir), async (fileName) => {
            return (await stat(join(packagesDir, fileName))).isDirectory();
        });

        assert.hasKeys(packageDirs, packageNames);
    });
});
