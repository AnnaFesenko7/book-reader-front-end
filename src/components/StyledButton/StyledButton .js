import { StyledButton } from './StyledButton.styled';

export const Button = ({
  textContent,
  onClick,
  size,
  type,
  height,
  active,
  disabled,
}) => {
  return (
    <StyledButton
      active={active}
      type={type}
      onClick={onClick}
      size={size}
      height={height}
      disabled={disabled}
    >
      {textContent}
    </StyledButton>
  );
};
