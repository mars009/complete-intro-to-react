// @flow
import React from 'react';
import styled, { keyframes } from 'styled-components';

// We create a new keyframe animation
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// We use the keyframe defined above to be used in the animation prop for the styled <img>
const Image = styled.img`
  animation: ${spin} 4s infinite linear;
`;

// Now we creat our React Component (dumb component)
const Spinner = () => <Image src="/public/img/loading.png" alt="Loading Indicator" />;

export default Spinner;
