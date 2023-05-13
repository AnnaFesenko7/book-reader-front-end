import React from 'react';

import { Info } from 'components/Info/Info';
import { BookAddForm } from 'components/BookAddForm/BookAddForm';
import { useMediaQuery } from 'react-responsive';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { MobileFormSvg } from 'components/MobileFormSvg/MobileFormSvg';
import { LibBookTable } from 'components/LibBookTable/LibBookTable';
// export const data = null;
export const data = {
  payload: {
    books: [
      {
        status: 'haveRead',
        _id: 1,
        author: 'Гюго',
        pages: 300,
        title: 'Людина що сміється',
        year: 1980,
        rating: 5,
        resume: '',
      },
      {
        status: 'reading',
        _id: 2,
        author: 'J.K.Roling',
        pages: 400,
        title: 'Harry Potter',
        year: 2014,
        rating: 2,
        resume: '',
      },
      {
        status: 'toRead',
        _id: 3,
        author: 'Жуль Верн',
        pages: 250,
        title: '15-тирічний капітан',
        year: 2008,
        rating: 4,
        resume: '',
      },
      {
        status: 'haveRead',
        _id: 4,
        author: 'Жуль Верн',
        pages: 250,
        title: '15-ти    річний капітан',
        year: 2008,
        rating: 5,
        resume: '',
      },
      {
        status: 'reading',
        _id: 4,
        author: 'Жуль Верн',
        pages: 250,
        title:
          '15-ти    річний капітанyyyyyyyyyygggggggggggggggggggggggfffffffffffffffffffffffyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
        year: 2008,
        rating: 5,
        resume: '',
      },
    ],
  },
};

const Library = () => {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <StyledContainer>
      {isMobileDevice && <MobileFormSvg />}
      <BookAddForm />
      {data?.payload.books.length > 0 ? (
        <LibBookTable />
      ) : isMobileDevice ? (
        <></>
      ) : (
        <Info />
      )}
    </StyledContainer>
  );
};

export default Library;
