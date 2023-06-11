import { useEffect, useState } from 'react';

export const LangSwitcher = ({ onChangeLanguage }) => {
  const [lang, setLang] = useState(true);
  // const lang = localStorage.getItem('i18nextLng');
  useEffect(() => {
    if (lang === 'ua') {
      setLang(true);
    }
  }, [lang]);

  const handleChange = event => {
    if (event.target.checked) {
      onChangeLanguage('ua');
    } else {
      onChangeLanguage('en');
    }

    /* true - ua, false - en */

    setLang(event.target.checked);
  };

  return (
    <div>
      <div direction="row" spacing={1} alignItems="center">
        <div>
          <span>{lang ? 'UA' : 'EN'}</span>
        </div>
        <div
          inputProps={{ 'aria-label': 'ant design' }}
          onChange={handleChange}
          name="checkedA"
          // checked={localStorage.getItem('i18nextLng') === 'ua' && true}
        />
      </div>
    </div>
  );
};
