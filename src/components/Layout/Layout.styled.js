import styled from 'styled-components';

// export const StyledContainer = styled.div`
//   margin-left: auto;
//   margin-right: auto;
//   padding: ${p => p.theme.space[4]}px;
//
//   max-width: ${p => p.theme.media.phone}px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media ${p => p.theme.media.tablet} {
//     max-width: ${p => p.theme.mediaWidth.tablet}px;
//   }

//   @media ${p => p.theme.media.desktop} {
//     max-width: ${p => p.theme.mediaWidth.desktop}px;
//   }
// `;

export const WrapperBody = styled.div`
  background: ${p => p.theme.colors.backgroundBody};
  padding-top: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[6]}px;
`;

export const WarningText = styled.div`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xm};
  line-height: ${p => p.theme.lineHeights.body};
  text-align: center;
  margin-bottom: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.deepBlue};
  width: 288px;
`;

export const WrapperModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
