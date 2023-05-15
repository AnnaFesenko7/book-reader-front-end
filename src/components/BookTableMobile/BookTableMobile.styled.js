import styled from 'styled-components';

export const StyledList = styled.ul``;

export const StyledListItem = styled.li`
  padding: 20px;
  display: flex;

  svg {
    vertical-align: top;
    color: ${p =>
      p.status === 'reading'
        ? p.theme.colors.accentColor
        : p.theme.colors.iconColor};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 12px;
  align-items: flex-start;

  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const StyledBookTitle = styled.p`
  margin-bottom: 16px;
  margin-top: 4px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.deepBlue};
`;

export const StyledBookDescription = styled.div`
  display: flex;

  color: ${p => p.theme.colors.deepBlue};

  span {
    /* color: ${p => p.theme.colors.deepBlue}; */
    color: ${p => p.theme.colors.notActiveText};
  }
`;
