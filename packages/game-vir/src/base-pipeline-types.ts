import {JsonCompatibleObject} from '@augment-vir/common';

/** Base type for all GameState type parameters. */
export type GameStateBase = Readonly<JsonCompatibleObject>;

/** Base type for all execution type type parameters. */
export type ExecutionContextBase = Readonly<Record<PropertyKey, unknown>>;
