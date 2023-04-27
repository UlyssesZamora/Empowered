import styles from "../styles/loginPage.module.css";
const LogInCard = () => {
  return (
    <>
      <div className={styles.inputContainer}>
        <div className={styles.topTextContainer}>
          <h2 className={styles.logInText}>Log in</h2>
          <span className={styles.welcomeBack}>
            Welcome back! Please enter your details
          </span>
          <h5 className={styles.userTxt}>Username</h5>
        </div>
        <div className={styles.userPassContainer}>
          <div className={styles.userBackground}>
            <input
              type="text"
              placeholder="Enter your username"
              className={styles.userInput}
              //   onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
          <h5 className={styles.passTxt}>Password</h5>
          <div className={styles.passBackground}>
            <input
              type="password"
              placeholder="••••••••••"
              className={styles.passInput}
              //   onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <span className={styles.forgotPass}>Forgot Password?</span>
          <button className={styles.logInBtn} /* onClick={submitHandler} */>
            Sign in
          </button>
          <span className={styles.waitlist}>
            Don't have an account? <a>Join our Waitlist</a>{" "}
          </span>
          <h6 className={styles.orTxt}>Or</h6>
          <button className={styles.linkedin}>Continue with Linkedin</button>
        </div>
      </div>
    </>
  );
};

export default LogInCard;
