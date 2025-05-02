/* eslint-disable @typescript-eslint/no-unsafe-function-type */

import {getOrSetFromMap, type AnyObject} from '@augment-vir/common';
import {type AbstractConstructor, type Constructor} from 'type-fest';

/**
 * Map all ancestor constructors of an object to the objects.
 *
 * @category Internal
 */
export class ConstructorMap {
    /** A map of constructors to their added instances. */
    public map = new Map<Function, Set<AnyObject>>();

    constructor(protected readonly topMostConstructor: Function | undefined = undefined) {}

    /**
     * Add a new instance, mapping each of its ancestor constructors to it inside
     * {@link ConstructorMap.map}.
     */
    public add(instance: AnyObject) {
        this.traverseConstructors(instance, Object.getPrototypeOf(instance), 'add');
    }

    /** Gets all added instances of the given constructor. */
    public getInstances<T>(constructor: AbstractConstructor<T> | Constructor<T>): Set<T> {
        return this.map.get(constructor) || new Set();
    }

    /** Remove a new instance, removing it from all mappings inside {@link ConstructorMap.map}. */
    public remove(instance: AnyObject) {
        this.traverseConstructors(instance, Object.getPrototypeOf(instance), 'remove');
    }

    /** Recursively map all ancestor prototypes to the given instance. */
    protected traverseConstructors(
        instance: AnyObject,
        prototype: any,
        operation: 'add' | 'remove',
    ) {
        const constructor = prototype.constructor;
        if (
            !constructor ||
            constructor === Function ||
            constructor === Object ||
            constructor === this.topMostConstructor
        ) {
            /** Stop recursing into constructors. */
            return;
        }

        if (operation === 'add') {
            const set = getOrSetFromMap(this.map, constructor, () => new Set());
            set.add(instance);
        } else {
            const set = this.map.get(constructor);
            if (set) {
                set.delete(instance);
                if (!set.size) {
                    this.map.delete(constructor);
                }
            }
        }
        this.traverseConstructors(instance, Object.getPrototypeOf(prototype), operation);
    }

    /** Clean up the internal map. */
    public destroy() {
        this.map.clear();
    }
}
