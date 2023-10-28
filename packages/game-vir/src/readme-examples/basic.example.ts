import {GameModule, GamePipeline} from '..';

const counterModule: GameModule<{counter: number}> = {
    moduleId: {
        name: 'counter',
        version: 1,
    },
    runModule({gameState}) {
        return {
            stateChange: {
                counter: gameState.counter + 1,
            },
        };
    },
};

const myPipeline = new GamePipeline(
    /**
     * Define the list of GameModule objects.
     *
     * This list is order sensitive, as the pipeline will execute each module in the order provided
     * here.
     */
    [counterModule],
    /**
     * Provide initial state.
     *
     * The state type is deduced from all the provided game modules above.
     */
    {counter: 0},
    /** This is the default value for "execution context". But we're not using this right now. */
    {},
);

myPipeline.startPipelineLoop();
