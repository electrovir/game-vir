import {readActionsStagePage} from './book-pages/read-actions.stage.book';
import {readRawInputStagePage} from './book-pages/read-raw-input.stage.book';
import {virDeviceListPage} from './book-pages/vir-device-list.element.book';
import {virGlowPulseBookPage} from './book-pages/vir-glow-pulse.element.book';
import {virSimpleAssignBindingsPage} from './book-pages/vir-simple-assign-bindings.element.book';

export const allGameVirBookEntries = [
    readActionsStagePage,
    readRawInputStagePage,

    virDeviceListPage,
    virGlowPulseBookPage,
    virSimpleAssignBindingsPage,
];
