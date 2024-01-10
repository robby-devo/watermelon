import LoginBackground from "../../../../components/login/LoginBackground";
import styles from "./forgotPassword.module.scss";

import arrowLeft from "../../../../assets/images/login/arrowLeft.svg";
import lock from "../../../../assets/images/login/lock.svg";
import { LOGIN_PAGE_STRINGS } from "../../../../common/constants/stringConstants";
import InputField from "../../../../common/components/formFields/inputField/inputField";
import Button from "../../../../common/components/button/Button";
import { useNavigate } from "react-router-dom";
import { routeConfig } from "../../../../common/constants/routeConfig";

const ForgotPasswordComp = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.forgotPassword}>
        <div className={styles.forgotPassword__goback} id="back">
          <img
            src={arrowLeft}
            alt="arrow"
            onClick={() => {
              navigate(routeConfig.signin);
            }}
          />
          <span>{LOGIN_PAGE_STRINGS.BACK}</span>
        </div>

        <div className={styles.forgotPassword__header}>
          <div className="">
            <img src={lock} alt="lock" />
          </div>
          <div className={styles.headerText}>
            {LOGIN_PAGE_STRINGS.FORGOT_PASSWORD_LABEL}
          </div>
          <div className={styles.subheaderText}>
            {LOGIN_PAGE_STRINGS.FORGOT_PWD_TEXT}
          </div>
        </div>

        <div className={styles.forgotPassword__form}>
          <form>
            {/* // <!-- email --> email form-field  formField*/}
            <div className={`${styles.email} ${styles.formField}`}>
              <div className={styles.formFieldItem}>
                <div className={styles.label}>{LOGIN_PAGE_STRINGS.EMAILID}</div>

                <InputField
                  placeholder={LOGIN_PAGE_STRINGS.EMAIL_PLACEHOLDER}
                />
              </div>
            </div>

            {/* <!-- email --> */}

            <div className={styles.forgotPasswordButton}>
              <Button
                label={LOGIN_PAGE_STRINGS.RESET_LINK}
                large={true}
                handleClick={() => {
                  navigate(routeConfig.resetLink);
                }}
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export const ForgotPassword = () => {
  return (
    <LoginBackground
      form={
        <>
          <ForgotPasswordComp />
        </>
      }
    ></LoginBackground>
  );
};
