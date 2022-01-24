import Grid from "@material-ui/core/Grid";
import { Message } from "../Api";
import Card from './Card';
import styled from 'styled-components'

const Title = styled.h2`
  font-size: 1.5em;
`;

const SubTitle = styled.span`
  font-size: .9em;
  margin-bottom: .6rem;
  display: block;
`;

type IColumnType = {
  label: string;
  messages: Message[];
  color: string;
}

const Column = ({label, messages, color}: IColumnType) => (
  <Grid item md={4} xs={12}>
    <Title>{label}</Title>
    <SubTitle>Count {messages.length}</SubTitle>
    {messages?.map?.(msg => (
      <Card key={msg?.message} color={color}>
        {msg?.message}
      </Card>
    ))}
  </Grid>
);

export default Column;