import React from "react";
import { Link } from "@material-ui/core";

import {
  BasePublishScreen,
  PreviewPanel,
  PublishPanel,
  SettingsGroup,
  HelpGroup,
  SettingsPanel
} from "../BasePublishScreen/BasePublishScreen";

import { UploadControl } from "./UploadControl";
import { PublishFeaturesGroup } from "../BasePublishScreen/PublishFeaturesGroup";
import { LanguageGroup } from "../BasePublishScreen/LanguageGroup";
import { AudioGroup } from "../BasePublishScreen/AudioGroup";

export const UploadScreen = () => {
  return (
    <BasePublishScreen>
      <PreviewPanel>
        Preview of the book page will look like on bloomlibrary.org
      </PreviewPanel>
      <PublishPanel>
        <UploadControl />
      </PublishPanel>
      <SettingsPanel>
        <PublishFeaturesGroup />
        <LanguageGroup />
        <AudioGroup />
        <HelpGroup>
          <Link>About BloomLibrary.org</Link>
        </HelpGroup>
      </SettingsPanel>
    </BasePublishScreen>
  );
};
