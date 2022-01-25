import { useContext, MouseEvent } from 'react';
import { MessagesControlContext } from '../contexts/MessagesControlContext';
import styled from 'styled-components';
import { SingleButton as StyledButton } from './Button';

const StyledControlButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: .4rem 0 4rem 0;
  gap: .5rem;
`;

const ControlButton = () => {
  const { stopMessages, stop, clearMessages } = useContext(MessagesControlContext)

  const handleClickClear = (e:MouseEvent<HTMLElement>) => {
    e.preventDefault(); 
    clearMessages()
  }

  return (
  <StyledControlButton>
    <StyledButton name="Clear" onClick={handleClickClear} />
    <StyledButton name={stop ? 'Start' : 'Stop'} onClick={stopMessages} />
  </StyledControlButton>
)};

export default ControlButton;