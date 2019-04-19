import React, { useState } from "react";
import wifi from "./publish-bloomreader-wifi.svg";
import Button from "@material-ui/core/Button";
import { css } from "emotion";
import { ConciseRadioGroup } from "./ConciseRadioGroup";

// This is a set of radio buttons and image that goes with each choice, plus a button to start off the sharing/saving
export const BloomReaderPublishMethod = () => {
  const [method, setMethod] = useState("wifi"); //initially set state to wifi. Enhance: remember from last time?
  return (
    <>
      <div
        className={css`
          display: flex;
          flex-direction: row;
        `}
      >
        <ConciseRadioGroup
          value={method}
          setter={setMethod}
          choices={{
            wifi: "Share over Wi-FI",
            file: "Save to a file",
            usb: "Send via USB Cable"
          }}
        />
        <img
          src={wifi}
          className={css`
            width: 200px;
            margin-left: 50px;
          `}
          alt="An image reinforcing the current way of publishing."
        />
      </div>
      <div //had to wrap this button because else material-ui overrides the margin
        className={css`
          margin-top: 12px; /*match padding of radio buttons*/
        `}
      >
        <Button variant="contained" color="primary">
          Share
        </Button>
      </div>
    </>
  );
};
