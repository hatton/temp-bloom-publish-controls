import theme from "../bloomMaterialUITheme";
import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { addDecorator } from "@storybook/react";
import "typeface-roboto";
import { BRPublishScreen } from "../components/BRPublish/BRPublishScreen";
import { UploadScreen } from "../components/UploadScreen/UploadScreen";

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

storiesOf("PublishScreens", module)
  .add("BRPublishScreen", () => <BRPublishScreen />)
  .add("UploadScreen", () => <UploadScreen />);
