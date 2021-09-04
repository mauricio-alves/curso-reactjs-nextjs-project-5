import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>children</TextComponent>);
    expect(screen.getByText('children')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>children</TextComponent>);
    expect(container).toMatchSnapshot();
  });
});
