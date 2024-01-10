export interface ButtonProps {
  large?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  disableSecondary?: boolean;
  link?: boolean;
  label: string;
  customClass?: string;
  width?:string;
  handleClick: () => void;
}
