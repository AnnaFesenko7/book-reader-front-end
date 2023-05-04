import { StyledButton } from './StyledButton.styled';

export const Button = ({ textContent, onClick, size }) => {
  return (
    <StyledButton type="button" onClick={onClick} size={size}>
      {textContent}
    </StyledButton>
  );
};
