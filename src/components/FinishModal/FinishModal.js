import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/StyledButton/StyledButton ';

import {
  ThumbUpIcon,
  StyledModalContentWrapper,
  ModalText,
} from './FinishModal.styled';

import { useTranslation } from 'react-i18next';

export const FinishModal = ({
  isModalOpen,
  onFinishModalBtnClick,
  completenessReason,
}) => {
  const { t } = useTranslation();

  const onNewTrainingAfterFinishBtnClick = () => {
    onFinishModalBtnClick();
  };
  return (
    <Modal active={isModalOpen}>
      <StyledModalContentWrapper>
        <ThumbUpIcon completenessReason={completenessReason} />
        {completenessReason === 'noUnreadBooks' && (
          <ModalText>{t('You_are_the_best')}</ModalText>
        )}
        {completenessReason === 'hasDeadlinePassed' && (
          <ModalText>{t('Youre_doing_fine')}</ModalText>
        )}
        <Button
          active
          textContent={t('new_training_after_finish')}
          type="button"
          size="130"
          onClick={onNewTrainingAfterFinishBtnClick}
        />
        {/* </div> */}
      </StyledModalContentWrapper>
    </Modal>
  );
};
