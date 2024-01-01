import {defineTypedCustomEvent} from 'typed-event-target';
import {GameStateBase} from './base-pipeline-types';

/**
 * An event that is emitted from a `GamePipeline` when the pipeline is paused or resume. The
 * event.detail value is a boolean which indicates whether it was paused (true) or not (false).
 *
 * @category Basic Use
 */
export class PipelinePauseEvent extends defineTypedCustomEvent<boolean>()('game-pipeline-pause') {}

/**
 * An event that is emitted from a `GamePipeline` instance when framerate is recalculated.
 *
 * @category Basic Use
 */
export class PipelineFramerateEvent extends defineTypedCustomEvent<number>()(
    'game-pipeline-framerate',
) {}

/**
 * An event that is emitted from a `GamePipeline` when any part of the game state changes. Note that
 * this will be very noisy as it will fire anything any part of the state is changed.
 *
 * You probably want to use the `GamePipeline.listenToState()` method with a specific sub-property
 * instead.
 */
export class WholeGameStateChangeEvent<
    GameState extends GameStateBase = GameStateBase,
> extends defineTypedCustomEvent<unknown>()('game-pipeline-whole-game-state-change') {
    public override readonly detail: GameState = {} as any;
    public something: GameState = {} as any;
}
