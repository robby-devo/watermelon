import Button from "../../../../common/components/button/Button";
import InputField from "../../../../common/components/formFields/inputField/inputField";
import { routeConfig } from "../../../../common/constants/routeConfig";
import { LOGIN_PAGE_STRINGS } from "../../../../common/constants/stringConstants";
import LoginBackground from "../../../../components/login/LoginBackground";
import styles from "./resetPassword.module.scss";
import { useNavigate } from "react-router-dom";

const ResetPasswordComp = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.resetPassword}>
      <div className={styles.resetPassword__header}>
        <div className={styles.headerText}>
          {LOGIN_PAGE_STRINGS.RESET_PWD_LABEL}
        </div>
        <div className={styles.subheaderText}>
          {LOGIN_PAGE_STRINGS.RESET_PWD_TEXT}
        </div>
      </div>

      <div className={styles.resetPassword__form}>
        <form>
          <div className={`${styles.password} ${styles.formField}`}>
            <div className={styles.formFieldItem}>
              <div className={styles.label}>{LOGIN_PAGE_STRINGS.PASSWORD}</div>
              <div className="">
                <InputField
                  placeholder={LOGIN_PAGE_STRINGS.PASSWORD_PLACEHOLDER}
                  type="password"
                />
              </div>
            </div>
          </div>

          <div className={`${styles.confirmPassword} ${styles.formField}`}>
            <div className={styles.formFieldItem}>
              <div className={styles.label}>
                {LOGIN_PAGE_STRINGS.CONFIRM_PASSWORD}
              </div>
              <div className="">
                <InputField
                  placeholder={LOGIN_PAGE_STRINGS.PASSWORD_PLACEHOLDER}
                  type="password"
                />
              </div>
            </div>
          </div>
        </form>

        <div className={styles.resetPasswordButton}>
          <Button
            label={LOGIN_PAGE_STRINGS.RESET_PASSWORD}
            large={true}
            handleClick={() => {
              navigate(routeConfig.resetCompleted);
            }}
          />
        </div>
      </div>
    </section>
  );
};
export const ResetPassword = () => {
  return (
    <LoginBackground
      form={
        <>
          <ResetPasswordComp />
        </>
      }
    ></LoginBackground>
  );
};
