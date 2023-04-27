import styles from "../styles/userSignUp.module.css";
import axios from "axios";
import React, { useState } from "react";
const UserSignUpCard = ({
  formData,
  setFormData,
  page,
  setPage,
}: {
  formData: any;
  setFormData: Function;
  page: any;
  setPage: any;
}) => {
  const handleSubmit = () => {
    if (formData.password === formData.confirmPassword) {
      axios
        .post("/api/userCreation", {
          userReferral: formData.referralCode,
          userFirstName: formData.firstName,
          userLastName: formData.lastName,
          userEmail: formData.email,
          userPassword: formData.password,
        })
        .then((res: { data: any }) => {
          console.log(res.data);
        })
        .catch((error) => {
          if (error.response.status === 400) {
            alert("USER ALREADY IN DATABASE");
          }
          console.log(error);
        });
    } else {
      alert("Passwords must match");
    }
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <div className={styles.topTextContainer}>
          <h2 className={styles.logInText}>Create an Account</h2>
          <span className={styles.welcomeBack}>Please enter your details</span>
          <h5 className={styles.userTxt}>Email</h5>
        </div>
        <div className={styles.userPassContainer}>
          <div className={styles.userBackground}>
            <input
              type="text"
              placeholder="Enter your email"
              className={styles.userInput}
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
            ></input>
          </div>
          <h5 className={styles.passTxt}>Password</h5>
          <div className={styles.passBackground}>
            <input
              type="password"
              placeholder="••••••••••"
              className={styles.passInput}
              value={formData.password}
              onChange={(event) =>
                setFormData({ ...formData, password: event.target.value })
              }
            ></input>
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
            <input
              type="password"
              placeholder="••••••••••"
              className={styles.confirmPassInput}
              value={formData.confirmPassword}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  confirmPassword: event.target.value,
                })
              }
            ></input>
          </div>
          <button className={styles.logInBtn} onClick={handleSubmit}>
            Create your account
          </button>
          <span className={styles.waitlist}>
            By creating an account you agree to the Empowerd user agreement,
            privacy policy, and cookie policy{" "}
          </span>
          <h6 className={styles.orTxt}>Or</h6>
          <button className={styles.linkedin}>Sign up with Linkedin</button>
        </div>
      </div>
    </>
  );
};

export default UserSignUpCard;
