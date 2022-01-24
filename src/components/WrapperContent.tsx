import { ReactNode, Fragment } from 'react';
import GlobalStyle from '../assets/globalStyles';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 0 .5rem;
`;

type IPropType = {
  children: ReactNode;
}

export default function WrapperContent({children}: IPropType) {
  return (
    <StyledWrapper>
      <GlobalStyle />
      {children}
    </StyledWrapper>
  )
}