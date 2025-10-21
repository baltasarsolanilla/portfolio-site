import { SOCIAL_LINKS } from './common';

describe('SOCIAL_LINKS', () => {
  it('has GitHub and LinkedIn links', () => {
    const names = SOCIAL_LINKS.map((l) => l.name);
    expect(names).toEqual(expect.arrayContaining(['GitHub', 'LinkedIn']));
  });
});