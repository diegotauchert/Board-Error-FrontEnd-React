import Button from "@material-ui/core/Button";

type IButtonType = {
  name: string;
}

export const SingleButton = ({name}: IButtonType) => (
  <Button variant="contained" style={{
      backgroundColor: "#a5f8ab",
      fontSize: ".8rem",
      fontWeight: "800",
      padding: ".2rem 1.2rem",
      cursor: "pointer",
  }}>
    {name}
  </Button>
);