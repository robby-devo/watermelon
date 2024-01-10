import React from "react";
import LoginBackground from "../../../../components/login/LoginBackground";
import styles from "./signIn.module.scss";
import { LOGIN_PAGE_STRINGS } from "../../../../common/constants/stringConstants";
import InputField from "../../../../common/components/formFields/inputField/inputField";
import CheckboxButton from "../../../../common/components/checkbox/CheckboxButton";
import Button from "../../../../common/components/button/Button";

import { useNavigate } from "react-router-dom";
import { routeConfig } from "../../../../common/constants/routeConfig";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.signin}>
        <div className={styles.signin__header}>
          {LOGIN_PAGE_STRINGS.WELCOME_BACK}
        </div>

        <div className={styles.signin__form}>
          <form>
            {/* // <!-- email --> */}
            <div className={`${styles.email} ${styles.formField}`}>
              <div className={styles.formFieldItem}>
                <div className={styles.label}>{LOGIN_PAGE_STRINGS.EMAILID}</div>
                <InputField
                  placeholder={LOGIN_PAGE_STRINGS.EMAIL_PLACEHOLDER}
                  type="email"
                />
              </div>
            </div>
            {/* <!-- email --> */}

            {/* <!-- password --> */}
            <div className={`${styles.password} ${styles.formField}`}>
              <div className={styles.formFieldItem}>
                <div className={styles.label}>
                  {LOGIN_PAGE_STRINGS.PASSWORD}
                </div>
                <div className="">
                  <InputField
                    placeholder={LOGIN_PAGE_STRINGS.PASSWORD_PLACEHOLDER}
                    type="password"
                  />
                </div>
              </div>
            </div>
            {/* <!-- password --> */}

            {/* <!-- Remember me section --> */}
            <div className={styles.rememberSection}>
              <div className={styles.checkbox}>
                <CheckboxButton label={"Remember Me"} />
              </div>

              <div
                className={styles.forgotPassword}
                id="forgot-password"
                onClick={() => {
                  navigate(routeConfig.forgotPassword);
                }}
              >
                {LOGIN_PAGE_STRINGS.FORGOT_PASSWORD}
              </div>
            </div>
            {/* // <!-- Remember me section --> */}

            <div className={styles.formField}>
              <Button
                label={LOGIN_PAGE_STRINGS.SIGNIN}
                large={true}
                handleClick={() => {}}
              />
            </div>
          </form>

          <div className={styles.signin__signup}>
            {LOGIN_PAGE_STRINGS.NO_ACCOUNT}
            <span
              className={styles.link_primary}
              id="register"
              onClick={() => {
                navigate(routeConfig.signup);
              }}
            >
              {LOGIN_PAGE_STRINGS.REGISTER_HERE}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
const SignInForm = () => {
  return (
    <LoginBackground
      form={
        <>
          <SignIn />
        </>
      }
    ></LoginBackground>
  );
};

export default SignInForm;
