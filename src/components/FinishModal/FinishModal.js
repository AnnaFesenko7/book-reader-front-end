import { FaRegThumbsUp } from 'react-icons/fa';
// import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/StyledButton/StyledButton ';
import s from './ModalFinish.module.css';

import { useTranslation } from 'react-i18next';

export const FinishModal = ({ isModalOpen, closeModal }) => {
  const { t } = useTranslation();
  const onNewTrainingAfterFinishBtnClick = () => {
    closeModal();
  };
  return (
    <Modal active={isModalOpen}>
      <div
        style={{
          backgroundColor: 'rgba(43, 43, 43, 0.1)',
          outline: 0,
          '&:focus': { outline: 'none' },
        }}
        className={s.modal}
      >
        <FaRegThumbsUp className={s.thumbUp} />
        <p className={s.modal_text}>{t('You_are_the_best')}</p>
        <div className={s.btn_modal}>
          <Button
            textContent={t('new_training_after_finish')}
            type="button"
            size="130"
            onClick={onNewTrainingAfterFinishBtnClick}
          />
        </div>
      </div>
    </Modal>
  );
};
