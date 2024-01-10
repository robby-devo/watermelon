import React from "react";
import Checkbox from "@mui/joy/Checkbox";
import { styled } from "@mui/system";
import styles from "./CheckboxButton.module.scss";
import { ICheckboxButtonProps } from "../../../models/IForm";

const CheckboxContainer = styled("div")({
  "--primaryPink": "#ec187b",
  "--primaryWhite": "#fff",
  "--teritaryBlack": "#1C1919",
  "--urbanistRegular": "UrbanistRegular",

  "& .MuiCheckbox-root": {
    display: "flex",
    alignItems: "center",
    transition: "all 0.4s ease-in-out",
    "&:hover": {
      "& .MuiCheckbox-checkbox": {
        background: "transparent",
        borderColor: "var(--primaryPink)",
      },
    },
    "& .MuiCheckbox-checkbox": {
      transition: "all 0.1s ease-in-out",
      borderRadius: "4px",
      background: "var(--primaryWhite)",
    },
    "& .MuiCheckbox-checkbox.Joy-checked": {
      background: "var(--primaryPink)",
    },
    "& .MuiCheckbox-label": {
      color: "var(--teritaryBlack)",
      fontFamily: "var(--urbanistRegular)",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      letterSpacing: "0.5px",
    },
  },
  "&.partiallySelected .MuiCheckbox-root": {
    "& .MuiCheckbox-checkbox": {
      border: "1px solid var(--primaryPink)",
      position: "relative",
      "&:after": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        height: "2px",
        borderRadius: "6px",
        background: "var(--primaryPink)",
      },
    },
    "& .MuiCheckbox-checkbox.Joy-checked": {
      borderColor: "var(--primaryPink)",
    },
  },
});

const CheckboxButton = ({
  partiallySelected = false,
  label,
  customClass,
  errorMessage,
  disabled,
  checked,
  setChecked,
}: ICheckboxButtonProps) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked && setChecked(event.target.checked);
  };

  return (
    <>
      <CheckboxContainer
        className={`${customClass} 
        ${partiallySelected ? `partiallySelected ` : `${styles.checkbox} `}`}
      >
        <Checkbox
          data-testid="checkbox"
          label={label && label}
          className={partiallySelected ? "partiallySelected" : ""}
          indeterminate={partiallySelected ? true : false}
          onChange={handleCheckboxChange}
          checked={partiallySelected ? false : checked}
          name="input-checkbox"
          disabled={disabled ? true : false}
        />
        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}
      </CheckboxContainer>
    </>
  );
};

export default CheckboxButton;
