import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/footer/footer';

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

  it('renders social links', () => {
    render(<Footer />);

    const githubLink = screen.getByLabelText('GitHub');
    const linkedinLink = screen.getByLabelText('LinkedIn');

    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
  });

  it('social links have correct href attributes', () => {
    render(<Footer />);

    const githubLink = screen.getByLabelText('GitHub');
    const linkedinLink = screen.getByLabelText('LinkedIn');

    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/baltasarsolanilla'
    );
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/baltasarsolanilla'
    );
  });

  it('social links open in new tab', () => {
    render(<Footer />);

    const githubLink = screen.getByLabelText('GitHub');
    const linkedinLink = screen.getByLabelText('LinkedIn');

    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders correct number of social links', () => {
    render(<Footer />);

    const socialLinks = screen.getAllByRole('link');
    expect(socialLinks).toHaveLength(2);
  });
});
