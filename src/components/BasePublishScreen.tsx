import React from "react";
import { Typography } from "@material-ui/core";
import { css } from "emotion";

// This divides the screen up in a standard way that we can
// then build upon for epub, android, facebook, and (maybe) upload
export const PreviewPanel: React.FunctionComponent = props => {
  return <section className={preview}>{props.children}</section>;
};
export const PublishPanel: React.FunctionComponent = props => {
  return <section className={publishControls}>{props.children}</section>;
};
export const SettingsGroup: React.FunctionComponent<{
  label: string;
}> = props => {
  return (
    <>
      <Typography component="h1" variant="h6">
        {props.label}
      </Typography>
      {props.children}
    </>
  );
};
export const HelpGroup: React.FunctionComponent = props => {
  return (
    <section
      className={css`
        margin-top: auto;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
      `}
    >
      <Typography component="h1" variant="h6">
        Help
      </Typography>
      {props.children}
    </section>
  );
};
interface IProps {}
// function getOneChildOfType(t:typeof ReactComponent, children: React.ReactChildren) : React.ReactElement{
//   return React.Children.toArray(children).find(element => React.isValidElement(element) && element.type === PublishPanel);
// }
export const BasePublishScreen: React.FunctionComponent<IProps> = props => {
  const publish = React.Children.toArray(props.children).find(
    element => React.isValidElement(element) && element.type === PublishPanel
  );
  const preview = React.Children.toArray(props.children).find(
    element => React.isValidElement(element) && element.type === PreviewPanel
  );
  const settingsGroups = React.Children.toArray(props.children).filter(
    element => React.isValidElement(element) && element.type === SettingsGroup
  );
  const helpGroup = React.Children.toArray(props.children).find(
    element => React.isValidElement(element) && element.type === HelpGroup
  );

  return (
    <div className={root}>
      <main className={main}>
        {preview}
        {publish}
      </main>
      <aside className={sidePanel}>
        {settingsGroups}
        {helpGroup}
      </aside>
    </div>
  );
};

const root = css`
  display: flex;
  //border: solid thick green;
  text-align: left; // I don't know why this is needed. Else labels were center aligned.
  height: 100%;
`;

const sidePanel = css`
  padding-left: 20px;
  width: 300px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  height: 100%;
`;

const preview = css`
  height: 300px;
  width: 100%;
  background-color: grey;
`;
const main = css`
  height: 100%;
  width: 100%;
  flex-grow: 1;
  //border: solid thick red;
`;

const publishControls = css`
  display: flex;
  flex-direction: column;
  //border: solid thick purple;
  padding: 20px;
`;
