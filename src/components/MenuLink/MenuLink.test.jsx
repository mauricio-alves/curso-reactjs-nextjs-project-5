import { MenuLink } from '.';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="https://www.localhost">children</MenuLink>);
    expect(screen.getByRole('link', { name: 'children' })).toHaveAttribute(
      'target',
      '_self'
    );
  });

  it('should open in a new tab', () => {
    const { container } = renderTheme(
      <MenuLink link="https://localhost" newTab={true}>
        children
      </MenuLink>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
