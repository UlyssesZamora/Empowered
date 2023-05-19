import styles from "../styles/userSignUp.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "@fontsource/montserrat"
const SignUpPage = () => {
    return (
      <>
          <div className={styles.pageContainer}>
            {/* @ts-expect-error Server Component */} 
            <NavBar></NavBar>
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
   
                      <h1 className={styles.empoweredTitle}>Empowerd</h1>
                      <h3 className={styles.inspoText}>a vetted community for women & allies Empowering opportunity</h3>
       
                    </div>
                    <div className={styles.imageContainer}>
                      <div className={styles.imageContainerInner}></div>
                      <div className={styles.ladyImgContainer}>
                        <img src="images/img_screenshot20230222.png" className={styles.ladyImg}/>
                      </div>
                      <div className={styles.roundedCircleContainer}>
                        <img src="images/img_group7.svg" className={styles.roundedCircle}/>
                        <div className={styles.medImgContainer}>
                          <img src="images/img_screenshot20230222_124x129.png" className={styles.medImg}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputContainer}>
                    <div className={styles.topTextContainer}>
                      <h2 className={styles.logInText}>Create an Account</h2>
                      <span className={styles.welcomeBack}>Please enter your details</span>
                      <h5 className={styles.userTxt}>Email</h5>
                    </div>
                    <div className={styles.userPassContainer}>
                      <div className={styles.userBackground}>
                        <input type="text" placeholder="Enter your email" className={styles.userInput}></input>
                      </div>
                      <h5 className={styles.passTxt}>Password</h5>
                      <div className={styles.passBackground}>
                        <input type="password" placeholder="••••••••••" className={styles.passInput}></input>
                      </div>
                      <span className={styles.forgotPass}>Password must include:</span>
                      <ul className={styles.passRequis}>
                        <li>At least 8 characters</li>
                        <li>An uppercase character</li>
                        <li>A lowercase character</li>
                        <li>A number</li>
                        <li>A special character</li>
                      </ul>
                      <h5 className={styles.confirmPassText}>Confirm password</h5>
                      <div className={styles.confirmPassBackground}>
                        <input type="password" placeholder="••••••••••" className={styles.confirmPassInput}></input>
                      </div>
                      <button className={styles.logInBtn}>Create your account</button>
                      <span className={styles.waitlist}>By creating an account you agree to the Empowerd user agreement, privacy policy, and cookie policy </span>
                      <h6 className={styles.orTxt}>Or</h6>
                      <button className={styles.linkedin}>Sign up with Linkedin</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer></Footer>
          </div>
        </>
      );
    };

export default SignUpPage;
