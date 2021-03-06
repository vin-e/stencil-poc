
// disco: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './disco.core.js';
import { COMPONENTS } from './disco.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
