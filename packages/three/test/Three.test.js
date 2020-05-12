import { expect, fixture, html } from '@open-wc/testing';
import '../index.js';

describe('Three', () => {
  it('works', async () => {
    const el = await fixture(html`<cdw-three></cdw-three>`);

    expect(el.foo).to.equal('foo');
  });
});
