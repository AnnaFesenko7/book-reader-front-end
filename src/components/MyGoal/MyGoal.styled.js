import styled from 'styled-components';

export const MyGoalMainBox = styled.div`
  width: 280px;
  background-color: white;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  @media ${p => p.theme.media.tablet} {
    padding-left: ${p => p.theme.space[6]}px;
    padding-right: ${p => p.theme.space[6]}px;
    width: 100%;
    height: 105px;
    display: flex;
    align-items: center;
    align-items: baseline;

    h2 {
      width: 275px;
    }
  }

  @media ${p => p.theme.media.desktop} {
    padding-left: 0;
    padding-right: 0;
    width: 288px;
    height: 304px;
    display: block;
  }
`;

export const StatsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 236px;
  background-color: white;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  @media ${p => p.theme.media.tablet} {
    height: 105px;
    box-shadow: none;
    margin-left: auto;
  }

  @media ${p => p.theme.media.desktop} {
    height: 244px;
  }
`;

export const MyGoalStatsList = styled.ul`
  display: flex;
  justify-content: center;

  width: 100%;
  gap: 20px;
  padding: ${p => p.theme.space[5]}px;

  @media ${p => p.theme.media.tablet} {
    align-items: baseline;
    gap: 40px;
    padding: 0;
  }

  @media ${p => p.theme.media.desktop} {
    gap: 20px;
    margin: 0;
  }
`;

export const MyGoalStatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${p => p.theme.media.tablet} {
    height: 60px;
  }
  @media ${p => p.theme.media.desktop} {
    height: 148px;
  }
`;

export const MyGoalStatsDigitBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${p => (p.isTrainingStarted ? 66 : 100)}px;
  height: ${p => (p.isTrainingStarted ? 66 : 100)}px;
  background: ${p => p.theme.colors.backgroundStatistic};
  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);

  font-family: Open Sans;
  font-weight: 700;
  font-size: ${p => p.theme.fontSizes.xxl};
  line-height: 1.18;
  text-align: center;
  color: ${p => {
    console.log(p.booksLeft);
    return p.param === 'booksLeft'
      ? `${p.theme.colors.accentColor}`
      : `${p.theme.colors.statisticColor}`;
  }};

  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes.xl};
    width: 100px;
  }

  @media ${p => p.theme.media.desktop} {
    width: ${p => (p.isTrainingStarted ? 66 : 100)}px;
    height: ${p => (p.isTrainingStarted ? 66 : 100)}px;
  }
`;

export const MyGoalStatsText = styled.span`
  width: 100%;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p =>
    p.isTrainingStarted ? `${p.theme.fontSizes.xs}` : `${p.theme.fontSizes.s}`};
  line-height: ${p => p.theme.lineHeights.secondBody};
  text-align: center;
  color: ${p => p.theme.colors.notActiveText};

  display: flex;
  justify-content: center;
  margin-top: 14px;
  /* max-width: 66px; */

  @media ${p => p.theme.media.tablet} {
    /* flex-wrap: wrap; */
    max-width: 100px;
    font-size: ${p => p.theme.fontSizes.ss};
    margin-top: 0;
  }

  @media ${p => p.theme.media.desktop} {
    /* flex-wrap: wrap; */

    font-size: ${p =>
      p.isTrainingStarted
        ? `${p.theme.fontSizes.xs}`
        : `${p.theme.fontSizes.s}`};
    margin-top: 14px;
  }
`;
