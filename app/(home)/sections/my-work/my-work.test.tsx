import { render, screen } from '@testing-library/react';
import { MyWork } from './my-work';

describe('MyWork', () => {
  it('renders project cards', () => {
    render(<MyWork />);
    expect(screen.getByText('My Portfolio')).toBeInTheDocument();
    expect(screen.getByText('WhatsApp Group Manager Bot')).toBeInTheDocument();
  });
});