import { ButtonProps } from "../../../models/IButton";
import styles from "./Button.module.scss";

const Button = ({
  large,
  secondary,
  disabled,
  disableSecondary,
  link,
  customClass,
  label,
  handleClick,
  width,
}: ButtonProps) => {
  const buttonClassName = `${styles.commonBtn} ${
    large ? styles.largeBtn : ""
  } ${secondary ? styles.secondary : ""} ${disabled ? styles.disabled : ""} ${
    disableSecondary ? styles.disableSecondary : ""
  } ${link ? styles.link : ""}`;

  const isButtonDisabled = disabled || disableSecondary;

  return (
    <button
      style={{ width: width }}
      onClick={handleClick}
      className={`${buttonClassName} ${customClass}`}
      disabled={isButtonDisabled ? disabled : undefined}
    >
      {label}
    </button>
  );
};

export default Button;
