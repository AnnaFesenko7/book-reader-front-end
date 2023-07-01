import { StyledButton } from './StyledButton.styled';

export const Button = ({
  textContent,
  onClick,
  size,
  type,
  height,
  active,
  disabled,
  center,
}) => {
  return (
    <StyledButton
      center={center}
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
