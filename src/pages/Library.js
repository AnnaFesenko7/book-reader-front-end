import React from 'react';
import { useLogOutRedirect } from 'hooks/useLogOutRedirect';
import { Info } from 'components/Info/Info';
import { BookAddForm } from 'components/BookAddForm/BookAddForm';
import { useMediaQuery } from 'react-responsive';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { MobileLinkToSecondPage } from 'components/MobileLinkToSecondPage/MobileLinkToSecondPage';
import { LibBookTable } from 'components/LibBookTable/LibBookTable';
import { WrapperBody } from 'components/WrapperBody/WrapperBody.styled';
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
        rating: 2,
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
        rating: 4,
        resume: '',
      },
      {
        status: 'reading',
        _id: 5,
        author: 'Жуль Верн',
        pages: 250,
        title:
          '15-ти    річний капітан yyyyyyyy yygggggg gggggggggggggg gggfffffff fffffffffffffff fyyyyyyyyy yyyyyyyy yyyyyyyyyyy',
        year: 2008,
        rating: 5,
        resume: '',
      },
    ],
  },
};

const Library = () => {
  useLogOutRedirect();
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  const isBookInLibrary = data?.payload.books.length > 0;
  return (
    <section>
      <StyledContainer>
        <WrapperBody>
          {isMobileDevice ? (
            <>
              <MobileLinkToSecondPage to="/mobileLibBookTable" />
              <BookAddForm />
            </>
          ) : (
            <>
              <BookAddForm />
              {isBookInLibrary ? (
                <LibBookTable data={data?.payload.books} />
              ) : (
                <Info />
              )}
            </>
          )}
        </WrapperBody>
      </StyledContainer>
    </section>
  );
};
export default Library;
