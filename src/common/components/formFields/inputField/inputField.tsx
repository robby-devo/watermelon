import { useState } from "react";
import styles from "./inputField.module.scss";

const InputField = ({
  label,
  placeholder,
  register,
  onChange,
  type,
  errorMessage,
  id,
  icon,
  width,
  height,
  isTextarea = false,
}: any) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div
        className={`${styles.inputLabelStyles} ${
          errorMessage ? styles.errorStyle : null
        }`}
      >
        {label}
      </div>
      <div
        className={`${styles.inputFieldWrap} ${
          errorMessage ? styles.errorStyle : null
        } ${type === "password" && styles.passwordField}`}
        style={{ width: width, height: height }}
      >
        {icon ? <div className={styles.icon}>
          <img src={icon} alt="icon" />
        </div> : <></>}
        {isTextarea ? (
          <textarea
            data-testid={id}
            className={`${styles.inputField} ${styles.textarea}`}
            {...register}
            placeholder={placeholder}
            onChange={onChange}
          />
        ) : (
          <input
            type={
              type === "password" ? (showPassword ? "password" : "text") : type
            }
            data-testid={id}
            className={styles.inputField}
            {...register}
            placeholder={placeholder}
            onChange={onChange}
          />
        )}
        {type === "password" ? (
          <div
            data-testid="eyeIcon"
            className={`${styles.passwordIcon} ${
              showPassword ? styles.show : styles.hide
            }`}
            onClick={() => setShowPassword(!showPassword)}
          ></div>
        ) : (
          <></>
        )}
      </div>
      {errorMessage ? (
        <div className={styles.errorMessage}>{errorMessage.toString()}</div>
      ) : (
        ""
      )}
    </>
  );
};

export default InputField;
