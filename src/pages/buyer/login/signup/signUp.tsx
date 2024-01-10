import LoginBackground from "../../../../components/login/LoginBackground";

import suggestion from "../../../../assets/images/login/suggestion.svg";
import styles from "./signUp.module.scss";
import { LOGIN_PAGE_STRINGS } from "../../../../common/constants/stringConstants";
import InputField from "../../../../common/components/formFields/inputField/inputField";
import Button from "../../../../common/components/button/Button";
import CheckboxButton from "../../../../common/components/checkbox/CheckboxButton";
import { routeConfig } from "../../../../common/constants/routeConfig";

import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.signup}>
        <div className={styles.signup__header}>
          {LOGIN_PAGE_STRINGS.WELCOME}
        </div>
        <div className={styles.signup__form}>
          <form>
            {/* <!-- email --> */}
            <div className={`${styles.email} ${styles.formField}`}>
              <div className={styles.formFieldItem}>
                <div className={styles.label}>
                  {LOGIN_PAGE_STRINGS.EMAILID}
                  <div className={styles.suggestion}>
                    <div className={styles.icon}>
                      <img src={suggestion} alt="suggestion" />
                    </div>
                    {LOGIN_PAGE_STRINGS.SUGGESTION}
                  </div>
                </div>

                <InputField
                  placeholder={LOGIN_PAGE_STRINGS.EMAIL_PLACEHOLDER}
                />
              </div>
            </div>
            {/* <!-- email --> */}

            {/* <!-- password --> password form-field */}
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
              {/* <!-- password constraints  --> */}
              <div className="password-constraint-container">
                <div className="contain-text">
                  {/* {{ stringConstants.PASSWORD_CONSTRIANTS }} */}
                </div>
                <div className="password-constraint">
                  <div className="icon">
                    <div className="dot"></div>
                  </div>

                  {/* <div>{{ constraint.label }}</div> */}
                </div>
              </div>
              {/* <!-- password constraints  --> */}
            </div>
            {/* <!-- password --> */}

            {/* <!-- confirn password --> name-section */}
            <div className={`${styles.nameSection} ${styles.formField}`}>
              <div className={styles.formFieldItem}>
                <div className={styles.label}>
                  {LOGIN_PAGE_STRINGS.CONFIRM_PASSWORD}
                </div>
                <div className="">
                  <InputField
                    placeholder={
                      LOGIN_PAGE_STRINGS.CONFIRM_PASSWORD_PLACEHOLDER
                    }
                    type="password"
                  />
                </div>
              </div>
              {/* <!-- password constraints  --> */}
              <div className="password-constraint-container">
                <div className="contain-text">
                  {/* {{ stringConstants.PASSWORD_CONSTRIANTS }} */}
                </div>
                <div className="password-constraint">
                  <div className="icon">
                    <div className="dot"></div>
                  </div>

                  {/* <div>{{ constraint.label }}</div> */}
                </div>
              </div>
              {/* <!-- password constraints  --> */}
            </div>

            {/* <!-- confirn password --> */}

            {/* Check box condpition */}

            <div className={styles.formField}>
              <CheckboxButton label={"I accept the terms & conditions"} />
              {/* <!-- password constraints  --> */}
            </div>
            {/* Check box condition */}

            {/* Signup button */}

            <div className={styles.formField}>
              <Button
                label={LOGIN_PAGE_STRINGS.SIGNUP}
                large={true}
                handleClick={() => {
                  console.log("signup");
                }}
              />
            </div>

            {/* Sign up button */}

            <div className={styles.signup__signin}>
              {LOGIN_PAGE_STRINGS.ALREADY_USER}
              <span
                className={styles.link_primary}
                onClick={() => {
                  navigate(routeConfig.signin);
                }}
              >
                {LOGIN_PAGE_STRINGS.SIGNIN}
              </span>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

const SignUpForm = () => {
  return (
    <LoginBackground
      form={
        <>
          <SignUp />
        </>
      }
    ></LoginBackground>
  );
};

export default SignUpForm;