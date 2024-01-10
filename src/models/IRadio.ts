export interface RadioContainerProps {
  checked?: boolean;
  disabled?: boolean;
  customClass?: string;
  setChecked?: (checked: boolean) => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
