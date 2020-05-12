import { CdwOne } from './lib/One.js';
export { CdwOne } from './lib/One.js';

if (!customElements.get('cdw-one')) {
  customElements.define('cdw-one', CdwOne);
}
