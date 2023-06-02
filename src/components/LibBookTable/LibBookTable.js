import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { BodyBookTable } from 'components/BodyBookTable/BodyBookTable';
import { HeadBookTable } from 'components/HeadBookTable/HeadBookTable';
import { BookTableMobile } from 'components/BookTableMobile/BookTableMobile';
import { Modal } from 'components/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { ResumeModalContent } from 'components/ResumeModalContent/ResumeModalContent';

import {
  StyledSection,
  StyledTable,
  StyledCaption,
} from './LibBookTable.styled';

export const LibBookTable = ({ data }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const { isModalOpen, toggleModal } = useModal();
  // const [deleteContact, { isLoading: isDeleting }] = useDeleteBookMutation();
  // const { t, i18n } = useTranslation();

  const statusObj = data.reduce((obj, book) => {
    const stat = book.status;
    return { ...obj, [stat]: obj[stat] ? [...obj[stat], book] : [book] };
  }, {});

  return (
    <>
      <StyledSection>
        {statusObj.haveRead && (
          <>
            <StyledTable>
              {/* <h3 className={s.title}> {t('alreadyRead')}</h3> */}
              <StyledCaption> alreadyRead</StyledCaption>
              {isMobile ? (
                <></>
              ) : (
                <>
                  <HeadBookTable status="haveRead" />
                  <BodyBookTable
                    books={statusObj.haveRead}
                    toggleModal={toggleModal}
                  />
                </>
              )}
            </StyledTable>
            {isMobile && <BookTableMobile books={statusObj.haveRead} />}
          </>
        )}

        {statusObj.reading && (
          <>
            <StyledTable>
              <StyledCaption> readingNow</StyledCaption>
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

        {statusObj.toRead && (
          <>
            {/* <h3 className={s.title}> {t('goingToRead')} </h3> */}

            <StyledTable>
              <StyledCaption>goingToRead</StyledCaption>
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
        <ResumeModalContent closeModal={toggleModal} />
      </Modal>
    </>
  );
};
