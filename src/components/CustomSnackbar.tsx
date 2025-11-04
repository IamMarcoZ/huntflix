import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar, { type SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

type CustomSnackbarPropsT = {
  snackBarConfig: {open:boolean, message:string};
  close: () => void;
}

export default function CustomSnackbar({snackBarConfig , close}:CustomSnackbarPropsT) {

  
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    close();
    if (reason === 'clickaway') {
      return;
    }
  };

  return (
    <div >
      <Snackbar open={snackBarConfig.open} autoHideDuration={1500000} onClose={handleClose}>
        <Alert
          onClose={(handleClose)}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackBarConfig.message}
        </Alert>
      </Snackbar>
    </div>
  );
}