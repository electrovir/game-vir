import {MaybePromise, TypedFunction} from '@augment-vir/common';

export type CommandParams = {args: ReadonlyArray<string>};

export type CommandCallback = TypedFunction<CommandParams, MaybePromise<void>>;
