import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';

import pagesFakeData from './dados.json';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render sections with correct data', () => {
    const data = mapSections(pagesFakeData[0].sections);
    expect(data[0].component).toBe('');
  });

  it('should test section with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);
    const withNoComponent = mapSections([]);
    expect(withNoTextOrImageGrid).toEqual([
      { __component: 'section.section-grid' },
    ]);
    expect(withNoComponent).toEqual([]);
  });

  it('should test section.section-grid with no text_grid or image_grid', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
    ]);
    expect(withNoTextOrImageGrid.length).toBe(2);
  });

  it('should map section two columns if data is empty', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns if there is data', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'title',
      description: 'abc',
      metadata: {
        section_id: 'intro',
        background: true,
      },
      image: {
        url: 'a.svg',
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('intro');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('title');
  });

  it('shuould map section content with no data', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.html).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section content with data', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'Top 3 Jobs',
      content: 'abc',
      metadata: {
        section_id: 'top3',
        background: false,
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.html).toBe('abc');
    expect(data.sectionId).toBe('top3');
    expect(data.title).toBe('Top 3 Jobs');
  });

  it('should map grid text with data', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      title: 'Top 3 Jobs',
      description: 'Here are some recent work.',
      text_grid: [
        {
          title: 'First',
          description: 'Qualquer coisa',
        },
        {
          title: 'Another site',
          description: 'abc',
        },
      ],
      image_grid: [],
      metadata: {
        section_id: 'grid-one',
        background: true,
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.description).toBe('Here are some recent work.');
    expect(data.sectionId).toBe('grid-one');
    expect(data.title).toBe('Top 3 Jobs');
    expect(data.grid[0].title).toBe('First');
    expect(data.grid[0].description).toBe('Qualquer coisa');
  });

  it('should map grid text with no data', () => {
    const data = mapTextGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.description).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
  });

  it('should map grid image without data', () => {
    const data = mapImageGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map grid image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      title: 'Gallery',
      description: 'Here are some of my pics.',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText:
              'pintura na parede de um homem descendo pelo papel de uma máquina de escrever',
            url: 'https://res.cloudinary.com/lordmaus/image/upload/v1627833274/360x360_r_2_1f1324a934.jpg',
          },
        },
      ],
      metadata: {
        section_id: 'gallery',
        background: false,
        name: 'gallery',
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.description).toBe('Here are some of my pics.');
    expect(data.sectionId).toBe('gallery');
    expect(data.title).toBe('Gallery');
    expect(data.grid[0].srcImg).toBe(
      'https://res.cloudinary.com/lordmaus/image/upload/v1627833274/360x360_r_2_1f1324a934.jpg'
    );
    expect(data.grid[0].altText).toBe(
      'pintura na parede de um homem descendo pelo papel de uma máquina de escrever'
    );
  });
});
