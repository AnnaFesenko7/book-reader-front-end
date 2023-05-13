import { StyledResumeButton } from './ResumeButton.styled';

export const ResumeButton = ({ onClick }) => {
  return (
    <StyledResumeButton type="button" onClick={onClick}>
      Резюме
    </StyledResumeButton>
  );
};
