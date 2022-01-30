import { ReactNode, useContext, useEffect, useState } from 'react';
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import styled from 'styled-components'
import { MessagesControlContext } from '../contexts/MessagesControlContext';
import { PriorityEnum } from '../enum/PriorityEnum';
import { AnimateEnum } from '../enum/AnimateEnum';

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

interface animateParam {
  class: AnimateEnum;
  index?: number;
}

type ICardType = {
  index: number;
  color: string;
  priority: PriorityEnum;
  children: ReactNode;
}

const Card = ({index, color, priority, children}: ICardType) => {
  const { clearMessage, animateCard } = useContext(MessagesControlContext);
  const [ animate, setAnimate ] = useState<animateParam | undefined>({} as animateParam)

  const handleClickClear = (index:number, priority:number) => {
    setAnimate({class: AnimateEnum.Clear, index});
    setTimeout(() => {
      clearMessage(index, priority)
      setAnimate(undefined);
    }, 400);
  }

  useEffect(() => {
    if(index === 0 && animateCard === priority){
      setAnimate({class: AnimateEnum.Show, index});
  
      setTimeout(() => {
        setAnimate(undefined);
      }, 400);
    }

    return () => setAnimate(undefined);
  }, [index, animateCard, priority]);

  return (
    <Paper 
      elevation={1} 
      className={index === 0 ? animate?.class : ''} 
      title={children?.toString()}
      data-testid="alert"
      role="alert"
    >
      <StyledCard color={color}>
        {children}

        <StyledButtonCard>
          <Button 
            data-testid="buttonClearSingleCard"
            variant="text" 
            size="small" 
            style={{textTransform: 'capitalize', fontWeight: '500'}}
            onClick={() => handleClickClear(index, priority)}
          >
            Clear
          </Button>
        </StyledButtonCard>
      </StyledCard>
    </Paper>
  )
}

export default Card