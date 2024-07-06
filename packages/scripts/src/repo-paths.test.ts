import {awaitedFilter} from '@augment-vir/common';
import {assert} from 'chai';
import {readdir, stat} from 'fs/promises';
import {join} from 'path';
import {packageDirs, packagesDir} from './repo-paths';

describe('packageDirs', () => {
    it('contains all packages', async () => {
        const packageNames = await awaitedFilter(await readdir(packagesDir), async (fileName) => {
            return (await stat(join(packagesDir, fileName))).isDirectory();
        });

        assert.hasAllKeys(packageDirs, packageNames);
    });
});
