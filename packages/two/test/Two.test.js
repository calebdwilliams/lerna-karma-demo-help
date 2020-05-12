import { expect, fixture, html } from '@open-wc/testing';

describe('Two', () => {
  it('works', async () => {
    const el = await fixture(html`<cdw-two></cdw-two>`);

    expect(el.foo).to.equal('baz');
  });
});
