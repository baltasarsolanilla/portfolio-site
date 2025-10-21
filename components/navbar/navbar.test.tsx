import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from './navbar';

describe('Navbar', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="about"></div>
      <div id="projects"></div>
      <div id="contact"></div>
    `;
    (Element.prototype.scrollIntoView as jest.Mock).mockClear();
  });

  it('renders nav items', () => {
    render(<Navbar />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('toggles mobile menu and scrolls to section', () => {
    render(<Navbar />);
    // open mobile menu (first button is the toggle)
    fireEvent.click(screen.getAllByRole('button')[0]);
    // click About
    fireEvent.click(screen.getAllByText('About')[0]);
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });
});