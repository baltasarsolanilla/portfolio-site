import { render, screen } from '@testing-library/react';
import { ExternalLink } from 'lucide-react';
import { MyWorkLink } from './my-work-link';

describe('MyWorkLink', () => {
  it('renders anchor with icon and label', () => {
    render(<MyWorkLink url="https://example.com" label="Live Demo" icon={ExternalLink} />);
    const link = screen.getByRole('link', { name: /Live Demo/i });
    expect(link).toHaveAttribute('href', 'https://example.com');
  });
});