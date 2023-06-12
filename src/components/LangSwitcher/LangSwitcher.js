export const LangSwitcher = ({ onChangeLanguage, currentLang }) => {
  console.log(currentLang);
  const handleChange = event => {
    if (event.target.value === 'ua') {
      onChangeLanguage('ua');
    } else {
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
