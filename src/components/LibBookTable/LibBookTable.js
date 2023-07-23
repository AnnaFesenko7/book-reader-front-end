import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useModal } from 'hooks/useModal';
import { useScrollbar } from 'hooks/useScrollbar';
import { separateBooksByStatus } from 'helpers/separateBooksByStatus';

import { BodyBookTable } from 'components/BodyBookTable/BodyBookTable';
import { HeadBookTable } from 'components/HeadBookTable/HeadBookTable';
import { Modal } from 'components/Modal/Modal';
import { ResumeModalContent } from 'components/ResumeModalContent/ResumeModalContent';

import {
  StyledSection,
  StyledTable,
  StyledCaption,
} from './LibBookTable.styled';

export const LibBookTable = ({ data, training, startedTraining }) => {
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

  const statusObj = separateBooksByStatus(data);

  const isTrainingPage = training || startedTraining;
  const hasScroll = data?.length > 3 && isTrainingPage;
  const WrapperTable = useRef(null);
  useScrollbar(WrapperTable, hasScroll);

  return (
    <>
      <StyledSection isTrainingPage={isTrainingPage}>
        {startedTraining && (
          <div
            ref={WrapperTable}
            style={{
              height: hasScroll ? '200px' : 'auto',
              minHeight: '200px',
            }}
          >
            <StyledTable>
              <HeadBookTable status="toRead" />
              <BodyBookTable books={data} startedTraining isTrainingPage />
            </StyledTable>
          </div>
        )}
        {training && !startedTraining && (
          <div
            ref={WrapperTable}
            style={{
              height: hasScroll ? '200px' : 'auto',
              minHeight: '200px',
            }}
          >
            <StyledTable>
              <HeadBookTable status="training" />
              <BodyBookTable books={statusObj.toRead} training isTrainingPage />
            </StyledTable>
          </div>
        )}
        {statusObj.haveRead && !isTrainingPage && (
          <StyledTable>
            <StyledCaption>{t('alreadyRead')}</StyledCaption>

            <HeadBookTable status="haveRead" />
            <BodyBookTable
              books={statusObj.haveRead}
              toggleModal={toggleModal}
              setCurrentBookId={setCurrentBookId}
              setCurrentBookResume={setCurrentBookResume}
              setCurrentBookRating={setCurrentBookRating}
            />
          </StyledTable>
        )}

        {statusObj.reading && !isTrainingPage && (
          <StyledTable>
            <StyledCaption> {t('readingNow')} </StyledCaption>
            <HeadBookTable status="reading" />
            <BodyBookTable books={statusObj.reading} />
          </StyledTable>
        )}

        {statusObj.toRead && !isTrainingPage && (
          <StyledTable>
            <StyledCaption> {t('goingToRead')} </StyledCaption>
            <HeadBookTable status="toRead" />
            <BodyBookTable books={statusObj.toRead} />
          </StyledTable>
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
