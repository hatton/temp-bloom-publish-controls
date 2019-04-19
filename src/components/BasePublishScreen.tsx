/** @jsx jsx */ // required to add emotions'css prop to elements

import React from "react";
import { Typography } from "@material-ui/core";
import { css } from "@emotion/core";
import { jsx } from "@emotion/core";
/* 
  Example usage:
  <BasePublishScreen>
      <PreviewPanel>Preview this!</PreviewPanel>
      <PublishPanel>
        Some controls for actually publishing
      </PublishPanel>
      <SettingsGroup label="Features">
        some settings
      </SettingsGroup>
      <SettingsGroup label="Thumbnail">
        some more settings
      </SettingsGroup>
      <HelpGroup>
        some help links
      </HelpGroup>
  </BasePublishScreen>
*/

export const BasePublishScreen: React.FunctionComponent = props => (
  <div css={screen}>
    <main css={main}>
      {findOne(props.children, PreviewPanel)}
      {findOne(props.children, PublishPanel)}
    </main>
    <aside css={sidePanel}>
      {findAny(props.children, SettingsGroup)}
      {findOne(props.children, HelpGroup)}
    </aside>
  </div>
);

export const PreviewPanel: React.FunctionComponent = props => {
  return (
    <section
      css={css`
        height: 300px;
        width: 100%;
        background-color: grey;
      `}
    >
      {props.children}
    </section>
  );
};
export const PublishPanel: React.FunctionComponent = props => {
  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        padding: 20px;
      `}
    >
      {props.children}
    </section>
  );
};
export const SettingsGroup: React.FunctionComponent<{
  label: string;
}> = props => {
  return (
    <section
      css={css`
        margin-top: 20px;
      `}
    >
      <Typography component="h1" variant="h6">
        {props.label}
      </Typography>
      {props.children}
    </section>
  );
};
export const HelpGroup: React.FunctionComponent = props => {
  return (
    <section
      css={css`
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
function findOne(children: React.ReactNode, classRef: React.ReactNode) {
  return findAny(children, classRef)[0];
}
function findAny(children: React.ReactNode, classRef: React.ReactNode) {
  return React.Children.toArray(children).filter(
    element => React.isValidElement(element) && element.type === classRef
  );
}
const screen = css`
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

const main = css`
  height: 100%;
  width: 100%;
  flex-grow: 1;
`;
