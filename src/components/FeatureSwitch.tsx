import React, { useState } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
// This divides the screen up in a standard way that we can
// then build upon for epub, android, facebook, and (maybe) upload
export const FeatureSwitch: React.FunctionComponent<{
  label: string;
}> = props => {
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
