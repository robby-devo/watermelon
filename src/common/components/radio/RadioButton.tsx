import React from "react";
import Radio from "@mui/material/Radio";
import { styled } from "@mui/system";
import { RadioContainerProps } from "../../../models/IRadio";

const RadioContainer = styled("div")({
  "--primaryPink": "#ec187b",
  "--tertiaryGrey7": "#949494",
  "& .MuiRadio-root": {
    "&:hover": {
      "& .MuiSvgIcon-root": {
        fill: "var(--primaryPink)",
      },
    },
    "& .MuiSvgIcon-root": {
      fill: "var(--tertiaryGrey7)",
    },
  },
  "& .MuiRadio-root.Mui-checked": {
    "& .MuiSvgIcon-root": {
      fill: "var(--primaryPink)",
    },
  },
  "& .MuiRadio-root.Mui-disabled.disabled": {
    "& .MuiSvgIcon-root": {
      fill: "var(--tertiaryGrey7)",
    },
  },
});

const RadioButton = ({
  checked,
  setChecked,
  handleChange,
  customClass,
  disabled,
}: RadioContainerProps) => {
  return (
    <RadioContainer className={customClass}>
      <Radio
        data-testid="radio-button"
        name="radio-button"
        className={disabled ? "disabled" : ""}
        disableFocusRipple
        disableRipple
        disableTouchRipple
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
      />
    </RadioContainer>
  );
};

export default RadioButton;
