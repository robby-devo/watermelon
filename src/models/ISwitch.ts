export interface SwitchProps {
  switchType?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  setChecked?: React.Dispatch<React.SetStateAction<boolean>>;
  customClass?: string;
  disabled?: boolean;
}
