import React, { useState } from "react";
import wifiImage from "./publish-via-wifi.svg";
import usbImage from "./publish-via-usb.svg";
import fileImage from "./publish-to-file.svg";
import Button from "@material-ui/core/Button";
import styles from "./BRPublishScreen.module.css";
import { ConciseRadioGroup } from "../ConciseRadioGroup";

const methodNameToImageUrl = {
  wifi: wifiImage,
  usb: usbImage,
  file: fileImage
};

// This is a set of radio buttons and image that goes with each choice, plus a button to start off the sharing/saving
export const MethodChooser: React.FunctionComponent = () => {
  const [method, setMethod] = useState("file"); //initially set state to wifi. Enhance: remember from last time?
  const methodImage = (methodNameToImageUrl as any)[method];
  return (
    <>
      <div className={styles.root}>
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
          src={methodImage}
          alt="An image that just illustrates the currently selected publishing method."
        />
      </div>
      <div //had to wrap this button because else material-ui overrides the margin
        className={"buttonWrapper"}
      >
        <Button variant="contained" color="primary">
          Share
        </Button>
      </div>
    </>
  );
};
