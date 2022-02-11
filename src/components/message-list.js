import React from "react";
import Button from "@material-ui/core/Button";
import Api from "../api";
import MuiAlert from "@mui/material/Alert";
import { apiColors, apiNames } from "../data";
import MessagesBar from "./messages-bar";
import NotificationHeader from "./notification-header";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

class MessageList extends React.PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      messages: [],
      open: false,
      lastAlertName: apiNames[0],
      lastAlertColor: apiColors[0],
    };
  }

  api = new Api({
    messageCallback: (message) => {
      this.messageCallback(message);
    },
  });

  componentDidMount() {
    this.api.start();
  }

  messageCallback(message) {
    const { messages } = this.state;
    this.setState(
      {
        messages: [...messages.slice(), message],
      },
      () => {
        // Included to support initial direction. Please remove upon completion
        console.log(messages);
        this.setState({
          open: true,
          lastAlertName: message.message,
          lastAlertColor: apiColors[message.priority],
        });
      }
    );
  }

  cleanAllMessages = () => {
    this.setState({ messages: [] });
  };

  handleClick = () => {
    const isApiStarted = this.api.isStarted();
    if (isApiStarted) {
      this.api.stop();
    } else {
      this.api.start();
    }
    this.forceUpdate();
  };

  removeMessageByIndex = (index) => {
    const { messages } = this.state;
    messages.splice(index, 1);
    this.setState({
      messages: [...messages],
    });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({
      open: false,
    });
  };

  render() {
    const isApiStarted = this.api.isStarted();
    const { open, lastAlertName, lastAlertColor, messages } = this.state;
    return (
      <div>
        <NotificationHeader
          open={open}
          lastAlertName={lastAlertName}
          lastAlertColor={lastAlertColor}
          handleClose={this.handleClose}
        />
        <div className="pt-24 main-container">
          <div className="flex justify-center border-inherit border-t-2">
            <Button
              style={{ backgroundColor: "#00e2c4" }}
              className="w-28 m-2-important"
              variant="contained"
              onClick={this.handleClick}
            >
              {isApiStarted ? "Stop" : "Start"}
            </Button>
            <Button
              style={{ backgroundColor: "#00e2c4" }}
              className="w-28 m-2-important"
              variant="contained"
              onClick={this.cleanAllMessages}
            >
              Clear
            </Button>
          </div>
          <MessagesBar
            messages={messages}
            removeMessageByIndex={this.removeMessageByIndex}
          />
        </div>
      </div>
    );
  }
}

export default MessageList;
