import React, { useState } from "react";
import SBProvider from "@sendbird/uikit-react/SendbirdProvider";
import "@sendbird/uikit-react/dist/index.css";

import { ButtonGroup, Button } from "@material-ui/core";

import { APP_ID, USER_ID, NICKNAME } from "./const";
import CustomizedApp from "./CustomizedApp";
import "./index.css";
import useStyles from "./styles";

export default function App() {
  const classes = useStyles();
  const { selected, unselected, rightButton } = classes;
  const [customizedMessage, setCustomizedMessage] = useState(false);

  return (
    <div className="app-wrapper">
      <div className="channel-selector">
        <div className="channel-selector__icons">
          <ButtonGroup>
            <Button
              className={customizedMessage ? unselected : selected}
              onClick={() => setCustomizedMessage(false)}
              variant={customizedMessage ? "outlined" : "contained"}
              size="large"
            >
              Normal Messages
            </Button>
            <Button
              className={`${
                customizedMessage ? selected : unselected
              } ${rightButton}`}
              onClick={() => setCustomizedMessage(true)}
              variant={customizedMessage ? "contained" : "outlined"}
              size="large"
            >
              Customized Messages
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <SBProvider appId={APP_ID} userId={USER_ID} nickname={NICKNAME}>
        <CustomizedApp customizedMessage={customizedMessage} />
      </SBProvider>
    </div>
  );
}
