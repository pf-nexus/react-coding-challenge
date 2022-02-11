import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NotificationHeader = ({
  open,
  lastAlertName,
  lastAlertColor,
  handleClose,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity="error"
        icon={false}
        sx={{
          width: "300px",
          backgroundColor: lastAlertColor,
          color: "black",
        }}
      >
        {lastAlertName}
      </Alert>
    </Snackbar>
  );
};

export default NotificationHeader;
