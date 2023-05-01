import a from "../styles/profilePicChange.module.css";
import styles from "../styles/loginPage.module.css";
import userProfile from "../styles/UserProfileStyle.module.css";
import userIcon from "../assets/user-01-svgrepo-com.svg";
import axios from "axios";
import { useEffect, useState, useRef, SetStateAction } from "react";
import { useParams, useLocation, useNavigate, Navigate } from "react-router-dom";
import InputBox from "./inputBox";

const ProfilePicChange = ({
  closeModal,
  userImage,
  userId,
  userBio,
  userFirstName,
  userLastName,
  userCompany,
  userLocation,
  skillList,
  interestList,
  valueList,
  userInterests,
  userValues,
  userFollowers
}: {
  closeModal: (arg: boolean) => void;
  userImage: string;
  userId: number;
  userBio: string;
  userFirstName: string;
  userLastName: string;
  userCompany: string;
  userLocation: string;
  skillList: any;
  interestList:any;
  valueList:any;
  userInterests:any;
  userValues:any;
  userFollowers:any;
}) => {
  const [firstName, setFirstName] = useState(""); // State for input value 1
  const [lastName, setLastName] = useState(""); // State for input value 2
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState(""); // State for input value 1
  const [location, setLocation] = useState(""); // State for input value 2
  const [value, setValue] = useState("");
  const [interestArr, setInterestArr] = useState(userInterests);
  const [valueArr, setValueArr] = useState(userValues)
  const navigate = useNavigate();

  const handleFirstNameChange = (value: string) => {
    setFirstName(value); // Update state with input value 1
  };

  const handleLastNameChange = (value: string) => {
    setLastName(value); // Update state with input value 1
  };

  const handlePositionChange = (value: string) => {
    setPosition(value); // Update state with input value 1
  };

  const handleCompanyChange = (value: string) => {
    setCompany(value); // Update state with input value 1
  };

  const handleLocationChange = (value: string) => {
    setLocation(value); // Update state with input value 1
  };

  const onChangeValue = (e: any) => {
    setValue(e.target.value);
  };

  const onSearch = (searchTerm: string) => {
    // console.log(searchTerm)
    setValue(searchTerm);

};

  const textareaRef = useRef<any>([]);
  const onProfilePhotoChange = () => {
    const input: any = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const imageDataUrl = reader.result;
        axios
          .put("https://goldfish-app-wb78d.ondigitalocean.app/updatePhoto", { userId: userId, userImage: imageDataUrl })
          .then((res: any) => {
            console.log(res);
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
        // Do something with the imageDataUrl, such as displaying it or uploading it to a server
      };
    };
    input.click();
  };

  const updateBioAndSkills = () => {
    console.log(textareaRef.current.value);
    axios
      .put("https://goldfish-app-wb78d.ondigitalocean.app/updateBioAndSkills", {
        userId: userId,
        userBio: textareaRef.current.value,
      })
      .then((res: any) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onDeletePhoto = () => {
    axios 
    .put("https://goldfish-app-wb78d.ondigitalocean.app/deletePhoto", {userId:userId})
    .then((res:any) => {
        console.log(res);
        window.location.reload();
    })
    .catch((error) => {
        console.log(error);
    })
  }

  const updateIntro = () => {
    console.log(firstName, lastName, position, company, location);
    axios
      .put("https://goldfish-app-wb78d.ondigitalocean.app/editIntro", {
        userId: userId,
        userFirstName: firstName,
        userLastName: lastName,
        userCompanyName: company,
        userLocation: location,
      })
      .then((res: any) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInterestUpdate = () => {
    axios
    .post("https://goldfish-app-wb78d.ondigitalocean.app/addUserInterest", {userId:userId, userInterests: JSON.stringify(interestArr)})
    .then((res:any) => {
        console.log(res)
        window.location.reload()
    })
    .catch((error) => {
        console.log(error)
    })
  };

  const handleAddInterest = () => {
    const selectedValue = interestList.find(
      (interest: any) => interest.interest.toLowerCase() === value.toLowerCase()
    );

    if (selectedValue) {
      const newInterest = {
        id: selectedValue.id,
        interest: selectedValue.interest,
      };
      setInterestArr((prevInterests:any) => {
        return [...prevInterests, newInterest];
      });

      setValue("")
    }

  };

  const handleAddValue = () => {
    const selectedValue = valueList.find(
        (values: any) => values.valueList.toLowerCase() === value.toLowerCase()
      );
  
      if (selectedValue) {
        const newValue = {
          id: selectedValue.id,
          valueList: selectedValue.valueList,
        };
        setValueArr((prevValues:any) => {
          return [...prevValues, newValue];
        });
  
        setValue("")
      }
  }

  const handleRemoveValue = (valueId:any) => {
    setValueArr((prevValue:any) => {
        const updatedValues = prevValue.filter((value:any) => value.id !== valueId)
        return updatedValues;
    })
  }

  const handleRemoveInterest = (interestId:any) => {
    setInterestArr((prevInterest:any) => {
        const updatedInterests = prevInterest.filter((interest:any) => interest.id !== interestId)
        return updatedInterests;
    })
  }
  
  const handleValueUpdate = () => {
    axios
    .post("https://goldfish-app-wb78d.ondigitalocean.app/addUserValues", {userId:userId, userValues: JSON.stringify(valueArr)})
    .then((res:any) => {
        console.log(res)
        window.location.reload()
    })
    .catch((error) => {
        console.log(error)
    })
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);


  return (
    <div className={a.modalBackground}>
      {userBio === "userProfilePic" && (
        <div>
          <div className={a.modalContainer}>
            <div className={a.titleCloseBtn}>
              <div style={{ marginRight: "400px" }}>
                Profile Pic <br /> JPG or PNG required
              </div>
              <button
                onClick={() => {
                  closeModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className={a.body}>
              <img className={a.profileCardLogoAvatar} src={userImage} />
            </div>

            <div style={{ display: "flex", marginLeft: "30px" }}>
              <div>
                <a href="#" onClick={onProfilePhotoChange}>
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src="images/camera.png"
                  />
                </a>

                <br />
                <p style={{ marginTop: "-5px", marginLeft: "-20px" }}>
                  Upload Photo
                </p>
              </div>

              <div style={{ marginLeft: "420px" }}>
                <a href="#" onClick={onDeletePhoto}>
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src="images/trash.png"
                  />
                </a>

                <br />
                <p style={{ marginTop: "-5px", marginLeft: "-25px" }}>
                  Delete Photo
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {userBio === "userBio" && (
        <div>
          <div className={a.modalContainer} style={{ height: "550px" }}>
            <div className={a.titleCloseBtn}>
              <p style={{ flex: "auto" }}>Edit Bio/Skills</p>
              <button
                onClick={() => {
                  closeModal(false);
                }}
              >
                X
              </button>
            </div>
            <div style={{ backgroundColor: "black", height: "1px" }}></div>{" "}
            <br />
            <p style={{ fontFamily: "Montserrat" }}>Bio</p>
            <textarea
              style={{ height: "150px", whiteSpace: "pre-wrap" }}
              ref={textareaRef}
            ></textarea>
            <button
              className={styles.logInBtn}
              style={{
                width: "20%",
                marginLeft: "auto",
                minWidth: "auto",
                marginTop: "130px",
              }}
              onClick={updateBioAndSkills}
            >
              Update
            </button>
          </div>
        </div>
      )}

      {userBio === "fullEdit" && (
        <div>
          <div className={a.modalContainer} style={{ height: "600px" }}>
            <div className={a.titleCloseBtn}>
              <p style={{ flex: "auto" }}>Edit intro</p>
              <button
                onClick={() => {
                  closeModal(false);
                }}
              >
                X
              </button>
            </div>
            <div style={{ backgroundColor: "black", height: "1px" }}></div>{" "}
            <p style={{ fontFamily: "Montserrat" }}>Basic Info</p>
            <div style={{ marginTop: "-15px" }}>
              <div style={{ display: "flex" }}>
                <div>
                  <p style={{ fontFamily: "Montserrat", marginBottom: "10px" }}>
                    First Name:
                  </p>
                  <InputBox
                    defaultValue={userFirstName}
                    placeHolder="First Name"
                    onInputChange={handleFirstNameChange}
                  />{" "}
                  &nbsp;&nbsp;
                </div>
                <br />
                <div>
                  <p style={{ fontFamily: "Montserrat", marginBottom: "10px" }}>
                    Last Name:
                  </p>
                  <InputBox
                    defaultValue={userLastName}
                    placeHolder="Last Name"
                    onInputChange={handleLastNameChange}
                  />
                </div>
              </div>
              <br />
              <div style={{ marginTop: "-40px" }}>
                <p style={{ fontFamily: "Montserrat" }}>Pronouns:</p>
                <select
                  name="pronouns"
                  defaultValue=""
                  style={{
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid #ccc", // Added border
                    outline: "none",
                    backgroundColor: "#fff", // Changed background color to white
                    color: "#333",
                    fontSize: "16px",
                    width: "49.7%",
                    marginTop: "-20px",
                  }}
                >
                  <option disabled value="">
                    Select Pronouns:
                  </option>
                  <option>He/Him</option>
                  <option>She/Her</option>
                  <option>They/Them</option>
                  <option>Other/Prefer Not to Say</option>
                </select>
              </div>
              <p style={{ fontFamily: "Montserrat", marginBottom: "0" }}>
                Current Role
              </p>
              <div style={{ display: "flex" }}>
                <div>
                  <p style={{ fontFamily: "Montserrat", marginBottom: "10px" }}>
                    Position:
                  </p>
                  <InputBox
                    defaultValue=""
                    placeHolder="Position"
                    onInputChange={handlePositionChange}
                  />
                  &nbsp;&nbsp;
                </div>
                <br />
                <div>
                  <p style={{ fontFamily: "Montserrat", marginBottom: "10px" }}>
                    Company:
                  </p>
                  <InputBox
                    defaultValue={userCompany}
                    placeHolder="Company"
                    onInputChange={handleCompanyChange}
                  />
                </div>
              </div>
              <br />
              <div style={{ marginTop: "-20px" }}>
                <p style={{ fontFamily: "Montserrat", marginBottom: "10px" }}>
                  Location:
                </p>
                <InputBox
                  defaultValue={userLocation}
                  placeHolder="Location"
                  onInputChange={handleLocationChange}
                />
              </div>
            </div>
            <button
              className={styles.logInBtn}
              style={{
                width: "30%",
                marginLeft: "auto",
                marginRight: "auto",
                minWidth: "auto",
                marginBottom: "-100px",
              }}
              onClick={updateIntro}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}

      {userBio === "interests" && (
        <div>
          <div className={a.modalContainer} style={{ height: "550px" }}>
            <div className={a.titleCloseBtn}>
              <p style={{ flex: "auto" }}>Interests</p>
              <button
                onClick={() => {
                  closeModal(false);
                }}
              >
                X
              </button>
            </div>
            <div style={{ backgroundColor: "black", height: "1px" }}></div>{" "}
            <div style={{display:'flex', flexWrap:'wrap'}}>
            {interestArr.map((interest:any) => (
                            <div className={userProfile.tag} style={{cursor:'pointer'}} onClick={() => {handleRemoveInterest(interest.id)}}>
                                {interest.interest}
                            </div>
                        ))}
                </div>
            <p style={{fontFamily:'Montserrat'}}>Add up to 5 interests</p>
                
                <div>
                    <div>
                        <input style={{width:'100%', height:'30px'}} type='text' value={value} onChange={onChangeValue}></input>
                    </div>
                    
                    <div className="dropdown" style={{display:'flex', flexWrap:'wrap'}}>
                        {interestList
                        .filter((interest:any) => {
                            const searchTerm = value.toLowerCase()
                            const interestName = interest.interest.toLowerCase();
                            const isSelected = interestArr.some((userInterest:any) => userInterest.id === interest.id)
                            return searchTerm && interestName.startsWith(searchTerm) && !isSelected
                        })
                        .map((interest:any) => (
                            <div className={userProfile.tag} style={{cursor:'pointer'}} onClick={() => {onSearch(interest.interest); handleAddInterest();}}>
                                {interest.interest}
                            </div>
                        ))}
                    </div>
                </div>
            <button
              className={styles.logInBtn}
              style={{
                width: "20%",
                marginLeft: "auto",
                minWidth: "auto",
                marginTop: "130px",
              }}
              onClick={handleInterestUpdate}
            >
              Update
            </button>
          </div>
        </div>
      )}

        {userBio === "values" && (
        <div>
          <div className={a.modalContainer} style={{ height: "550px" }}>
            <div className={a.titleCloseBtn}>
              <p style={{ flex: "auto" }}>Values</p>
              <button
                onClick={() => {
                  closeModal(false);
                }}
              >
                X
              </button>
            </div>
            <div style={{ backgroundColor: "black", height: "1px" }}></div>{" "}
            <div style={{display:'flex', flexWrap:'wrap'}}>
            {valueArr.map((values:any) => (
                            <div className={userProfile.tag} style={{cursor:'pointer'}} onClick={() => {handleRemoveValue(values.id)}}>
                                {values.valueList}
                            </div>
                        ))}
                </div>
            <p style={{fontFamily:'Montserrat'}}>Add up to 5 Values</p>
                
                <div>
                    <div>
                        <input style={{width:'100%', height:'30px'}} type='text' value={value} onChange={onChangeValue}></input>
                    </div>
                    
                    <div className="dropdown" style={{display:'flex', flexWrap:'wrap'}}>
                        {valueList
                        .filter((values:any) => {
                            const searchTerm = value.toLowerCase()
                            const valueName = values.valueList.toLowerCase();
                            const isSelected = valueArr.some((userValue:any) => userValue.id === values.id)
                            return searchTerm && valueName.startsWith(searchTerm) && !isSelected
                        })
                        .map((values:any) => (
                            <div className={userProfile.tag} style={{cursor:'pointer'}} onClick={() => {onSearch(values.valueList); handleAddValue();}}>
                                {values.valueList}
                            </div>
                        ))}
                    </div>
                </div>
            <button
              className={styles.logInBtn}
              style={{
                width: "20%",
                marginLeft: "auto",
                minWidth: "auto",
                marginTop: "130px",
              }}
              onClick={handleValueUpdate}
            >
              Update

            </button>
          </div>
        </div>
      )}

      {userBio === 'followerCount' && (
        <div>
            <div className={a.modalContainer} style={{width:'495px', height:'550px'}}>
        <div className={a.titleCloseBtn}>
          <div style={{marginRight:'343px'}}>
            Followers
          </div>
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>

        <div style={{ backgroundColor: "black", height: "1px", marginLeft:'-24px', marginRight:'-24px' }}></div>
        <p style={{fontFamily:'Montserrat'}}>Follower List</p>

        {userFollowers.map((follower:any) => (
        <>
            <div style={{display:'flex', marginTop:'5px', marginBottom:'5px'}}>
                <img src={follower.userProfilePicture ? follower.userProfilePicture: userIcon} style={{width:'13%', borderRadius:'50%'}} alt="user icon"/>
                <div style={{marginLeft:'10px'}}>
                    <p style={{fontFamily:'Montserrat', cursor:'pointer'}} onClick={() => {navigate(`/userprofile/${follower.id}`); window.location.reload()}}>{follower.userFirstName + " "+ follower.userLastName}</p>
                    <p style={{fontFamily:'Montserrat', fontSize:'10px', marginTop:'-15px'}}>{follower.userCompanyName}</p>
                </div>
            </div>
            <div style={{ backgroundColor: "black", height: "1px", marginLeft:'-24px', marginRight:'-24px' }}></div>
        </>
        ))}

      </div>
        </div>
      )}

      {/* <div className={a.modalContainer}>
            <div className={a.titleCloseBtn}>
              <div style={{marginRight:'400px'}}>
                  Profile Pic <br/> JPG or PNG required
              </div>
              <button
                onClick={() => {
                  closeModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className={a.body}>
              <img className={a.profileCardLogoAvatar} src={userImage}/>
            </div>
  
            <div style={{display:'flex', marginLeft:'30px'}}>
              <div>
                  <a href="#" onClick={onProfilePhotoChange}>
                      <img style={{width:'30px', height:'30px'}} src="../src/assets/camera.png"/> 
                  </a>
                  
                  <br/> 
                  <p style={{marginTop:'-5px', marginLeft:'-20px'}}>Upload Photo</p>
              </div>
  
              <div style={{marginLeft:'420px'}}>
                  <a href="#">
                      <img style={{width:'30px', height:'30px'}} src="../src/assets/trash.png"/> 
                  </a>
                  
                  <br/> 
                  <p style={{marginTop:'-5px', marginLeft:'-25px'}}>Delete Photo</p>
              </div>
  
            </div>
          </div> */}
    </div>
  );
};

export default ProfilePicChange;
