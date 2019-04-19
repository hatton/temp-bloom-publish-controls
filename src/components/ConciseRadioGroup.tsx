import React, { useState, Dispatch, SetStateAction } from "react";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio
} from "@material-ui/core";
export const ConciseRadioGroup: React.FunctionComponent<{
  choices: any;
  value: string;
  setter: Dispatch<SetStateAction<string>>;
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
            onChange={(e, n) => props.setter(key)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
