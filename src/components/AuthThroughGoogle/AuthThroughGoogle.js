import React from 'react';
import {
  StyledGooglLink,
  FlexBox,
  StyledText,
} from './AuthThroughGoogle.styled';
import { FcGoogle } from 'react-icons/fc';

export const AuthThroughGoogle = () => {
  return (
    <>
      <StyledGooglLink
        href="http://localhost:4040/api/auth/google"
        // href="https://book-reader-jr3w.onrender.com/api/auth/google"
      >
        <FlexBox>
          <FcGoogle />
          <StyledText>Google</StyledText>
        </FlexBox>
      </StyledGooglLink>
    </>
  );
};
