import UserProfileStyle from "../styles/UserProfileStyle.module.css";
import styles from "../styles/loginPage.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ProfilePicChange from "../components/ProfilePicChange";
import userIcon from "../assets/user-01-svgrepo-com.svg";
import jwtDecode from "jwt-decode";
import Popup from 'reactjs-popup';
// import NavBar from "../components/NavBar";

let owner: boolean = false;

const UserProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any[]>([]);
  const [userSkills, setUserSkills] = useState<any[]>([]);
  const [userValues, setUserValues] = useState<any[]>([]);
  const [userInterests, setUserInterests] = useState<any[]>([]);
  const [userReviews, setUserReviews] = useState<any[]>([]);
  const [skillList, setSkillList] = useState<any[]>([]);
  const [interestList, setInterestList] = useState<any[]>([]);
  const [valueList, setValueList] = useState<any[]>([]);
  const [modalOpen, setOpenModal] = useState(false);
  const [userBio, setUserBio] = useState("");
  const [isFollowing, setIsFollowing] = useState(false);
  const [testModal, setTestModal] = useState(false);
  const { id } = useParams();

  if (localStorage.getItem("jwt") === null) {
    navigate("/");
  }
  let lol: any = jwtDecode(localStorage.getItem("jwt")!);

  if (id == lol.key && lol.isUser == true) {
    // id is string and key is number, === doesn't work
    owner = true;
  }

  const getData = async (id: any) => {
    axios
      .get(`https://goldfish-app-wb78d.ondigitalocean.app/profileId/${id}`)
      .then((res: any) => {
        setUserData(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getReviews = async () => {
    axios
      .get(`https://goldfish-app-wb78d.ondigitalocean.app/reviews?userId=${id}`)
      .then((res: any) => {
        setUserReviews(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserSkills = async () => {
    axios
      .get(`https://goldfish-app-wb78d.ondigitalocean.app/getSkills/${id}`)
      .then((res: any) => {
        setUserSkills(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserInterests = async () => {
    axios
      .get(`https://goldfish-app-wb78d.ondigitalocean.app/getInterests/${id}`)
      .then((res: any) => {
        setUserInterests(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserValues = async () => {
    axios
      .get(`https://goldfish-app-wb78d.ondigitalocean.app/getValues/${id}`)
      .then((res: any) => {
        setUserValues(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllSkills = async () => {
    axios
      .get("https://goldfish-app-wb78d.ondigitalocean.app/getAllSkills")
      .then((res: any) => {
        setSkillList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllInterests = async () => {
    axios
      .get("https://goldfish-app-wb78d.ondigitalocean.app/getAllInterests")
      .then((res: any) => {
        setInterestList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllValues = async () => {
    axios
      .get("https://goldfish-app-wb78d.ondigitalocean.app/getAllValues")
      .then((res: any) => {
        setValueList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitConRequest = async () => {
    axios
      .post("https://goldfish-app-wb78d.ondigitalocean.app/newConnection", {
        followerId: lol.key,
        personWhoGotFollowedId: id,
      })
      .then((res: any) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getFollowing = async () => {
    axios
      .get(
        "https://goldfish-app-wb78d.ondigitalocean.app/checkFollow?followerId=" + lol.key + "&personWhoGotFollowedId=" + id
      )
      .then((res: any) => {
        setIsFollowing(res.data.isFollowing);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [date, setDate] = useState(new Date());
  // const location = useLocation();

  useEffect(() => {
    getData(id);
    getReviews();
    getUserSkills();
    getUserValues();
    getUserInterests();
    getAllSkills();
    getAllInterests();
    getAllValues();
    getFollowing();
  }, [id]);

  console.log(isFollowing);

  if (!userData) {
    return <p>Loading user data...</p>;
  }

  // console.log(userInterests);

  return (
    <>
      <div className={UserProfileStyle.pageBackground}>
        {/* @ts-expect-error Server Component */}
        <NavBar></NavBar>
        {modalOpen && (
          <ProfilePicChange
            closeModal={setOpenModal}
            /* @ts-expect-error Server Component */
            userImage={userData.userProfilePicture}
            /* @ts-expect-error Server Component */
            userId={userData.id}
            userBio={userBio}
            /* @ts-expect-error Server Component */
            userFirstName={userData.userFirstName}
            /* @ts-expect-error Server Component */
            userLastName={userData.userLastName}
            /* @ts-expect-error Server Component */
            userCompany={userData.userCompanyName}
            /* @ts-expect-error Server Component */
            userLocation={userData.userLocation}
            skillList={skillList}
            interestList={interestList}
            valueList={valueList}
            userInterests={userInterests}
            userValues={userValues}
          />
        )}


        {/* body */}
        <div className={UserProfileStyle.container}>
          {/* profile image card */}
          <div className={UserProfileStyle.containerRow}>
            <div className={UserProfileStyle.profileCard}>
              <div className={UserProfileStyle.profileCardTop}>
                {owner && (
                  <>
                    <img
                      className={UserProfileStyle.editIcon}
                      src="images/edit.png"
                    />
                  </>
                )}

                {owner ? (
                  <a
                    href="#"
                    onClick={() => {
                      setOpenModal(true);
                      setUserBio("userProfilePic");
                    }}
                  >
                    <img
                      className={UserProfileStyle.profileCardLogoAvatar}
                      /* @ts-expect-error Server Component */
                      src={userData.userProfilePicture}
                    />
                  </a>
                ) : (
                  <img
                    className={UserProfileStyle.profileCardLogoAvatar}
                    /* @ts-expect-error Server Component */
                    src={userData.userProfilePicture}
                  />
                )}

                <p className={UserProfileStyle.profileCardAccountName}>
                  {/* @ts-expect-error Server Component */}
                  {userData.userFirstName} {""} {userData.userLastName}
                </p>

                <p className={UserProfileStyle.profileCardPositionTitle}>
                  {/* @ts-expect-error Server Component */}
                  {userData.userCompanyName}
                </p>
                <p className={UserProfileStyle.profileCardLocation}>
                  {/* @ts-expect-error Server Component */}
                  {userData.userLocation}
                </p>

                <p className={UserProfileStyle.profileCardVetted} style={{marginTop:'300px'}}>
                  10 connections
                </p>
                <p className={UserProfileStyle.profileCardVetted}>
                  Vetted 2023
                </p>
                {!owner && (
                  <div className={UserProfileStyle.profileCardVetted}>
                    {isFollowing ? (
                      <button
                        className={styles.logInBtn}
                        style={{ marginTop: "50px", minWidth: "150px" }}
                        onClick={() => submitConRequest()}
                      >
                        Unfollow?
                      </button>
                    ) : (
                      <div>
                        <button
                          className={styles.logInBtn}
                          style={{ marginTop: "50px", minWidth: "150px" }}
                          onClick={() => submitConRequest()}
                        >
                          Follow?
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {owner && (
                <>
                  <a
                    href="#"
                    onClick={() => {
                      setOpenModal(true);
                      setUserBio("fullEdit");
                    }}
                  >
                    <img
                      className={UserProfileStyle.editIcon}
                      src="images/edit.png"
                    />
                  </a>
                </>
              )}
            </div>
          </div>

          <div className={UserProfileStyle.secounContainerRow}>
            <div className={UserProfileStyle.leftcontainer}>
              {/* about card */}
              <div className={UserProfileStyle.leftCard}>
                {owner && (
                  <>
                    <a
                      href="#"
                      onClick={() => {
                        setOpenModal(true);
                        setUserBio("userBio");
                      }}
                    >
                      <img
                        className={UserProfileStyle.editIcon}
                        src="images/edit.png"
                      />
                    </a>
                  </>
                )}

                <h2 className={UserProfileStyle.cardHeading}>About Me</h2>
                <div className={UserProfileStyle.textcontiner}>
                  <p className={UserProfileStyle.aboutMeCardtext}>
                    {/* @ts-expect-error Server Component */}
                    {userData.userAbout}
                    {/* neque convallis a cras semper auctor neque vitae tempus

                      quam pellentesque nec nam aliquam sem et tortor consequat
                      id porta nibh venenatis cras sed felis eget velit aliquet
                      sagittis id consectetur purus ut faucibus pulvinar
                      elementum integer enim neque volutpat ac tincidunt vitae
                      semper quis */}
                  </p>
                </div>
                <div
                  className={UserProfileStyle.tagContiner}
                  style={{ flexWrap: "wrap" }}
                >
                  {/* INSERT TOP VALS HERE */}
                  {userSkills.map((skill) => (
                    <div
                      key={skill.id}
                      className={UserProfileStyle.tag}
                      style={{
                        margin: "0.5rem",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {skill.skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* My Empowerd 360º */}
              <div className={UserProfileStyle.leftCard}>

                <h2 className={UserProfileStyle.cardHeading}>
                  My Empowerd 360º
                </h2>

                <div style={{ display: "flex" }}>
                  <h3 className={UserProfileStyle.ratingLable}>Overall</h3>

                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background: "#385846",
                      marginLeft: "60px",
                      marginTop: "18px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background: "#385846",
                      marginLeft: "5px",
                      marginTop: "18px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background: "#385846",
                      marginLeft: "5px",
                      marginTop: "18px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background: "#385846",
                      marginLeft: "5px",
                      marginTop: "18px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background:
                        "linear-gradient(to right,#385846 50%, #858585 50%)",
                      marginLeft: "5px",
                      marginTop: "18px",
                    }}
                  ></div>
                  <p
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      marginTop: "18px",
                      marginLeft: "15px",
                    }}
                  >
                    4.5
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  <h3 className={UserProfileStyle.ratingLable}>Attitude</h3>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background: "#385846",
                      marginLeft: "48px",
                      marginTop: "18px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background: "#385846",
                      marginLeft: "5px",
                      marginTop: "18px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background: "#385846",
                      marginLeft: "5px",
                      marginTop: "18px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background: "#385846",
                      marginLeft: "5px",
                      marginTop: "18px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background: "#385846",
                      marginLeft: "5px",
                      marginTop: "18px",
                    }}
                  ></div>
                  <p
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      marginTop: "18px",
                      marginLeft: "15px",
                    }}
                  >
                    5.0
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  <h3 className={UserProfileStyle.ratingLable}>Work Ethics</h3>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background: "#385846",
                      marginLeft: "15px",
                      marginTop: "18px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background: "#385846",
                      marginLeft: "5px",
                      marginTop: "18px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background: "#385846",
                      marginLeft: "5px",
                      marginTop: "18px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background: "#385846",
                      marginLeft: "5px",
                      marginTop: "18px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background: "#858585",
                      marginLeft: "5px",
                      marginTop: "18px",
                    }}
                  ></div>
                  <p
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      marginTop: "18px",
                      marginLeft: "15px",
                    }}
                  >
                    4.0
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  <h3 className={UserProfileStyle.ratingLable}>Team player</h3>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background: "#385846",
                      marginLeft: "15px",
                      marginTop: "18px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background: "#385846",
                      marginLeft: "5px",
                      marginTop: "18px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background: "#385846",
                      marginLeft: "5px",
                      marginTop: "18px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background: "#385846",
                      marginLeft: "5px",
                      marginTop: "18px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background:
                        "linear-gradient(to right,#385846 50%, #858585 50%)",
                      marginLeft: "5px",
                      marginTop: "18px",
                    }}
                  ></div>
                  <p
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      marginTop: "18px",
                      marginLeft: "15px",
                    }}
                  >
                    4.5
                  </p>
                </div>
              </div>

              {/* Vetted score */}
              <div className={UserProfileStyle.leftCard}>

                <p className={UserProfileStyle.cardHeading}>Vetted score</p>

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div
                    style={{
                      width: "140px",
                      height: "140px",
                      borderRadius: "90px",
                      background: "#385846",
                      marginLeft: "139px",
                      marginBottom: "94px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: "39px",
                        marginTop: "45px",
                        marginLeft: "40px",
                        color: "white",
                      }}
                    >
                      5.0
                    </p>
                    <p
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: "16px",
                        marginTop: "70px",
                        marginLeft: "35px",
                      }}
                    >
                      Attitude
                    </p>
                  </div>

                  <div
                    style={{
                      width: "140px",
                      height: "140px",
                      borderRadius: "50px",
                      background: "rgba(56, 88, 70, 0.7)",
                      marginLeft: "139px",
                      marginBottom: "94px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: "39px",
                        marginTop: "45px",
                        marginLeft: "40px",
                        color: "white",
                      }}
                    >
                      4.0
                    </p>
                    <p
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: "16px",
                        marginTop: "70px",
                        marginLeft: "15px",
                      }}
                    >
                      Dependability
                    </p>
                  </div>

                  <div
                    style={{
                      width: "140px",
                      height: "140px",
                      borderRadius: "63px",
                      background: "rgba(56, 88, 70, 0.9)",
                      marginLeft: "139px",
                      marginBottom: "94px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: "39px",
                        marginTop: "45px",
                        marginLeft: "40px",
                        color: "white",
                      }}
                    >
                      4.5
                    </p>
                    <p
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: "16px",
                        marginTop: "70px",
                        marginLeft: "10px",
                      }}
                    >
                      Professionalism
                    </p>
                  </div>
                </div>
              </div>

              {/* Vetted Reviews */}
              <div className={UserProfileStyle.leftCard}>
                {!owner && (
                  <>
                    <img
                      className={UserProfileStyle.editIcon}
                      src="images/edit.png"
                    />
                  </>
                )}

                <p className={UserProfileStyle.cardHeading}>Vetted Reviews</p>

                {/* review card */}
                {userReviews && (
                  <div style={{ display: "flex" }}>
                    {userReviews.map((review: any, index: any) => (
                      <div className={UserProfileStyle.reviewCard} key={index}>
                        <div className={UserProfileStyle.reviewCardTop}>
                          <img
                            className={UserProfileStyle.reviewCardAvatar}
                            src={review.userProfilePicture ? review.userProfilePicture : userIcon}
                          />
                          <p className={UserProfileStyle.reviewCardName}>
                            {review.userFirstName + " " + review.userLastName}
                          </p>
                        </div>
                        <p className={UserProfileStyle.review}>
                          {review.vettedReviewDescription}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* rightContainer */}
            <div className={UserProfileStyle.rightContainer}>
              <div className={UserProfileStyle.rightCard}>
                {owner && (
                  <>
                    <a href="#" onClick={() => setTestModal(true)}>
                        <img
                        className={UserProfileStyle.editIcon}
                        src="images/edit.png"
                        />
                    </a>
                  </>
                )}

                {/* My links */}
                <p className={UserProfileStyle.rightCardHeading}>My links</p>
                <div className={UserProfileStyle.smallContainer}>
                  <div className={UserProfileStyle.rightTag}>Link</div>
                  <div className={UserProfileStyle.rightTag}>Link</div>
                </div>
              </div>

              {/* Attribute tags */}

              <div className={UserProfileStyle.rightCard}>
                {owner && (
                  <>
                    <a
                      href="#"
                      onClick={() => {
                        setOpenModal(true);
                        setUserBio("interests");
                      }}
                    >
                      <img
                        className={UserProfileStyle.editIcon}
                        src="images/edit.png"
                      />
                    </a>
                  </>
                )}

                <p className={UserProfileStyle.rightCardHeading}>Interests</p>
                <div className={UserProfileStyle.smallContainer}>
                  {userInterests.map((interest) => (
                    <div
                      key={interest.id}
                      className={UserProfileStyle.tag}
                      style={{
                        margin: "0.5rem",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {interest.interest}
                    </div>
                  ))}
                </div>
              </div>

              {/* Communities */}
              <div className={UserProfileStyle.rightCard}>
                {owner && (
                  <>
                    <a
                      href="#"
                      onClick={() => {
                        setOpenModal(true);
                        setUserBio("values");
                      }}
                    >
                      <img
                        className={UserProfileStyle.editIcon}
                        src="images/edit.png"
                      />
                    </a>
                  </>
                )}

                <p className={UserProfileStyle.rightCardHeading}>Values</p>
                <div className={UserProfileStyle.smallContainer}>
                  {userValues.map((value) => (
                    <div
                      key={value.id}
                      className={UserProfileStyle.tag}
                      style={{
                        margin: "0.5rem",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {value.valueList}
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendar */}
              <div className={UserProfileStyle.rightCard}>
                {owner && (
                  <>
                    <img
                      className={UserProfileStyle.editIcon}
                      src="images/edit.png"
                    />
                  </>
                )}

                <p className={UserProfileStyle.rightCardHeading}>Calendar</p>
                <div className={UserProfileStyle.calanderCard}>
                  <Calendar />
                </div>

                <div className="text-center">
                  Today's date: {date.toDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <Footer></Footer>
      </div>
    </>
  );
};

export default UserProfile;
