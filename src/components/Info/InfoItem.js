import { Step, StepTitle, StyledText } from './Info.styled';
import { FiCornerDownRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export const InfoItem = ({ item }) => {
  const { t } = useTranslation();
  const { step, icon: Icon, title, text } = item;
  return (
    <>
      <Step>{`${t('step')} ${step}`}</Step>
      <StepTitle>
        <Icon size="24" />
        {title}
      </StepTitle>
      <StyledText>
        <FiCornerDownRight size="20" />
        {text}
      </StyledText>
    </>
  );
};
