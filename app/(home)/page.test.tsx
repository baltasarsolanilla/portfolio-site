import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home page', () => {
  it('renders main sections', () => {
    render(<Home />);
    expect(screen.getByText(/Frontend Developer/i)).toBeInTheDocument();
    expect(screen.getAllByText(/About/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Featured/i)).toBeInTheDocument();
    expect(screen.getByText(/Let’s Work|Let's Work/i)).toBeInTheDocument();
  });
});