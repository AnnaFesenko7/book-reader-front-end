import styled from 'styled-components';
import { FaRegThumbsUp } from 'react-icons/fa';

export const ThumbUpIcon = styled(FaRegThumbsUp)`
  margin-bottom: 4px;
  width: 54px;
  height: 54px;
  color: ${p =>
    p.completenessReason === 'noUnreadBooks'
      ? p.theme.colors.accentColor
      : p.theme.colors.iconColor};
`;

export const StyledModalContentWrapper = styled.div`
  background-color: rgba(43, 43, 43, 0.1);
  width: 300px;
  padding: 20px 10px;
  text-align: center;
`;

export const ModalText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.38;
  text-align: center;
  margin-bottom: 20px;
  color: ${p => p.theme.colors.deepBlue};
`;
