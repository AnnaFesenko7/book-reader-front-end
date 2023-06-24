import { useTranslation } from 'react-i18next';

import {
  StyledContainer,
  StyledItem,
  StyledValue,
  StyledTimerWrapper,
  TimerTitle,
  StyledSpan,
  StyledSeparator,
} from './TimerItem.styled.js';
import { useState, useEffect, useRef } from 'react';
import { convertMs } from 'helpers/convertMs.js';

export const TimerItem = ({ selectedDate, timerTitle }) => {
  const [time, setTime] = useState(() => Date.now());
  const { t } = useTranslation();
  const intervalId = useRef(null);
  const deltaTime = selectedDate - time;
  const timeLeft = convertMs(deltaTime);

  useEffect(() => {
    if (intervalId.current === null) {
      intervalId.current = setInterval(() => {
        setTime(Date.now());
      }, 1000);
      return;
    }
    return clearInterval(intervalId);
  }, []);

  return (
    <StyledTimerWrapper>
      <TimerTitle>{timerTitle} </TimerTitle>
      <StyledContainer>
        <StyledItem>
          <StyledValue>{timeLeft.days}</StyledValue>
          <StyledSpan>{t('days')}</StyledSpan>
        </StyledItem>

        <StyledSeparator>:</StyledSeparator>

        <StyledItem>
          <StyledValue>{timeLeft.hours}</StyledValue>
          <StyledSpan>{t('hrs')}</StyledSpan>
        </StyledItem>

        <StyledSeparator>:</StyledSeparator>

        <StyledItem>
          <StyledValue>{timeLeft.minutes}</StyledValue>
          <StyledSpan>{t('mins')}</StyledSpan>
        </StyledItem>
        <StyledSeparator>:</StyledSeparator>

        <StyledItem>
          <StyledValue>{timeLeft.seconds}</StyledValue>
          <StyledSpan>{t('secs')}</StyledSpan>
        </StyledItem>
      </StyledContainer>
    </StyledTimerWrapper>
  );
};
