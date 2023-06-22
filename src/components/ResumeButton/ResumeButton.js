import { StyledResumeButton } from './ResumeButton.styled';
import { useTranslation } from 'react-i18next';
export const ResumeButton = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <StyledResumeButton onClick={onClick}>{t('resume')}</StyledResumeButton>
  );
};
