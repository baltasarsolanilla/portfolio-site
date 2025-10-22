import { render, screen, fireEvent } from '@testing-library/react';
import { Hero } from './hero';

describe('Hero', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="projects"></div>
      <div id="contact"></div>
    `;
    (Element.prototype.scrollIntoView as jest.Mock).mockClear();
  });

  it('renders and buttons trigger smooth scroll', () => {
    render(<Hero />);
    fireEvent.click(screen.getByRole('button', { name: /View Projects/i }));
    fireEvent.click(screen.getByRole('button', { name: /Get In Touch/i }));
    expect(Element.prototype.scrollIntoView).toHaveBeenCalledTimes(2);
  });
});