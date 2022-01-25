import { useContext } from 'react';
import { MessagesControlContext } from '../contexts/MessagesControlContext';
import styled from 'styled-components';
import Grid from "@material-ui/core/Grid";
import Column from './Column';

const StyledBoard = styled.div`
  width: 82%;
  margin: 0 auto;
`;

const MainBoard = () => {
  const { colError, colInfo, colWarn } = useContext(MessagesControlContext)
  
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