import { StyledButton } from './StyledButton.styled';

export const Button = ({ textContent, onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {textContent}
    </StyledButton>
  );
};
