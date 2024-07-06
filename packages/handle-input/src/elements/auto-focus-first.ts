import {queryThroughShadow} from '@augment-vir/browser';
import {onDomCreated} from 'element-vir';
import {assertInstanceOf} from 'run-time-assertions';

/**
 * An HTML template directive that will automatically find, on initial DOM creation, the first
 * instance of the given selector and focus it. If no instance of the given selector is found, this
 * directive throws an error.
 *
 * @category Elements
 */
export function autoFocusFirst(selector: string) {
    return onDomCreated((element) => {
        const firstElement = queryThroughShadow({element, query: selector, all: false});

        assertInstanceOf(firstElement, HTMLElement, `Failed to find first '${selector}' to focus.`);

        firstElement.focus();
    });
}
