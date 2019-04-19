import React from "react";
import { FormGroup, Link } from "@material-ui/core";

import {
  BasePublishScreen,
  PreviewPanel,
  PublishPanel,
  SettingsGroup,
  HelpGroup
} from "./BasePublishScreen";
import { FeatureSwitch } from "./FeatureSwitch";
import { BloomReaderPublishMethod } from "./BloomReaderPublishMethod";

export const BloomReaderPublishScreen = () => {
  return (
    <BasePublishScreen>
      <PreviewPanel>Preview this!</PreviewPanel>
      <PublishPanel>
        <BloomReaderPublishMethod />
      </PublishPanel>
      <SettingsGroup label="Features">
        <FormGroup>
          <FeatureSwitch label="Talking Book" />
          <FeatureSwitch label="Motion Book" />
          <FeatureSwitch label="Sign Language" />
          <FeatureSwitch label="Image Descriptions" />
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
