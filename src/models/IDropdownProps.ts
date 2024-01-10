interface IDropdownProps {
  label: string;
  options: any;
  defaultLabel: string;
  selectedValue?: any;
  minWidth?: string;
  height?: string;
  initialSelectedPatternsValues?: { index: number; value: string }[];
  isDropdownOutlineRequired?: boolean;
  onChange?: any;
  overlayWidth?: string;
  id?: string;
  errorMessage?: string;
  isCountryList?: boolean;
  margin?: string;
  customClass?: String;
  icon?: string;
}

export default IDropdownProps;
