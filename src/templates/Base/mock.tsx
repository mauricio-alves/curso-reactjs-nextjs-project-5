import linksMock from '../../components/NavLinks/mock';

import { BaseProps } from '.';
import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';

export const mockBase = {
  children: (
    <>
      <GridText {...gridMock} background />;
      <GridText {...gridMock} />;
      <GridText {...gridMock} background />;
      <GridText {...gridMock} />;
      <GridText {...gridMock} background />;
      <GridText {...gridMock} />;
    </>
  ),
  links: linksMock,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: '<p>Teste de footer</p>',
} as BaseProps;
