import {defineTypedCustomEvent} from 'typed-event-target';

/**
 * An event that is emitted from a GamePipeline when the pipeline is paused or resume. The
 * event.detail value is a boolean which indicates whether it was paused (true) or not (false).
 *
 * @category Basic Use
 */
export class PipelinePauseEvent extends defineTypedCustomEvent<boolean>()('game-pipeline-pause') {}

/**
 * An event that is emitted from a GamePipeline when framerate is recalculated.
 *
 * @category Basic Use
 */
export class PipelineFramerateEvent extends defineTypedCustomEvent<number>()(
    'game-pipeline-framerate',
) {}
