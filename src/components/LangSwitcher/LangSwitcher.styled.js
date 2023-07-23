import styled from 'styled-components';

export const StyledTrack = styled.div`
  background: #fff;
  width: 50px;
  height: 26px;
  border-radius: 50px;
  padding: 3px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const BallButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 99%;
  border: 0;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  top: 0;
  left: 0;
  transition: all 300ms ease;

  &.ua {
    background: radial-gradient(circle at 20% 20%, #f6f7fb, #ff6b08, #ff6b0895);
    transform: translateX(24px);
  }

  &.en {
    background: radial-gradient(circle at 20% 20%, #f6f7fb, #242a37);
    transform: translateX(0);
  }
`;

export const StyledSpan = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p =>
    p.lang === 'ua' ? p.theme.colors.accentColor : p.theme.colors.iconColor};

  position: absolute;
  top: 3px;
  left: 0;
  transform: ${p => (p.lang === 'ua' ? 'translateX(0)' : 'translateX(24px)')};
`;
