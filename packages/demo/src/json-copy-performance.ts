import {copyThroughJson, mergeDeep, randomString, timeCallback} from '@augment-vir/common';

type GiganticObject = {[key: string]: GiganticObject | string};

function createGiganticJsonObject({
    breadth,
    depth,
}: {
    depth: number;
    breadth: number;
}): GiganticObject {
    if (!depth) {
        return {value: randomString()};
    }

    const giganticObject: GiganticObject = {};

    for (let index = 0; index < breadth; index++) {
        const newKey = randomString();
        const newValue = createGiganticJsonObject({breadth, depth: depth - 1});
        giganticObject[newKey] = newValue;
    }

    return giganticObject;
}

export function testJsonCopyPerformance() {
    const createDuration = timeCallback(() => {
        console.log(
            ((window as any).hugeObject = createGiganticJsonObject({
                breadth: 5,
                depth: 7,
                // // ~50 MB, 200 ms to create, 40 ms to copy, 100 ms to merge
                // breadth: 5,
                // depth: 7,
                // // ~250 MB, 1 second to create, 200 ms to copy, 500 ms to merge
                // breadth: 5,
                // depth: 8,
                // // 1.3 GB, 5 seconds to create, 1 second to copy, 2 seconds to merge
                // breadth: 5,
                // depth: 9,
            })),
        );
    });
    const copyDuration = timeCallback(() => {
        console.log(((window as any).hugeObjectCopy = copyThroughJson((window as any).hugeObject)));
    });
    const mergeDuration = timeCallback(() => {
        console.log(
            ((window as any).hugeObjectMerged = mergeDeep(
                (window as any).hugeObject,
                (window as any).hugeObjectCopy,
            )),
        );
    });
    console.log(
        'creation duration',
        createDuration,
        'copy duration',
        copyDuration,
        'merge duration',
        mergeDuration,
    );
}
