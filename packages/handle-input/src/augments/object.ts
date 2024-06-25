import {
    getObjectTypedEntries,
    PropertyValueType,
    typedObjectFromEntries,
} from '@augment-vir/common';

export function reverseObjectKeyValue<const T extends Record<PropertyKey, PropertyKey>>(
    input: T,
): Record<PropertyValueType<T>, keyof T> {
    return typedObjectFromEntries(
        getObjectTypedEntries(input).map(
            ([
                key,
                value,
            ]): [PropertyKey, PropertyKey] => [
                value!,
                key,
            ],
        ),
    ) as Record<PropertyValueType<T>, keyof T>;
}
