import {menuNavPage} from './book-pages/menu-nav.book.js';
import {readBindingsStagePage} from './book-pages/read-bindings.stage.book.js';
import {readRawInputStagePage} from './book-pages/read-raw-input.stage.book.js';
import {virDeviceListPage} from './book-pages/vir-device-list.element.book.js';
import {virFpsPage} from './book-pages/vir-fps.element.book.js';
import {virGlowPulseBookPage} from './book-pages/vir-glow-pulse.element.book.js';
import {virSimpleAssignBindingsPage} from './book-pages/vir-simple-assign-bindings.element.book.js';
import {elementsPage, stagesPage} from './top-level-pages.js';

export const allGameVirBookEntries = [
    stagesPage,
    readBindingsStagePage,
    readRawInputStagePage,

    elementsPage,
    menuNavPage,
    virDeviceListPage,
    virFpsPage,
    virGlowPulseBookPage,
    virSimpleAssignBindingsPage,
];
