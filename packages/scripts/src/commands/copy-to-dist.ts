import {ArrayElement, awaitedForEach, getObjectTypedKeys} from '@augment-vir/common';
import {log} from '@augment-vir/node-js';
import {cp, mkdir, rm} from 'node:fs/promises';
import {join} from 'node:path';
import {packageDirs, rootDistDir} from '../repo-paths';

const packagesToCopy = getObjectTypedKeys(packageDirs).filter((entry) => entry !== 'scripts');

const packageCopyFromPaths: Readonly<Record<ArrayElement<typeof packagesToCopy>, string>> = {
    'handle-input': 'dist-docs',
    book: 'dist-book',
    render: 'dist-docs',
};

export async function copyToDist() {
    log.faint('removing dist...');
    await rm(rootDistDir, {force: true, recursive: true});

    await awaitedForEach(packagesToCopy, async (packageToCopy) => {
        await copyPackageOutputToDist(packageToCopy);
    });

    log.success('all assets copied to dist');
}

async function copyPackageOutputToDist(packageName: keyof typeof packageCopyFromPaths) {
    const copyFromPath = join(packageDirs[packageName], packageCopyFromPaths[packageName]);

    const copyToPath = join(rootDistDir, packageName);

    await mkdir(copyToPath, {recursive: true});

    log.faint(`copying ${packageName}...`);
    await cp(join(copyFromPath), copyToPath, {force: true, recursive: true});
}
