import React, { useState } from "react";
import wifi from "./publish-android-wifi.svg";
import Button from "@material-ui/core/Button";
import { css } from "emotion";
import {
  Typography,
  Divider,
  List,
  createStyles,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Link
} from "@material-ui/core";

import {
  BasePublishScreen,
  PreviewPanel,
  PublishPanel,
  SettingsGroup,
  HelpGroup
} from "./BasePublishScreen";

export const Feature: React.FunctionComponent<{ label: string }> = props => {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e, newState) => setChecked(newState)}
        />
      }
      label={props.label}
    />
  );
};

const ConciseRadioGroup: React.FunctionComponent<{
  choices: any;
  value: string;
  setter: {};
}> = props => {
  const [value, setValue] = useState(props.value);
  return (
    <FormControl>
      <RadioGroup
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      >
        {Object.keys(props.choices).map(key => (
          <FormControlLabel
            value={key}
            control={<Radio color="primary" />}
            label={(props.choices as any)[key]}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export const AndroidPublishScreen = () => {
  const [method, setMethod] = useState("wifi"); //initially set state to wifi. Enhance: remember from last time?
  return (
    <BasePublishScreen>
      <PreviewPanel>Preview this!</PreviewPanel>
      <PublishPanel>
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
          />{" "}
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
      </PublishPanel>
      <SettingsGroup label="Features">
        <FormGroup>
          <Feature label="Talking Book" />
          <Feature label="Motion Book" />
          <Feature label="Sign Language" />
          <Feature label="Image Descriptions" />
        </FormGroup>
      </SettingsGroup>
      <SettingsGroup label="Thumbnail" />
      <HelpGroup>
        <Link>About Bloom Reader</Link>
        <Link>About Book Features</Link>
        <Link>Troubleshooting Tips</Link>
        <Link>Get Bloom Reader App</Link>
      </HelpGroup>
    </BasePublishScreen>
  );
};
