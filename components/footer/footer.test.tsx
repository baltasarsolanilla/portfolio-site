import { render, screen } from '@testing-library/react';
import Footer from '@/components/footer/footer';

describe('Footer Component', () => {
  it('renders footer with correct copyright text', () => {
    render(<Footer />);

    const copyrightText = screen.getByText(
      /2025 Baltasar Solanilla. All rights reserved./i
    );
    expect(copyrightText).toBeInTheDocument();
  });

  it('renders footer element with correct role', () => {
    render(<Footer />);

    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  it('applies correct CSS classes for styling', () => {
    render(<Footer />);

    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveClass('py-8', 'px-4', 'border-t');
  });

  it('applies correct container styling', () => {
    render(<Footer />);

    const footerElement = screen.getByRole('contentinfo');
    const containerDiv = footerElement.querySelector('div');
    expect(containerDiv).toHaveClass(
      'max-w-7xl',
      'text-center',
      'text-gray-400'
    );
  });

  it('renders paragraph with correct text content', () => {
    render(<Footer />);

    const paragraph = screen.getByText(
      /2025 Baltasar Solanilla. All rights reserved./i
    );
    expect(paragraph.tagName).toBe('P');
  });

  it('has correct semantic structure', () => {
    render(<Footer />);

    const footerElement = screen.getByRole('contentinfo');
    const containerDiv = footerElement.querySelector('div');
    const paragraph = containerDiv?.querySelector('p');

    expect(footerElement).toBeInTheDocument();
    expect(containerDiv).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });

  it('maintains consistent text content', () => {
    render(<Footer />);

    const expectedText = '© 2025 Baltasar Solanilla. All rights reserved.';
    const actualText = screen.getByText(
      /2025 Baltasar Solanilla. All rights reserved./i
    ).textContent;

    expect(actualText).toBe(expectedText);
  });

  it('is accessible and visible', () => {
    render(<Footer />);

    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeVisible();
  });
});
