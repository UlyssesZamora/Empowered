import styles from "../styles/loginPage.module.css";
import "@fontsource/montserrat";
import { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { AccountSelected } from "../accountSelection";
import { useGoogleLogin } from "@react-oauth/google";
import GoogleButton from "react-google-button";
import NavBar from "../components/NavBar";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    if (AccountSelected.currentLogin === 0) {
      axios
        .post("https://empowerd-backend-5j4ag.ondigitalocean.app/api/login", { user: userName, password })
        .then((res: any) => {
          if (res.status === 200) {
            localStorage.setItem("jwt", res.data);
            axios
              .get("/profileData", {
                headers: {
                  authorization: "Bearer: " + localStorage.getItem("jwt"),
                },
              })
              .then((res: any) => {
                const id = res.data[0].id;
                navigate(`/userprofile/${id}`);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post("/api/companylogin", { user: userName, password })
        .then((res: any) => {
          if (res.status === 200) {
            localStorage.setItem("jwt", res.data);
            axios
              .get("/companyProfileData", {
                headers: {
                  authorization: "Bearer: " + localStorage.getItem("jwt"),
                },
              })
              .then((res: any) => {
                const id = res.data[0].id;
                navigate(`/companyprofile/${id}`);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const sendToken = (at: string) => {
    axios
      .post("/auth", {
        at: at,
      })
      .then((results: any) => {
        if (results.status === 200) {
          localStorage.setItem("jwt", results.data);
          axios
            .get("/profileData", {
              headers: {
                authorization: "Bearer: " + localStorage.getItem("jwt"),
              },
            })
            .then((res: any) => {
              const id = res.data[0].id;
              console.log("Going to user profile");
              navigate(`/userprofile/${id}`);
            });
        } else if (results.status === 205) {
          console.log("STATUS CODE = 205");
          navigate("/create");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let at: string;
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      // needs to be passed out to /auth for storage and user info exchange
      at = tokenResponse.access_token;
      sendToken(at);
    },
  });

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
                      onChange={(e) => setUserName(e.target.value)}
                    ></input>
                  </div>
                  <h5 className={styles.passTxt}>Password</h5>
                  <div className={styles.passBackground}>
                    <input
                      type="password"
                      placeholder="••••••••••"
                      className={styles.passInput}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                  <span className={styles.forgotPass}>Forgot Password?</span>
                  <button className={styles.logInBtn} onClick={submitHandler}>
                    Sign in
                  </button>
                  <span className={styles.waitlist}>
                    Don't have an account? <a>Join our Waitlist</a>{" "}
                  </span>
                  <h6 className={styles.orTxt}>Or</h6>
                  <button className={styles.linkedin}>
                    Continue with Linkedin
                  </button>
                  <p className={styles.orTxt}>Or</p>
                  <GoogleButton
                    onClick={() => login()}
                    className={styles.google}
                  />
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

export default LoginPage;
