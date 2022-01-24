import { useState,useEffect } from 'react';
import styled from 'styled-components';
import Grid from "@material-ui/core/Grid";
import Column from './Column';
import { Message } from '../Api';
import { PriorityEnum } from '../enum/PriorityEnum';

const StyledBoard = styled.div`
  width: 82%;
  margin: 0 auto;
`;

type IMainBoardType = {
  newMessage: Message;
}

const MainBoard = ({newMessage}: IMainBoardType) => {
  
  const [colError, setColError] = useState<Message[]>([]);
  const [colWarn, setColWarn] = useState<Message[]>([]);
  const [colInfo, setColInfo] = useState<Message[]>([]);

  useEffect(() => {
    newMessage.priority === PriorityEnum.Error && setColError(oldMessages => [...oldMessages, newMessage]);
    newMessage.priority === PriorityEnum.Warn && setColWarn(oldMessages => [...oldMessages, newMessage]);
    newMessage.priority === PriorityEnum.Info && setColInfo(oldMessages => [...oldMessages, newMessage]);
  }, [newMessage])
  
  return (
    <StyledBoard>
      <Grid container spacing={16}>
        <Column label='Error Type 1' messages={colError} color="#F56236" />
        <Column label='Warning Type 2' messages={colWarn} color="#FCE788" />
        <Column label='Info Type 3' messages={colInfo} color="#88FCA3" />
      </Grid>
    </StyledBoard>
  );
};

export default MainBoard;