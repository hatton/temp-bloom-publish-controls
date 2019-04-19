/** @jsx jsx */ // required to add emotions'css prop to elements
import wifiImage from "./publish-bloomreader-wifi.svg";
import React, { useState } from "react";

import usbImage from "./publish-bloomreader-usb.svg";
import fileImage from "./publish-bloomreader-file.svg";
import Button from "@material-ui/core/Button";
import { css } from "@emotion/core";
import { ConciseRadioGroup } from "./ConciseRadioGroup";
import { jsx } from "@emotion/core";
const methodNameToImageUrl = {
  wifi: wifiImage,
  usb: usbImage,
  file: fileImage
};

// This is a set of radio buttons and image that goes with each choice, plus a button to start off the sharing/saving
export const BloomReaderPublishMethod: React.FunctionComponent = () => {
  const [method, setMethod] = useState("file"); //initially set state to wifi. Enhance: remember from last time?
  const methodImage = (methodNameToImageUrl as any)[method];
  return (
    <>
      <div css={root}>
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
          css={css`
            width: 200px;
            margin-left: 50px;
          `}
          src={methodImage}
          alt="An image that just illustrates the currently selected publishing method."
        />
      </div>
      <div //had to wrap this button because else material-ui overrides the margin
        css={css`
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

const root = css`
  display: flex;
  flex-direction: row;
  height: 100px;
`;
