import {menuNavPage} from './book-pages/menu-nav.book';
import {readBindingsStagePage} from './book-pages/read-bindings.stage.book';
import {readRawInputStagePage} from './book-pages/read-raw-input.stage.book';
import {virDeviceListPage} from './book-pages/vir-device-list.element.book';
import {virFpsPage} from './book-pages/vir-fps.element.book';
import {virGlowPulseBookPage} from './book-pages/vir-glow-pulse.element.book';
import {virSimpleAssignBindingsPage} from './book-pages/vir-simple-assign-bindings.element.book';
import {elementsPage, stagesPage} from './top-level-pages';

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
