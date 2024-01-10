import * as React from "react";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import styles from "./Switch.module.scss";
import { SwitchProps } from "../../../models/ISwitch";

const CustomSwitch = styled(Switch)(() => ({
  "--primaryPink": "#ec187b",
  "--tertiaryGrey6": "rgba(128, 128, 128, 1)",
  "& .MuiSwitch-switchBase": {
    "& .MuiSwitch-thumb": {
      backgroundColor: "var(--tertiaryGrey6)",
    },
    "&.Mui-checked": {
      "& .MuiSwitch-thumb": {
        backgroundColor: "var(--primaryPink)",
      },
    },
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "rgba(128, 128, 128, 0.4)",
    },
  },
}));

const BasicSwitch = ({
  switchType,
  handleChange,
  checked,
  customClass,
  setChecked,
  disabled,
}: SwitchProps) => {
  return (
    <div className={`${styles.switchContainer} ${customClass}`}>
      <CustomSwitch
        disabled={disabled ? disabled : false}
        name="switch"
        disableFocusRipple
        disableTouchRipple
        disableRipple
        checked={checked}
        onChange={handleChange}
        sx={{
          "& .MuiSwitch-switchBase": {
            "& .MuiSwitch-thumb": {
              backgroundColor:
                switchType === "dual"
                  ? "var(--primaryPink)"
                  : "var(--tertiaryGrey6)",
            },
            "& + .MuiSwitch-track": {
              backgroundColor: "rgba(128, 128, 128, 0.4)",
            },
          },
        }}
      />
    </div>
  );
};
export default BasicSwitch;
