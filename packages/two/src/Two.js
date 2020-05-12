import { LitElement, html } from 'lit-element';

export class CdwTwo extends LitElement {
  constructor() {
    super();
    this.foo = 'baz';
  }

  render() {
    return html`<h1>${this.foo}</h1>`;
  }
}

