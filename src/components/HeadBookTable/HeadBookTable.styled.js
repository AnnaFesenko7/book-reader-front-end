import styled from 'styled-components';

export const StyledThead = styled.thead`
  margin-bottom: 8px;
  width: 100%;
`;

export const StyledTh = styled.th`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.secondBody};
  color: ${p => p.theme.colors.notActiveText};
  width: 60px;

  @media ${p => p.theme.media.tablet} {
    text-align: left;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
    width: ${p =>
      p.status === 'haveRead'
        ? setSizeForMediaTabletHaveRead(p.name)
        : p.status === 'training'
        ? setSizeForTrainingAddBooks(p.name)
        : setSizeForMediaTablet(p.name)}%;
  }

  @media ${p => p.theme.media.desktop} {
    width: ${p =>
      p.status === 'haveRead'
        ? setSizeForMediaDesktopHaveRead(p.name)
        : p.status === 'training'
        ? setSizeForTrainingAddBooks(p.name)
        : setSizeForMediaDesktop(p.name)}%;
  }
`;
const setSizeForMediaDesktopHaveRead = name => {
  switch (name) {
    case 'title':
      return 30;
    case 'author':
      return 25;
    case 'rating':
      return 25;
    default:
      return 10;
  }
};

const setSizeForMediaDesktop = name => {
  switch (name) {
    case 'title':
      return 50;
    case 'author':
      return 30;
    default:
      return 10;
  }
};

const setSizeForMediaTablet = name => {
  switch (name) {
    case 'title':
      return 50;
    case 'author':
      return 30;
    default:
      return 10;
  }
};

const setSizeForMediaTabletHaveRead = name => {
  switch (name) {
    case 'title':
      return 25;
    case 'author':
      return 20;
    case 'rating':
      return 35;
    default:
      return 10;
  }
};

const setSizeForTrainingAddBooks = name => {
  switch (name) {
    case 'title':
      return 40;
    case 'author':
      return 24;
    case 'year':
      return 12;
    default:
      return 24;
  }
};
