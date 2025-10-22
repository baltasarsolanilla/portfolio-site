import { render, screen } from '@testing-library/react';
import { SectionContainer } from './section-container';

describe('SectionContainer', () => {
  it('renders children and passes id/className', () => {
    render(
      <SectionContainer id="foo" className="bar">
        <span>Child</span>
      </SectionContainer>
    );

    expect(screen.getByText('Child')).toBeInTheDocument();
    const section = screen.getByText('Child').closest('section');
    expect(section).toHaveAttribute('id', 'foo');
  });
});