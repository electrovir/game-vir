# game-vir

Exports `GamePipeline`: a class that allows for modular game state control via multiple `GameModule` objects.

-   docs: https://electrovir.github.io/game-vir/docs
-   demo: https://electrovir.github.io/game-vir

## Installation

```sh
npm i game-vir
```

## Usage

The main entry point to this package is the [`GamePipeline` class](https://electrovir.github.io/game-vir/docs/classes/GamePipeline.html) and the [`GameModule` type](https://electrovir.github.io/game-vir/docs/types/GameModule.html).

Other types and interfaces are

Here's a basic example with a single `GameModule`, some game state, and a constructed `GamePipeline`:

<!-- example-link: src/readme-examples/basic.example.ts -->

```TypeScript
import {GameModule, GamePipeline} from 'game-vir';

const counterModule: GameModule<{counter: number}> = {
    moduleId: {
        name: 'counter',
        version: 1,
    },
    runModule({gameState}) {
        return {
            stateUpdate: {
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
```

### Game State vs Execution Context

-   Game State: all state that is serializable. This is state that can be saved to disk, downloaded as a JSON, synced between multiple players, or loaded in subsequent game launches. Some examples of game state would be current player coordinates, high scores, current user inputs, etc.
-   Execution Context: this is all other contextual pipeline requirements that that cannot be serialized, or represent values that cannot be saved to disk and must be rebuilt every time the game loads. Some examples of execution context would be an HTMLCanvasElement instance, Buffers for 3D rendering pipelines, or sensitive player information that shouldn't be saved.

Here's an example with execution context:

<!-- example-link: src/readme-examples/execution-context.example.ts -->

```TypeScript
import {GameModule, GamePipeline} from 'game-vir';

function drawCircle(renderContext: CanvasRenderingContext2D) {
    renderContext.fillStyle = 'blue';
    renderContext.beginPath();
    renderContext.arc(100, 100, 50, 0, Math.PI * 2);
    renderContext.fill();
}

const circleAndCounterModule: GameModule<
    {counter: number},
    {
        /** Render contexts cannot be serialized, so they must go here: in the execution context. */
        renderContext: CanvasRenderingContext2D;
    }
> = {
    moduleId: {
        name: 'circle counter',
        version: 1,
    },
    runModule({gameState, executionContext}) {
        drawCircle(executionContext.renderContext);

        return {
            stateUpdate: {
                counter: gameState.counter + 1,
            },
        };
    },
};

export function setupGamePipeline(canvasElement: HTMLCanvasElement) {
    const renderContext = canvasElement.getContext('2d');

    if (!renderContext) {
        throw new Error('Failed to get render context from canvas element.');
    }

    const myPipeline = new GamePipeline(
        /** GameModule list */
        [circleAndCounterModule],
        /** Initial state. */
        {counter: 0},
        /** Initial execution context. */
        {renderContext},
    );

    myPipeline.startPipelineLoop();
}
```
