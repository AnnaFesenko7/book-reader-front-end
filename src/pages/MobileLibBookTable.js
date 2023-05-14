import { LibBookTable } from 'components/LibBookTable/LibBookTable';
import { MobileLinkToForm } from 'components/MobileLinkToForm/MobileLinkToForm';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';

export const MobileLibBookTable = () => {
  return (
    <StyledContainer>
      <LibBookTable />
      <MobileLinkToForm to="/" />
    </StyledContainer>
  );
};
