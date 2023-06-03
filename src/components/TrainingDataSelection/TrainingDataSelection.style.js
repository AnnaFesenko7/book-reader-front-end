import styled from 'styled-components';

export const TrainingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 14px;
  line-height: 1.21;
  gap: 20px;
  padding: ${p => p.theme.space[5]}px;

  @media ${p => p.theme.media.tablet} {
    gap: 24px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 928px;
    gap: 32px;
    padding: 0;
  }
`;

export const StyledControlsWrapper = styled.div`
  input {
    display: block;
    width: 100%;
    height: 40px;
    padding: 2px 31px 2px 45px;
    background-color: ${p => p.theme.colors.backgroundBody};
    border: 1px solid #a6abb9;
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
      width: 250px;
      margin: 0;
    }
  }
  div {
    z-index: 10;
  }
  svg {
    z-index: 5;
    padding: 0 !important;
    position: absolute;
    top: 12px;
    left: 12px;
    width: 17px;
    height: 17px;
    fill: ${p => p.theme.colors.iconColor};
  }

  @media ${p => p.theme.media.tablet} {
    display: flex;
    gap: 40px;
    align-self: flex-start;
  }
  @media ${p => p.theme.media.desktop} {
    align-self: center;
    gap: 40px;
  }
`;

export const TrainingContainer = styled.div`
  min-width: 320px;
  margin-left: auto;
  margin-right: auto;
  /* padding: 32px 20px; */
  background-color: #f6f7fb;
  @media screen and (min-width: 768px) {
    min-width: 768px;
    padding: 40px 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const TrainingMaine = styled.div`
  @media screen and (min-width: 1280px) {
    width: 928px;
  }
`;

export const TrainingSidebar = styled.div`
  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;
