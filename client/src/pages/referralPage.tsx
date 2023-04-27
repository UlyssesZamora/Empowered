import styles from "../styles/referralPage.module.css"
const ReferralPage = () => {
    return (
        <>
        <div className={styles.pageContainer}>
          <div className={styles.nav}>
            <img src="images/img_empowerd1.png" className={styles.navImg} />
            <button className={styles.navBtn}> Join the Waitlist</button>
          </div>
          <div className={styles.midPageContainer}>
            <div className={styles.midPageContainerInner}>
              <div className={styles.topText}>
                <h4 className={styles.supportiveText}>Supportive</h4>
                <div className={styles.leftLine}></div>
    
                <h4 className={styles.trustedText}>Trusted</h4>
                <div className={styles.rightLine}></div>
    
                <h4 className={styles.inclusiveText}>Inclusive</h4>
              </div>
              <div className={styles.mainBodyContainer}>
                <div className={styles.mainBodyContainerInner}>
                  <div className={styles.textContainer}>
                    <h1 className={styles.empoweredTitle}>Empowered</h1>
                    <h3 className={styles.inspoText}>
                      a vetted community for women & allies Empowering opportunity
                    </h3>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageContainerInner}></div>
                    <div className={styles.ladyImgContainer}>
                      <img
                        src="images/img_screenshot20230222.png"
                        className={styles.ladyImg}
                      />
                    </div>
                    <div className={styles.roundedCircleContainer}>
                      <img
                        src="images/img_group7.svg"
                        className={styles.roundedCircle}
                      />
                      <div className={styles.medImgContainer}>
                        <img
                          src="images/img_screenshot20230222_124x129.png"
                          className={styles.medImg}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.topTextContainer}>
                    <h2 className={styles.logInText}>Welcome</h2>
                    <span className={styles.welcomeBack}>
                      To sign up, please enter your access code.
                    </span>
                  </div>
                  <div className={styles.userPassContainer}>
                    <div className={styles.userBackground}>
                      <input
                        type="text"
                        placeholder="Enter your code"
                        className={styles.userInput}
                      ></input>
                    </div>
                 
                    <span className={styles.forgotPass}>Don't have an access code? <br/>Join our waitlist</span>
                    <button className={styles.logInBtn}>
                      Get Access
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default ReferralPage;