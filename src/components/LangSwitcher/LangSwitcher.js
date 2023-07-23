import { useState, useEffect } from 'react';
import { BallButton, StyledTrack, StyledSpan } from './LangSwitcher.styled';

export const LangSwitcher = ({ onChangeLanguage, currentLang }) => {
  const [lang, setLang] = useState(currentLang);

  useEffect(() => {
    onChangeLanguage(lang);
  }, [lang, onChangeLanguage]);

  const handleChange = () => {
    if (lang === 'en') {
      setLang('ua');
    } else {
      setLang('en');
    }
  };

  return (
    <div onClick={handleChange}>
      <StyledTrack>
        <BallButton className={lang}></BallButton>
        <StyledSpan lang={lang}>{lang === 'en' ? 'En' : 'Ua'}</StyledSpan>
      </StyledTrack>
    </div>
  );
};
