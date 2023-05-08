import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-top: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.accentColor};
`;

export const TextError = p => {
  return <StyledDiv>{p.children}</StyledDiv>;
};
