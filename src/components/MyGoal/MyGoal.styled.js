import styled from 'styled-components';

export const MyGoalMainBox = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  @media ${p => p.theme.media.tablet} {
    padding-left: ${p => p.theme.space[5]}px;
    padding-right: ${p => p.theme.space[5]}px;

    height: 105px;
    display: flex;
    /* align-items: center; */
    align-items: baseline;

    h2 {
      width: 275px;
    }
  }

  @media ${p => p.theme.media.desktop} {
    padding-left: 0;
    padding-right: 0;
    /* width: 288px; */
    width: 100%;
    height: 304px;
    display: block;
    h2 {
      width: 288px;
    }
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
    gap: ${p => (p.isTrainingStarted ? 12 : 40)}px;
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
    width: ${p => p.isTrainingStarted && 70}px;
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
    // console.log(p.booksLeft);
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

  @media ${p => p.theme.media.tablet} {
    max-width: 100px;
    font-size: ${p => p.theme.fontSizes.ss};
    margin-top: 0;
  }

  @media ${p => p.theme.media.desktop} {
    font-size: ${p =>
      p.isTrainingStarted
        ? `${p.theme.fontSizes.xs}`
        : `${p.theme.fontSizes.s}`};
    margin-top: 14px;
  }
`;
