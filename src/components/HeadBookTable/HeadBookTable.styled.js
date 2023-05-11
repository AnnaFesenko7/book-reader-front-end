import styled from 'styled-components';

export const StyledThead = styled.thead`
  /* width: 100%; */
  margin-bottom: 8px;
`;

export const StyledTh = styled.th`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  color: #898f9f;

  display: inline-block;
  /* vertical-align: top; */
  width: 60px;

  @media ${p => p.theme.media.tablet} {
    text-align: left;
    padding-left: ${p => p.theme.space[5]}px;
    /* width: ${p => setSizeForMediaTablet(p.name)}px; */
  }

  @media ${p => p.theme.media.desktop} {
    width: ${p =>
      p.status === 'haveRead'
        ? setSizeForMediaHaveReadDesktop(p.name)
        : setSizeForMediaDesktop(p.name)}%;
  }
`;
const setSizeForMediaHaveReadDesktop = name => {
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
      return 346;
    case 'author':
      return 250;
    default:
      return 134;
  }
};
