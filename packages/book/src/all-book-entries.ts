import {readActionsStagePage} from './book-pages/read-actions.stage.book';
import {readRawInputStagePage} from './book-pages/read-raw-input.stage.book';
import {virSimpleAssignBindingsPage} from './book-pages/vir-simple-assign-bindings.element.book';

export const allGameVirBookEntries = [
    readRawInputStagePage,
    readActionsStagePage,
    virSimpleAssignBindingsPage,
];
