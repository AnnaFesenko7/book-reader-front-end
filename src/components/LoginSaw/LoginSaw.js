import { useTranslation } from 'react-i18next';

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
        <StyledPhrase>{t(`phrase_text_${index}`)}</StyledPhrase>
        <StyledHr />
        <StyledAuthor>{t(`phrase_author_${index}`)}</StyledAuthor>
      </StyledBox>
    </Wrapper>
  );
};
