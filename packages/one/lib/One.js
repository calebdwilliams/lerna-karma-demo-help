import { LitElement, html } from 'lit-element';

class CdwOne extends LitElement {
  constructor() {
    super();
    this.foo = 'bar';
  }

  render() {
    return html`<h1>${this.foo}</h1>`;
  }
}

export { CdwOne };
//# sourceMappingURL=One.js.map
