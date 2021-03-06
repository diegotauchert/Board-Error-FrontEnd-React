import { MouseEvent } from 'react';
import Button from "@material-ui/core/Button";

type IButtonType = {
  name: string;
  title?: string;
  onClick: (e:MouseEvent<HTMLElement>) => void;
}

const ButtonStyles = {
  backgroundColor: "#a5f8ab",
  fontSize: ".8rem",
  fontWeight: "800",
  padding: ".2rem 1.2rem",
  cursor: "pointer",
}

export const SingleButton = ({name, title, onClick}: IButtonType) => (
  <Button role="button" title={title} variant="contained" style={ButtonStyles} onClick={onClick}>
    {name}
  </Button>
);