import { useLogOutRedirect } from 'hooks/useLogOutRedirect';
import { LibBookTable } from 'components/LibBookTable/LibBookTable';
import { MobileLinkToForm } from 'components/MobileLinkToForm/MobileLinkToForm';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { useMediaQuery } from 'react-responsive';

import { data } from 'pages/Library';
const MobileTrainBookTable = () => {
  useLogOutRedirect();
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <StyledContainer>
      <LibBookTable data={data?.payload.books} />
      {isMobileDevice && (
        <>
          <MobileLinkToForm to="/training" />
        </>
      )}
    </StyledContainer>
  );
};
export default MobileTrainBookTable;
