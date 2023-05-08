import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Info } from 'components/Info/Info';
import { BookAddForm } from 'components/BookAddForm/BookAddForm';
import { useMediaQuery } from 'react-responsive';
import {
  StyledContainer,
  SvgContainer,
} from 'components/StyledContainer/StyledContainer.styled';

const Library = () => {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <StyledContainer>
      {isMobileDevice && (
        <>
          <SvgContainer>
            <FaArrowLeft />
          </SvgContainer>
        </>
      )}
      <BookAddForm />
      {!isMobileDevice && <Info />}
    </StyledContainer>
  );
};

export default Library;
