import React from "react";
import styles from "./LoginBackground.module.scss";
import logo from  "../../assets/images/login/logo.svg"
import { LOGIN_PAGE_STRINGS } from "../../common/constants/stringConstants";
const LoginBackground = ({ form }: any) => {
    console.log("form",form)
  return (
    <>
      <section className={styles.login}>
        <div className={styles.login__logoSection}>
          <div className={styles.logo}>
            {/* <img src="assets/svg/login-icons/logo.svg" alt="logo"/>
            
            */}
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.getStarted}>
            <span>{LOGIN_PAGE_STRINGS.GET_STARTED} </span>
            <span className={styles.getStarted__line1}>{LOGIN_PAGE_STRINGS.GET_STARTED2}</span>
          </div>
        </div>
        <div className={styles.login__formSection}>
          {/* <ng-content></ng-content> */}
          {form}
        </div>
      </section>
    </>
  );
};

export default LoginBackground;
