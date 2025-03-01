/* eslint-disable @typescript-eslint/no-non-null-assertion */
export function calculateMedian(array: number[]): number | undefined {
    if (!array.length) {
        return undefined;
    }

    const sorted = array.toSorted();

    const middleIndex = Math.floor(sorted.length / 2);
    return sorted.length % 2
        ? sorted[middleIndex]
        : (sorted[middleIndex - 1]! + sorted[middleIndex]!) / 2;
}
