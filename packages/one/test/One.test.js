import { expect, fixture, html } from '@open-wc/testing';
import '../index.js';

describe('One', () => {
  it('works', async () => {
    const el = await fixture(html`<cdw-one></cdw-one>`);

    expect(el.foo).to.equal('bar');
  });
});
