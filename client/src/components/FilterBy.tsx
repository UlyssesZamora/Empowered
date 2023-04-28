// // import React, { useState } from "react";
// import React, { useState,useEffect, useRef, SetStateAction } from "react";
// import CoffeeChatStyle from "../styles/CoffeeChatStyle.module.css";
// import styles from "../styles/FilterByStyle.module.css";
// import InputBox from "./inputBox";
// import axios from "axios";


// interface ModalProps {
//   isOpen2: boolean;
//   onClose2: () => void;
//   children?: React.ReactNode;
// }

// const FilterBy: React.FC<ModalProps> = ({ isOpen2, onClose2, children}) => {
// console.log("Modal rendered");

//   const userInterests: any[] | (() => any[]) = [];
//   const [isVisible, setIsVisible] = useState<boolean>(isOpen2);
//   const [interestArr, setInterestArr] = useState(userInterests);
//   const [value, setValue] = useState("");
//   const [interestList, setInterestList] = useState<any[]>([]);

//   const handleClose = () => {
//     setIsVisible(false);
//     onClose2();
//   };

//   const getAllInterests = async () => {
//     axios
//       .get("/getAllInterests")
//       .then((res: any) => {
//         setInterestList(res.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };


//   useEffect(() => {
//     getAllInterests();
//   });


//   return isOpen2 ? (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modal}>
//       <div className={styles.modalContainer}>

//         <div className={styles.modalHeadingContainer}>

//             <div className={styles.modalHeading}> 
//             Tea Filters
//             </div>
//         <button className={styles.closeButton} onClick={handleClose}>
//           &times;
//         </button>
//         </div>
//         <div className={styles.modalFilterContainer}>
//         Skills

//         <br></br>
//         <input
//           type="text"
//           placeholder=""
//           className={CoffeeChatStyle.searchFilter}
//         />
//         </div>

//         {interestList.map((interest) => (
//                     <div
//                       key={interest.id}
//                       className={CoffeeChatStyle.rightTag}
//                     >
//                       {interest.interest}
//                     </div>
//                   ))}
//         <div className={styles.content}>{children}</div>


//       </div>


//       </div>
//     </div>
//   ) : null;
// };

// export default FilterBy;



/// THIS CODE WORKS SPACE



import React, { useState, useEffect } from "react";
import CoffeeChatStyle from "../styles/CoffeeChatStyle.module.css";
import styles from "../styles/FilterByStyle.module.css";
import axios from "axios";

interface ModalProps {
  isOpen2: boolean;
  onClose2: () => void;
  children?: React.ReactNode;
}

const FilterBy: React.FC<ModalProps> = ({ isOpen2, onClose2, children }) => {
  console.log("Modal rendered");

  const [isVisible, setIsVisible] = useState<boolean>(isOpen2);

//   const [value, setValue] = useState<string>("");
  const [interestValue, setInterestValue] = useState<string>("");
  const [skillValue, setSkillValue] = useState<string>("");
  const [valueValue, setValueValue] = useState<string>("");  

  const [interestList, setInterestList] = useState<any[]>([]);
  const [skillList, setSkillList] = useState<any[]>([]);
  const [valueList, setValueList] = useState<any[]>([]);

  const [filteredSkillList, setFilteredSkillList] = useState<any[]>([]);
  const [filteredInterestList, setFilteredInterestList] = useState<any[]>([]);

  const [skillArr, setSkillArr] = useState<string[]>([]);
  const [interestArr, setInterestArr] = useState<string[]>([]);
  const [valueArr, setValueArr] = useState<string[]>([]);





  const handleClose = () => {
    setIsVisible(false);
    onClose2();
  };

  const getAllSkills = async () => {
    try {
      const res = await axios.get("https://goldfish-app-wb78d.ondigitalocean.app/getAllSkills");
      setSkillList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllInterests = async () => {
    try {
      const res = await axios.get("https://goldfish-app-wb78d.ondigitalocean.app/getAllInterests");
      setInterestList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllValues = async () => {
    try {
      const res = await axios.get("https://goldfish-app-wb78d.ondigitalocean.app/getAllValues");
      setInterestList(res.data);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    getAllInterests();
  }, []);

  useEffect(() => {
    getAllSkills();
  }, []);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const interestValue = event.target.value.toLowerCase();
    const filteredList = interestList.filter((interest) =>
      interest.interest.toLowerCase().includes(interestValue )
    );
    setFilteredInterestList(filteredList);
    setInterestValue(interestValue);
  };

  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const skillValue = event.target.value.toLowerCase();
    const filteredList = skillList.filter((skill) =>
      skill.skill.toLowerCase().includes(skillValue)
    );
    setFilteredSkillList(filteredList);
    setSkillValue(skillValue);
  };

  return isOpen2 ? (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalContainer}>
          <div className={styles.modalHeadingContainer}>
            <div className={styles.modalHeading}>Tea Filters</div>
            <button className={styles.closeButton} onClick={handleClose}>
              &times;
            </button>
          </div>

          <div className={styles.modalFilterContainer}>
            Skills
            <br />
            <input
              type="text"
              placeholder=""
              className={CoffeeChatStyle.searchFilter}
              value={skillValue}
              onChange={handleInputChange1}
            />
          {skillValue.length > 0
            ? filteredSkillList.map((skill) => (
                <div
                  key={skill.id}
                  className={CoffeeChatStyle.rightTag}
                  onClick={() => {
                    setSkillArr([...skillArr, skill.skill]);
                  }}
                >
                  {skill.skill}
                </div>
              ))
            : skillList.map((skill) => (
                <div
                  key={skill.id}
                  className={CoffeeChatStyle.rightTag}
                  onClick={() => {
                    setSkillArr([...skillArr, skill.skill]);
                  }}
                >
                  {skill.skill}
                </div>
              ))}

          </div>

          <div className={styles.modalFilterContainer}>
            Interests
            <br />
            <input
              type="text"
              placeholder=""
              className={CoffeeChatStyle.searchFilter}
              value={interestValue}
              onChange={handleInputChange}
            />
          {interestValue.length > 0
            ? filteredInterestList.map((interest) => (
                <div
                  key={interest.id}
                  className={CoffeeChatStyle.rightTag}
                  onClick={() => {
                    setInterestArr([...interestArr, interest.interest]);
                  }}
                >
                  {interest.interest}
                </div>
              ))
            : interestList.map((interest) => (
                <div
                  key={interest.id}
                  className={CoffeeChatStyle.rightTag}
                  onClick={() => {
                    setInterestArr([...interestArr, interest.interest]);
                  }}
                >
                  {interest.interest}
                </div>
              ))}

          </div>


          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  ) : null;
};

export default FilterBy;


// import React, { useState, useEffect } from "react";
// import CoffeeChatStyle from "../styles/CoffeeChatStyle.module.css";
// import styles from "../styles/FilterByStyle.module.css";
// import axios from "axios";

// interface ModalProps {
//   isOpen2: boolean;
//   onClose2: () => void;
//   children?: React.ReactNode;
// }

// const FilterBy: React.FC<ModalProps> = ({ isOpen2, onClose2, children }) => {
//   console.log("Modal rendered");

//   const [isVisible, setIsVisible] = useState<boolean>(isOpen2);
//   const [interestArr, setInterestArr] = useState<string[]>([]);
//   const [value, setValue] = useState<string>("");
//   const [interestList, setInterestList] = useState<any[]>([]);
//   const [filteredInterestList, setFilteredInterestList] = useState<any[]>([]);

//   const handleClose = () => {
//     setIsVisible(false);
//     onClose2();
//   };

//   const getAllInterests = async () => {
//     try {
//       const res = await axios.get("/getAllInterests");
//       setInterestList(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAllInterests();
//   }, []);

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value.toLowerCase();
//     const filteredList = interestList.filter((interest) =>
//       interest.interest.toLowerCase().includes(value)
//     );
//     setFilteredInterestList(filteredList);
//     setValue(value);
//   };

//   const handleInterestClick = (interest: string) => {
//     setInterestArr([...interestArr, interest]);
//   };

//   return isOpen2 ? (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modal}>
//         <div className={styles.modalContainer}>
//           <div className={styles.modalHeadingContainer}>
//             <div className={styles.modalHeading}>Tea Filters</div>
//             <button className={styles.closeButton} onClick={handleClose}>
//               &times;
//             </button>
//           </div>
//           <div className={styles.modalFilterContainer}>
//             Skills
//             <br />
//             <input
//               type="text"
//               placeholder=""
//               className={CoffeeChatStyle.searchFilter}
//               value={value}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className={CoffeeChatStyle.tagsContainer}>
//             {interestArr.map((interest) => (
//               <div key={interest} className={CoffeeChatStyle.rightTag}>
//                 {interest}
//               </div>
//             ))}
//           </div>
//           {value.length > 0
//             ? filteredInterestList.map((interest) => (
//                 <div
//                   key={interest.id}
//                   className={CoffeeChatStyle.rightTag}
//                   onClick={() => {
//                     handleInterestClick(interest.interest);
//                   }}
//                 >
//                   {interest.interest}
//                 </div>
//               ))
//             : interestList.map((interest) => (
//                 <div
//                   key={interest.id}
//                   className={CoffeeChatStyle.rightTag}
//                   onClick={() => {
//                     handleInterestClick(interest.interest);
//                   }}
//                 >
//                   {interest.interest}
//                 </div>
//               ))}

//           <div className={styles.content}>{children}</div>
//         </div>
//       </div>
//     </div>
//   ) : null;
// };

// export default FilterBy;


// import React, { useState, useEffect } from "react";
// import CoffeeChatStyle from "../styles/CoffeeChatStyle.module.css";
// import styles from "../styles/FilterByStyle.module.css";
// import axios from "axios";

// interface ModalProps {
//   isOpen2: boolean;
//   onClose2: () => void;
//   children?: React.ReactNode;
// }

// const FilterBy: React.FC<ModalProps> = ({ isOpen2, onClose2, children }) => {
//   console.log("Modal rendered");

//   const [isVisible, setIsVisible] = useState<boolean>(isOpen2);
//   const [interestArr, setInterestArr] = useState<string[]>([]);
//   const [value, setValue] = useState<string>("");
//   const [interestList, setInterestList] = useState<any[]>([]);
//   const [filteredInterestList, setFilteredInterestList] = useState<any[]>([]);
//   const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

//   const handleClose = () => {
//     setIsVisible(false);
//     onClose2();
//     setInterestArr(selectedInterests); // Revert interestArr to selectedInterests if changes not confirmed
//   };

//   const getAllInterests = async () => {
//     try {
//       const res = await axios.get("/getAllInterests");
//       setInterestList(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAllInterests();
//   }, []);

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value.toLowerCase();
//     const filteredList = interestList.filter((interest) =>
//       interest.interest.toLowerCase().includes(value)
//     );
//     setFilteredInterestList(filteredList);
//     setValue(value);
//   };

//   const handleConfirm = () => {
//     setSelectedInterests(prevSelectedInterests => [...prevSelectedInterests, ...interestArr]);
//     setIsVisible(false);
//     onClose2();
//   };

//   return isOpen2 ? (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modal}>
//         <div className={styles.modalContainer}>
//           <div className={styles.modalHeadingContainer}>
//             <div className={styles.modalHeading}>Tea Filters</div>
//             <button className={styles.closeButton} onClick={handleClose}>
//               &times;
//             </button>
//           </div>
//           <div className={styles.modalFilterContainer}>
//             Skills
//             <br />
//             <input
//               type="text"
//               placeholder=""
//               className={CoffeeChatStyle.searchFilter}
//               value={value}
//               onChange={handleInputChange}
//             />
//           </div>
//           {value.length > 0
//             ? filteredInterestList.map((interest) => (
//                 <div
//                   key={interest.id}
//                   className={CoffeeChatStyle.rightTag}
//                   onClick={() => {
//                     setInterestArr([...interestArr, interest.interest]);
//                   }}
//                 >
//                   {interest.interest}
//                 </div>
//               ))
//             : interestList.map((interest) => (
//                 <div
//                   key={interest.id}
//                   className={CoffeeChatStyle.rightTag}
//                   onClick={() => {
//                     setInterestArr([...interestArr, interest.interest]);
//                   }}
//                 >
//                   {interest.interest}
//                 </div>
//               ))}
//           <div>
//             {interestArr.map((interest) => (
//               <div className={styles.selectedInterest}>{interest}</div>
//             ))}
//           </div>
//           <button onClick={handleConfirm}>Confirm</button>
//           <div className={styles.content}>{children}</div>
//         </div>
//       </div>
//     </div>
//   ) : null;
// };

// export default FilterBy;
