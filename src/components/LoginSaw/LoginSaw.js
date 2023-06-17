import { useTranslation } from 'react-i18next';
import quatation from 'img/quatation.svg';

import {
  StyledBox,
  Wrapper,
  StyledPhrase,
  StyledHr,
  StyledAuthor,
} from './LoginSaw.styled.js';

export const LoginSaw = () => {
  const { t } = useTranslation();
  const index = Math.floor(Math.random() * 10) + 1;
  return (
    <Wrapper>
      <StyledBox>
        <svg>
          <use href={quatation + '#quatation'}></use>
        </svg>
        <StyledPhrase>{t(`phrase_text_${index}`)}</StyledPhrase>
        <StyledHr />
        <StyledAuthor>{t(`phrase_author_${index}`)}</StyledAuthor>
      </StyledBox>
    </Wrapper>
  );
};
