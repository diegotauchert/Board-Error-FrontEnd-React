import { useState, useEffect, useContext } from 'react';
import { MessagesControlContext } from '../contexts/MessagesControlContext';
import { Snackbar, SnackbarContent, IconButton, Icon } from "@material-ui/core";

const Notification = () => {
  const { colError } = useContext(MessagesControlContext);
  const [open, setOpen] = useState<boolean>(false);
  const [messageNotification, setMessageNotification] = useState<string>('');

  const handleClose = (e:any) => {
    e.preventDefault();
    setOpen(false);
  }

  useEffect(() => {
    if(colError.length > 0){
      setOpen(true);
      setMessageNotification(colError[0]?.message);
      setTimeout(() => setOpen(false) , 2000);
    }
  }, [colError])

  const AlertStyles = {
    backgroundColor: "#F56236",
    color: "#000",
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      aria-describedby="push-notification"
    >
      <SnackbarContent 
        message={messageNotification} 
        style={AlertStyles} 
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
            <Icon>remove_circle</Icon>
          </IconButton>
        ]}
      />
    </Snackbar>
  )
}

export default Notification;