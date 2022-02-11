import React from "react";
import MuiAlert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import { apiColors, apiNames } from "../data";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MessagesBar = ({ messages, removeMessageByIndex }) => {
  return (
    <div className="flex flex-row p-10">
      {Object.values(apiNames).map((val, index) => {
        const priority = index + 1;
        messages.forEach((m, i) => (m.indexMain = i));
        const priorityMessages = messages.filter(
          (m) => m.priority === priority
        );
        return (
          <div className="flex-1" key={`block-${val}`}>
            <h1 className="text-lg font-semibold">
              {val} type {priority}
            </h1>
            <div>Count {priorityMessages.length}</div>
            <div>
              {priorityMessages &&
                priorityMessages.map((msg, i) => {
                  return (
                    <Alert
                      key={`alert${priority}-${i}`}
                      action={
                        <IconButton
                          aria-label="clear"
                          color="inherit"
                          size="small"
                          disableRipple={true}
                          className="text-sm-important"
                          onClick={() => {
                            removeMessageByIndex(msg.indexMain);
                          }}
                        >
                          Clear
                        </IconButton>
                      }
                      severity="error"
                      className="mr-4 mt-4 mb-4"
                      icon={false}
                      sx={{
                        backgroundColor: apiColors[priority],
                        color: "black",
                      }}
                    >
                      {msg.message}
                    </Alert>
                  );
                }).reverse()}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessagesBar;
