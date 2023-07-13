import { StyledResumeButton } from './ResumeButton.styled';
import { useTranslation } from 'react-i18next';

export const ResumeButton = ({
  toggleModal,
  id,
  rating,
  resume,
  setCurrentBookId,
  setCurrentBookResume,
  setCurrentBookRating,
}) => {
  const { t } = useTranslation();

  const onResumeBtnClick = () => {
    toggleModal();
    if (id) {
      setCurrentBookId(id);
      setCurrentBookResume(resume);
      setCurrentBookRating(rating);
    }
  };

  return (
    <StyledResumeButton onClick={onResumeBtnClick}>
      {t('resume')}
    </StyledResumeButton>
  );
};
