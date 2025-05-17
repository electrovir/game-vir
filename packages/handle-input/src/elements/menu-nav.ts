import {
    getObjectTypedEntries,
    getObjectTypedValues,
    type PartialWithUndefined,
} from '@augment-vir/common';
import {type AnyDuration, convertDuration} from 'date-vir';
import {NavController, type NavControllerOptions, NavDirection} from 'device-navigation';
import {type RemoveListenerCallback, type VirLineWithState} from 'vir-line';
import {type PlayersActiveBindingsMap} from '../stages/read-bindings.stage.js';

export {nav, navAttribute, NavController} from 'device-navigation';

/**
 * All supported menu navigation bindings. To ignore any, simply don't allow players to bind to
 * them. Any menus that don't have sufficient nestings to support any specific binding simply won't
 * do anything if they're active.
 *
 * @category Menu
 */
export enum MenuNavBinding {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right',

    /**
     * Enter into a sub-menu.
     *
     * For example, this is usually a click, the enter button, "A" on Xbox or Nintendo controllers,
     * or "X" on Playstation controllers.
     */
    Enter = 'enter',
    /**
     * Exit out of a sub-menu.
     *
     * For example, this is usually the Escape key, "B" on Xbox or Nintendo controllers, or "△" on
     * Playstation controllers.
     */
    Exit = 'exit',

    /** Navigate to the next section in a menu. */
    SectionNext = 'section-next',
    /** Navigate to the previous section in a menu. */
    SectionPrevious = 'section-previous',
}

/**
 * The state that `VirLine` must contain for {@link MenuNavController} to function.
 *
 * @category Internal
 */
export type MenuNavState = PartialWithUndefined<{
    playersActiveBindings: PlayersActiveBindingsMap<MenuNavBinding>;
}>;

/**
 * Options for {@link MenuNavController}.
 *
 * @category Menu
 */
export type MenuNavOptions = Readonly<
    Partial<{
        /**
         * The duration that any menu nav binding must be held before it starts auto-repeating.
         *
         * @default {milliseconds: 500}
         */
        repeatThreshold: Readonly<AnyDuration>;
        /**
         * The minimum interval between each repetition in a repeating menu nav binding.
         *
         * @default {milliseconds: 60}
         */
        repeatInterval: Readonly<AnyDuration>;
        /**
         * Allow wrapping when navigating menu items.
         *
         * @default true
         */
        allowWrapping: boolean;
    }>
> &
    NavControllerOptions;

/**
 * Listen to active menu navigation bindings on a `VirLine` instance and perform them within the
 * given element.
 *
 * @category Elements
 */
export class MenuNavController extends NavController {
    constructor(
        host: HTMLElement,
        private readonly virLine: VirLineWithState<MenuNavState>,
        options: MenuNavOptions = {},
    ) {
        super(host);
        this.options = {
            ...this.options,
            ...options,
        };
        this.listenToVirLineState();
    }

    private lastUnlisten: undefined | RemoveListenerCallback;
    private paused = false;

    /**
     * The current options assigned to this {@link MenuNavController} instance. Override the defaults
     * in the constructor, or mutate it at any time to affect all subsequent menu navigation.
     */
    public override options: Required<MenuNavOptions> = {
        repeatThreshold: {milliseconds: 500},
        repeatInterval: {milliseconds: 60},
        allowWrapping: true,
        alwaysRequireFocused: true,
    };

    /** Stop reacting to user inputs. */
    public pause() {
        this.paused = true;
    }

    /** Resume reacting to user inputs. */
    public resume() {
        this.paused = false;
    }

    /** Destroy all listeners to free up memory. */
    public override destroy() {
        this.lastUnlisten?.();
        super.destroy();
    }

    private listenToVirLineState() {
        if (this.lastUnlisten) {
            this.lastUnlisten();
        }

        this.lastUnlisten = this.virLine.listenToState(
            false,
            {
                playersActiveBindings: true,
            },
            (playersActiveBindings) => {
                if (!playersActiveBindings || this.paused) {
                    return;
                }

                const repeatThreshold = convertDuration(this.options.repeatThreshold, {
                    milliseconds: true,
                }).milliseconds;
                const repeatInterval = convertDuration(this.options.repeatInterval, {
                    milliseconds: true,
                }).milliseconds;

                const bindingsToAct: Partial<Record<MenuNavBinding, boolean>> = {};

                getObjectTypedValues(playersActiveBindings).forEach((playerActiveBindings) => {
                    getObjectTypedEntries(playerActiveBindings).forEach(
                        ([
                            bindingName,
                            activeBinding,
                        ]) => {
                            if (activeBinding.holdDuration.milliseconds >= repeatThreshold) {
                                if (
                                    activeBinding.holdDuration.milliseconds -
                                        activeBinding.lastActDuration.milliseconds >
                                    repeatInterval
                                ) {
                                    bindingsToAct[bindingName] = true;
                                    activeBinding.actCount++;
                                    activeBinding.lastActDuration = activeBinding.holdDuration;
                                }
                            } else if (
                                !activeBinding.holdDuration.milliseconds &&
                                !activeBinding.actCount
                            ) {
                                bindingsToAct[bindingName] = true;
                                activeBinding.actCount++;
                            }
                        },
                    );
                });

                if (bindingsToAct[MenuNavBinding.Enter]) {
                    this.enterInto();
                    return;
                }
                if (bindingsToAct[MenuNavBinding.Exit]) {
                    this.exitOutOf();
                    return;
                }
                const sectionDirection =
                    bindingsToAct[MenuNavBinding.SectionNext] &&
                    !bindingsToAct[MenuNavBinding.SectionPrevious]
                        ? NavDirection.Right
                        : !bindingsToAct[MenuNavBinding.SectionNext] &&
                            bindingsToAct[MenuNavBinding.SectionPrevious]
                          ? NavDirection.Left
                          : undefined;

                if (sectionDirection) {
                    this.navigatePibling({
                        allowWrapping: this.options.allowWrapping,
                        direction: sectionDirection,
                    });
                    return;
                }

                const vertical =
                    bindingsToAct[MenuNavBinding.Up] && !bindingsToAct[MenuNavBinding.Down]
                        ? NavDirection.Up
                        : !bindingsToAct[MenuNavBinding.Up] && bindingsToAct[MenuNavBinding.Down]
                          ? NavDirection.Down
                          : undefined;

                const horizontal =
                    bindingsToAct[MenuNavBinding.Right] && !bindingsToAct[MenuNavBinding.Left]
                        ? NavDirection.Right
                        : !bindingsToAct[MenuNavBinding.Right] && bindingsToAct[MenuNavBinding.Left]
                          ? NavDirection.Left
                          : undefined;

                if (vertical) {
                    this.navigate({
                        allowWrapping: this.options.allowWrapping,
                        direction: vertical,
                    });
                }
                if (horizontal) {
                    this.navigate({
                        allowWrapping: this.options.allowWrapping,
                        direction: horizontal,
                    });
                }
            },
        );
    }
}
