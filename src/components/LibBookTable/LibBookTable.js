import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

import { useModal } from 'hooks/useModal';

import { BodyBookTable } from 'components/BodyBookTable/BodyBookTable';
import { HeadBookTable } from 'components/HeadBookTable/HeadBookTable';
import { BookTableMobile } from 'components/BookTableMobile/BookTableMobile';
import { Modal } from 'components/Modal/Modal';
import { ResumeModalContent } from 'components/ResumeModalContent/ResumeModalContent';

import {
  StyledSection,
  StyledTable,
  StyledCaption,
} from './LibBookTable.styled';

export const LibBookTable = ({ data, training, startedTraining }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const { isModalOpen, toggleModal } = useModal();

  const { t } = useTranslation();

  const [currentBookId, setCurrentBookId] = useState(null);
  const [currentBookResume, setCurrentBookResume] = useState('');
  const [currentBookRating, setCurrentBookRating] = useState(null);

  const resetState = () => {
    setCurrentBookId(null);
    setCurrentBookResume('');
    setCurrentBookRating(null);
  };
  const initialValues = {
    resume: currentBookResume,
    rating: currentBookRating,
  };

  const statusObj = data?.reduce((obj, book) => {
    const stat = book.status;
    return { ...obj, [stat]: obj[stat] ? [...obj[stat], book] : [book] };
  }, {});

  return (
    <>
      <StyledSection>
        {startedTraining && !isMobile && (
          <StyledTable>
            <HeadBookTable status="toRead" />
            <BodyBookTable books={data} startedTraining />
          </StyledTable>
        )}
        {training && !startedTraining && (
          <StyledTable>
            <HeadBookTable status="training" />
            <BodyBookTable books={statusObj.toRead} training />
          </StyledTable>
        )}
        {statusObj.haveRead && !startedTraining && (
          <>
            <StyledTable>
              <StyledCaption>{t('alreadyRead')}</StyledCaption>
              {isMobile ? (
                <></>
              ) : (
                <>
                  <HeadBookTable status="haveRead" />
                  <BodyBookTable
                    books={statusObj.haveRead}
                    toggleModal={toggleModal}
                    setCurrentBookId={setCurrentBookId}
                    setCurrentBookResume={setCurrentBookResume}
                    setCurrentBookRating={setCurrentBookRating}
                  />
                </>
              )}
            </StyledTable>
            {isMobile && <BookTableMobile books={statusObj.haveRead} />}
          </>
        )}

        {statusObj.reading && !startedTraining && (
          <>
            <StyledTable>
              <StyledCaption> {t('readingNow')} </StyledCaption>
              {isMobile ? (
                <></>
              ) : (
                <>
                  <HeadBookTable status="reading" />
                  <BodyBookTable books={statusObj.reading} />
                </>
              )}
            </StyledTable>
            {isMobile && <BookTableMobile books={statusObj.reading} />}
          </>
        )}

        {!training && statusObj.toRead && !startedTraining && (
          <>
            <StyledTable>
              <StyledCaption> {t('goingToRead')} </StyledCaption>
              {isMobile ? (
                <></>
              ) : (
                <>
                  <HeadBookTable status="toRead" />
                  <BodyBookTable books={statusObj.toRead} />
                </>
              )}
            </StyledTable>
            {isMobile && <BookTableMobile books={statusObj.toRead} />}
          </>
        )}
      </StyledSection>
      <Modal active={isModalOpen} closeModal={toggleModal}>
        <ResumeModalContent
          closeModal={toggleModal}
          id={currentBookId}
          initialValues={initialValues}
          resetState={resetState}
        />
      </Modal>
    </>
  );
};
