import { LitElement, html } from 'lit-element';

class CdwTwo extends LitElement {
  constructor() {
    super();
    this.foo = 'baz';
  }

  render() {
    return html`<h1>${this.foo}</h1>`;
  }
}

export { CdwTwo };
//# sourceMappingURL=Two.js.map
