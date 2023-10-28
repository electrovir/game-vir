import {MaybePromise} from '@augment-vir/common';
import {ExecutionContextBase, GameStateBase} from './base-pipeline-types';
import {GameModuleRunnerInput} from './game-module';
/**
 * Optional options that can be provided to a pipeline. init options cannot be updated after
 * pipeline construction. All other options can be updated after pipeline construction.
 *
 * @category Basic Use
 */
export type GamePipelineOptions<
    GameState extends GameStateBase,
    ExecutionContext extends ExecutionContextBase,
> = Partial<{
    /** These options can only be set on pipeline construction. */
    init: Partial<{
        /** Start the pipeline loop immediately. */
        startLoopImmediately: boolean;
        /** By default module names are checked for uniqueness. To turn that off, set this to true. */
        allowDuplicateModuleNames: boolean;
        onDestroy(
            inputs: Omit<
                GameModuleRunnerInput<GameState, ExecutionContext>,
                'millisecondsSinceLastFrame'
            >,
        ): MaybePromise<void>;
    }>;
    /**
     * How long to wait before recalculating framerate. Shorter times will cause
     * PipelineFramerateEvent to be emitted more frequently, but the framerate calculations will be
     * less stable. Longer times will result in more stable but less meaningful framerate values.
     *
     * @defaultValue {milliseconds: 500}
     */
    framerateCalculationWait: {milliseconds: number};
    /** Collection of options that should only be used for debugging. */
    debug: Partial<{
        /**
         * Enable saving frame history. This can quickly become expensive to memory as each frame
         * will be saved as well as each module's output.
         */
        enableFrameHistory_Expensive: boolean;
        /** Turn warning logs on. */
        enableWarningLogging: boolean;
        /**
         * If enableWarningLogging is turned on, then dropping below this framerate will log
         * warnings.
         */
        targetFramerate: number;
    }>;
}>;
