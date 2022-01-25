import { ReactNode, useContext } from 'react';
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import styled from 'styled-components'
import { MessagesControlContext } from '../contexts/MessagesControlContext';
import { PriorityEnum } from '../enum/PriorityEnum';

const StyledCard = styled.div`
  background-color: ${(props) => props.color};
  overflow: hidden;
  margin: 0 0 .55rem 0;
  padding: .9rem;
  width: 100%;
  border-radius: 5px;
  min-height: 70px;
  position: relative;
  z-index: 1;
`;

const StyledButtonCard = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  z-index: 2;
  margin-top:2rem;
`;

type ICardType = {
  index: number;
  color: string;
  priority: PriorityEnum;
  children: ReactNode;
}

const Card = ({index, color, priority, children}: ICardType) => {
  const { clearMessage } = useContext(MessagesControlContext);

  return (
    <Paper elevation={1}>
      <StyledCard color={color}>
        {children}

        <StyledButtonCard>
          <Button 
            variant="text" 
            size="small" 
            style={{textTransform: 'capitalize', fontWeight: '500'}}
            onClick={() => clearMessage(index, priority)}
          >
            Clear
          </Button>
        </StyledButtonCard>
      </StyledCard>
    </Paper>
  )
}

export default Card