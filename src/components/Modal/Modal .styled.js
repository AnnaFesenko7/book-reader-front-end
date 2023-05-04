import styled from 'styled-components';

export const BackDropModal = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${p =>
    p.active ? p.theme.transform.full : p.theme.transform.invisible};
`;

export const ModalContent = styled.div`
  background: ${p => p.theme.colors.white};

  padding: ${p => p.theme.space[6]}px;
  border-radius: ${p => p.theme.radii.sm};
`;
