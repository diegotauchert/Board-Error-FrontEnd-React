import styled from 'styled-components';
import { SingleButton as StyledButton } from './Button';

const StyledControlButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: .4rem 0 4rem 0;
  gap: .5rem;
`;

const ControlButton = () => (
  <StyledControlButton>
    <StyledButton name="Clear" />
    <StyledButton name="Stop" />
  </StyledControlButton>
);

export default ControlButton;