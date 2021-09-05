import { LogoLink } from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    expect(screen.getByRole('heading', { name: 'Olá mundo' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Olá mundo' })).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" srcImg="logo.jpg" />);
    expect(screen.getByAltText('Olá mundo')).toHaveAttribute('src', 'logo.jpg');
  });

  it('should render internal link', () => {
    renderTheme(<LogoLink link="/target" text="Olá mundo" srcImg="logo.jpg" />);
    expect(screen.getByAltText('Olá mundo')).toHaveAttribute('src', 'logo.jpg');
  });

  it('should render internal link with test only', () => {
    renderTheme(<LogoLink link="/target" text="Olá mundo" />);
    expect(screen.getByRole('heading', { name: 'Olá mundo' })).toBeInTheDocument();
  });

  it('should render a link with target blank', () => {
    renderTheme(<LogoLink link="/target" text="Olá mundo" newTab={true} />);
    expect(screen.getByRole('heading', { name: 'Olá mundo' })).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<LogoLink link="#target" text="Olá mundo" srcImg="logo.jpg" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
