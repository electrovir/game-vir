import {mapObject, type Values} from '@augment-vir/common';

/** Flips object keys and values. */
export function reverseObjectKeyValue<const T extends Record<PropertyKey, PropertyKey>>(
    input: T,
): Record<Values<T>, keyof T> {
    return mapObject(input, (key, value) => {
        return {
            key: value,
            value: key,
        };
    });
}
