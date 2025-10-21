import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('renders with default variant', () => {
    render(<Button>Click</Button>);
    const btn = screen.getByRole('button', { name: 'Click' });
    expect(btn).toHaveClass('bg-primary');
  });

  it('renders outline variant and lg size', () => {
    render(
      <Button variant="outline" size="lg">
        Press
      </Button>
    );
    const btn = screen.getByRole('button', { name: 'Press' });
    expect(btn).toHaveClass('border');
    expect(btn.className).toMatch(/h-10/);
  });

  it('supports asChild composition', () => {
    render(
      <Button asChild>
        <a href="#x">Link</a>
      </Button>
    );
    const link = screen.getByRole('link', { name: 'Link' });
    expect(link).toBeInTheDocument();
  });
});