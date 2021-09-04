import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export type GridImageElementProps = {
  altText: string;
  srcImg: string;
};

export type GridImageProps = {
  background?: boolean;
  title: string;
  description: string;
  grid?: GridImageElementProps[];
  sectionId?: string;
};

export const GridImage = ({ title, description, grid, background = false, sectionId = '' }: GridImageProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={`${el.srcImg}${el.altText}`}>
              <Styled.Image src={el.srcImg} alt={el.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};