import React from 'react';
import { FaBookOpen, FaFlag } from 'react-icons/fa';
import { InfoItem } from './InfoItem';
import { useTranslation } from 'react-i18next';
import { Wrapper, StyledList } from './Info.styled';

export const Info = ({ modal }) => {
  const { t } = useTranslation();

  const infoContent = [
    {
      step: 1,
      icon: FaBookOpen,
      title: t('step1_title'),
      text: t('step1_text'),
    },
    {
      step: 2,
      icon: FaFlag,
      title: t('step2_title'),
      text: t('step2_text'),
    },
  ];

  return (
    <Wrapper modal={modal}>
      <StyledList>
        {infoContent.map((item, index) => (
          <li key={index}>
            <InfoItem item={item} />
          </li>
        ))}
      </StyledList>
    </Wrapper>
  );
};
