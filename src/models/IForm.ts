export interface ICheckboxButtonProps {
  partiallySelected?: boolean;
  label?: string;
  errorMessage?: string;
  customClass?: string;
  disabled?: boolean;
  checked?: boolean;
  setChecked?: (checked: boolean) => void;
}
