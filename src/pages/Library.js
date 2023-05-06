import React from 'react';
import { Info } from 'components/Info/Info';
import { BookAddForm } from 'components/BookAddForm/BookAddForm';
import { useMediaQuery } from 'react-responsive';
const Library = () => {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <>
      <BookAddForm />
      {!isMobileDevice && <Info />}
    </>
  );
};

export default Library;
