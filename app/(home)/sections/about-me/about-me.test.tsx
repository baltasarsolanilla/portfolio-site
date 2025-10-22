import { render, screen } from '@testing-library/react';
import { AboutMe } from './about-me';

describe('AboutMe', () => {
  it('renders heading and some tech badges', () => {
    render(<AboutMe />);
    expect(screen.getAllByText(/About/i).length).toBeGreaterThan(0);
    // At least one known tech from constants
    expect(screen.getAllByText(/React|TypeScript|Next\.js/i).length).toBeGreaterThan(0);
  });
});