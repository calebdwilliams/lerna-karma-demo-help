import { LitElement, html } from 'lit-element';

export class CdwOne extends LitElement {
  constructor() {
    super();
    this.foo = 'bar';
  }

  render() {
    return html`<h1>${this.foo}</h1>`;
  }
}
