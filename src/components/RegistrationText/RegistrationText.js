import React from 'react';
// import Media from 'react-media';
import { useTranslation } from 'react-i18next';
import {
  Wrapper,
  Title,
  Subtitle,
  Container,
  StyledList,
  StyledItem,
  StyledText,
  StyledIcon,
} from './RegistrationText.styled';

export const RegistrationText = () =>
  // {
  // modalBtnRegisterClick,
  // modalBtnLoginClick,
  // }
  {
    const { t } = useTranslation();
    const ContentArray = [
      {
        title: t('subtitleInfo1'),
        text: [
          t('subtitle1_text1'),
          t('subtitle1_text2'),
          t('subtitle1_text3'),
        ],
      },
      {
        title: t('subtitleInfo2'),
        text: [
          t('subtitle2_text1'),
          t('subtitle2_text2'),
          t('subtitle2_text3'),
        ],
      },
    ];
    return (
      <Wrapper>
        <Title>{t('infoTitle')}</Title>

        {ContentArray.map(({ title, text }) => {
          return (
            <Container>
              <Subtitle>{title}</Subtitle>
              <StyledList>
                {text.map(item => {
                  return (
                    <StyledItem>
                      <StyledIcon size={12} />
                      <StyledText>{item}</StyledText>
                    </StyledItem>
                  );
                })}
              </StyledList>
            </Container>
          );
        })}

        {/* <Media queries={{ small: '(max-width: 768px)' }}>
        {matches => (
          <>
            {matches.small && (
              <button
                modalBtnRegisterClick={modalBtnRegisterClick}
                modalBtnLoginClick={modalBtnLoginClick}
              ></button>
            )}
          </>
        )}
      </Media> */}
      </Wrapper>
    );
  };
