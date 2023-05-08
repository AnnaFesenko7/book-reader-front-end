import React from 'react';
import { Info } from 'components/Info/Info';
import { BookAddForm } from 'components/BookAddForm/BookAddForm';
import { useMediaQuery } from 'react-responsive';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';

const Library = () => {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <StyledContainer>
      <BookAddForm />
      {!isMobileDevice && <Info />}
    </StyledContainer>
  );
};

export default Library;
