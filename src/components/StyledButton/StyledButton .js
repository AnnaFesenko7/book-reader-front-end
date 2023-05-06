import { StyledButton } from './StyledButton.styled';

export const Button = ({ textContent, onClick, size, type, height, modal }) => {
  return (
    <StyledButton
      modal={modal}
      type={type}
      onClick={onClick}
      size={size}
      height={height}
    >
      {textContent}
    </StyledButton>
  );
};
