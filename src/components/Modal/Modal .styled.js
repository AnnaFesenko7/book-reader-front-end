import styled from 'styled-components';

export const BackDropModal = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${p => p.theme.colors.transparent};
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${p =>
    p.active ? p.theme.transform.full : p.theme.transform.invisible};
  transition: 0.5s;
`;

export const ModalContent = styled.div`
  background: ${p => p.theme.colors.white};

  /* padding: ${p => p.theme.space[6]}px; */
  border-radius: ${p => p.theme.radii.sm};
  transform: ${p =>
    p.active ? p.theme.transform.full : p.theme.transform.invisible};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
