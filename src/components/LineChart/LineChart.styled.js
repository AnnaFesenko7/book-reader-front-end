import styled from 'styled-components';

export const ChartBox = styled.div`
  position: relative;
  padding: 14px 22px;
  background-color: ${p => p.theme.colors.white};
  width: 100%;
  height: 75%;
  @media ${p => p.theme.media.tablet} {
    padding: 25px 35px;
    height: 90%;
  }
  @media ${p => p.theme.media.desktop} {
  }
`;

export const StyledTitle = styled.p`
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.xs};
  text-transform: uppercase;
  margin-bottom: 24px;
  color: ${p => p.theme.colors.deepBlue};
`;

export const StyledSpan = styled.span`
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.xs};
  text-transform: uppercase;
  text-align: center;
  width: 25px;
  height: 25px;
  padding: 6px 8px;
  margin-left: 8px;
  color: ${p => p.theme.colors.deepBlue};
  background-color: ${p => p.theme.colors.backgroundStatistic};
`;

export const LineBox = styled.div`
  position: absolute;
  height: auto;
  right: 10px;
  top: 100px;
  @media ${p => p.theme.media.tablet} {
    right: 0px;
    top: 130px;
  }
`;

export const LineList = styled.ul`
  padding: 0px;
  margin: 0px;
  text-align: right;

  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 2.5;
  text-transform: uppercase;
  color: ${p => p.theme.colors.statisticColor};
`;

export const LineItem = styled.li`
  width: 50px;
  height: 30px;
  margin-right: 11px;
  background-color: rgba(245, 247, 250, 0.85);
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  text-align: center;
  color: ${p =>
    p.accent ? p.theme.colors.accentColor : p.theme.colors.statisticColor};
  margin-bottom: 16px;

  @media ${p => p.theme.media.tablet} {
    margin-right: 45px;
  }
`;

export const StyledP = styled.p`
  display: flex;
  justify-content: flex-end;
  position: relative;
  bottom: 15px;
  right: 12px;

  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.xs};
  text-transform: uppercase;
  color: ${p => p.theme.colors.statisticColor};
  margin-top: 16px;
`;
