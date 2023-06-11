// import {  useState } from 'react';

export const LangSwitcher = ({ onChangeLanguage }) => {
  //   const [_, setLang] = useState(true);

  const handleChange = event => {
    if (event.target.value === 'ua') {
      //   setLang(true);
      onChangeLanguage('ua');
    } else {
      //   setLang(false);
      onChangeLanguage('en');
    }
  };

  return (
    <div>
      <button value="ua" type="button" onClick={handleChange}>
        {'UA'}
      </button>

      <button value="en" type="button" onClick={handleChange}>
        {'EN'}
      </button>
    </div>
  );
};
