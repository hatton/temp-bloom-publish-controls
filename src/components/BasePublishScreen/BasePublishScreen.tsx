import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./BasePublishScreen.module.css";

/* 
  Example usage:
  <BasePublishScreen>
      <PreviewPanel>Preview this!</PreviewPanel>
      <PublishPanel>
        Some controls for actually publishing
      </PublishPanel>
      <SettingsPanel>


        <HelpGroup>
          some help links
        </HelpGroup>
      </SettingsPanel>
  </BasePublishScreen>
*/

export const BasePublishScreen: React.FunctionComponent = props => (
  <div className={styles.screen}>
    <main className={styles.main}>
      {findOne(props.children, PreviewPanel)}
      {findOne(props.children, PublishPanel)}
    </main>
    <aside className={styles.sidePanel}>
      {findOne(props.children, SettingsPanel)}
      {findOne(props.children, HelpGroup)}
    </aside>
  </div>
);

export const PreviewPanel: React.FunctionComponent = props => {
  return <section className={styles.preview}>{props.children}</section>;
};
export const PublishPanel: React.FunctionComponent = props => {
  return <section className={styles.publish}>{props.children}</section>;
};
export const SettingsPanel: React.FunctionComponent = props => {
  return <>{props.children}</>;
};
export const SettingsGroup: React.FunctionComponent<{
  label: string;
}> = props => {
  return (
    <section className={styles.settingsGroup}>
      <Typography component="h1" variant="h6">
        {props.label}
      </Typography>
      {props.children}
    </section>
  );
};
export const HelpGroup: React.FunctionComponent = props => {
  return (
    <section className={styles.helpGroup}>
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
