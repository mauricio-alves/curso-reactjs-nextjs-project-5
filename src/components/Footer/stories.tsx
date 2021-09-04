import { Footer, FooterProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="#">Feito com ❤ por Mauricio Alves</a></p>`,
  },
} as Meta;

export const Template: Story<FooterProps> = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
