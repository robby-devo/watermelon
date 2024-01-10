import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import IDropdownProps from "../../../../models/IDropdownProps";
import styles from "./dropdown.module.scss";

const Dropdown = ({
  label,
  options,
  defaultLabel,
  minWidth,
  selectedValue,
  isDropdownOutlineRequired,
  onChange,
  overlayWidth,
  id,
  errorMessage,
  margin,
  isCountryList = false,
  customClass,
  icon,
}: IDropdownProps) => {
  console.log(selectedValue);
  const [value, setValue] = useState(
    selectedValue && selectedValue.value ? selectedValue.value : defaultLabel
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event: any) => {
    let value = event?.target?.value;
    let item = options.find((option: any) => option.value === value);
    setValue(value);
    onChange(item);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        style={{ margin: `${margin}` }}
        className={`${styles.inputLabelStyles} ${
          errorMessage ? styles.errorStyle : null
        }`}
      >
        {label}
      </div>
      <FormControl
        className={styles.formControl}
        style={{ minWidth: `${minWidth}` }}
      >
        {icon && (
          <div className={styles.iconContainer}>
            {<img src={icon} alt="icon" />}
          </div>
        )}
        <Select
          data-testid={id}
          onChange={handleChange}
          renderValue={(value) =>
            options.find((ele: any) => ele.value === value).label
          }
          value={selectedValue ? selectedValue.value : undefined}
          onClose={toggleDropdown}
          onOpen={toggleDropdown}
          title={selectedValue ? selectedValue.label : ""}
          className={`${styles.select} ${customClass && customClass} ${
            isDropdownOutlineRequired ? styles.selectWithBorder : {}
          }
                        ${value === defaultLabel ? styles.placeholder : ""}
                        ${
                          isOpen && isDropdownOutlineRequired
                            ? styles.focused
                            : null
                        }
                        ${
                          errorMessage && isDropdownOutlineRequired
                            ? styles.errorBorder
                            : null
                        }`}
          sx={{
            width: minWidth,
            ".Mui-focused": {},
            "& .MuiOutlinedInput-notchedOutline": {
              border: "unset !important",
            },
            "& .MuiSelect-outlined": {
              padding: "0 !important",
              paddingRight: "32px !important",
            },
            "& .MuiSvgIcon-root": {
              display: "none !important",
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                width: overlayWidth,
                boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.15) !important",
                // left: "0px !important",
                maxHeight: "255px",
                "& .MuiMenuItem-root": {
                  color: "#1C1919",
                  fontSize: "14px",
                  letterSpacing: "0.5px",
                  fontFamily: "UrbanistRegular",
                  overflow: "hidden",
                  display: "block",
                  textOverflow: "ellipsis",
                  padding: "8px 20px",
                  margin: "2px 0",
                },
              },
            },
          }}
        >
          {options?.map((option: any, ind: number) => (
            <MenuItem
              data-testid={option.value}
              value={option.value}
              key={`menuItem_${ind}`}
              title={option.label}
            >
              {isCountryList ? (
                <div className={styles.childRow}>
                  <img
                    className={styles.countryIcon}
                    src={option.icon}
                    alt={option.icon}
                  />
                  <div className={styles.rowTextStyle}>{option.name}</div>
                  <div className={styles.rowSeperator}></div>
                  <div className={styles.rowTextStyle}>{option.value}</div>
                </div>
              ) : (
                option.label
              )}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {errorMessage ? (
        <div className={styles.errorMessage}>{errorMessage.toString()}</div>
      ) : (
        ""
      )}
    </>
  );
};

export default Dropdown;
