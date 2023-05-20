import styled from 'styled-components';

export const BackDropModal = styled.div`
  z-index: 100;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${p => (p.active ? 1 : 0)};
  pointer-events: ${p => (p.active ? 'all' : 'none')};
  transition: 0.5s;
`;

export const ModalContent = styled.div`
  background: ${p => p.theme.colors.white};
  gap: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[6]}px;
  border-radius: ${p => p.theme.radii.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${p =>
    p.active ? p.theme.transform.full : p.theme.transform.invisible};
  transition: 0.5s;
`;
