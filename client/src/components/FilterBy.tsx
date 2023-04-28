import React, { useState, useEffect } from "react";
import CoffeeChatStyle from "../styles/CoffeeChatStyle.module.css";
import styles from "../styles/FilterByStyle.module.css";
import axios from "axios";

interface ModalProps {
  isOpen2: boolean;
  onClose2: () => void;
  onSelectSkills: (skills: string[]) => void;
  onSelectInterests: (interests: string[]) => void;
  onSelectValues: (values: string[]) => void;
  children?: React.ReactNode;
}

const FilterBy: React.FC<ModalProps> = ({ isOpen2, onClose2, children, onSelectSkills, onSelectInterests, onSelectValues  }) => {


  const [isVisible, setIsVisible] = useState<boolean>(isOpen2);

//   const [value, setValue] = useState<string>("");
  const [interestValue, setInterestValue] = useState<string>("");
  const [skillValue, setSkillValue] = useState<string>("");
  const [valueValue, setValueValue] = useState<string>("");  

// list before search 
  const [interestList, setInterestList] = useState<any[]>([]);
  const [skillList, setSkillList] = useState<any[]>([]);
  const [valueList, setValueList] = useState<any[]>([]);

  // list after search
  const [filteredSkillList, setFilteredSkillList] = useState<any[]>([]);
  const [filteredInterestList, setFilteredInterestList] = useState<any[]>([]);
  const [filteredValueList, setFilteredValueList] = useState<any[]>([]);


  // selected
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  // array forms when you select from the filtered list
  const [skillArr, setSkillArr] = useState<string[]>([]);
  const [interestArr, setInterestArr] = useState<string[]>([]);
  const [valueArr, setValueArr] = useState<string[]>([]);

// when FilterBy closes
  const handleClose = () => {
    setIsVisible(false);
    onClose2();
    setInterestArr(selectedInterests); // Revert interestArr to selectedInterests if changes changes not confirmed
    setSkillArr(selectedSkills); // Revert skillArr to selectedSkills if changes changes not confirmed
    setValueArr(selectedValues); // Revert valueArr to selectedValues if changes changes not confirmed
  };

// get all skills from database
  const getAllSkills = async () => {
    try {
      const res = await axios.get("/getAllSkills");
      setSkillList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

// get all interests from database
  const getAllInterests = async () => {
    try {
      const res = await axios.get("/getAllInterests");
      setInterestList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

// get all value from database
  const getAllValues = async () => {
    try {
      const res = await axios.get("/getAllValues");
      setValueList(res.data);
    } catch (error) {
      console.log(error);
    }  
  };

  useEffect(() => {
    getAllValues();
  }, []);


  useEffect(() => {
    getAllInterests();
  }, []);

  useEffect(() => {
    getAllSkills();
  }, []);


  // can also use "includes" instead of startsWith for more detailed search

  const handleInputChangeSkill = (event: React.ChangeEvent<HTMLInputElement>) => {
    const skillValue = event.target.value.toLowerCase();

    const filteredList = skillList.filter((skill) =>
      skill.skill.toLowerCase().startsWith(skillValue)
    );
    setFilteredSkillList(filteredList);
    setSkillValue(skillValue);
  };

  const handleInputChangeInterest = (event: React.ChangeEvent<HTMLInputElement>) => {
    const interestValue = event.target.value.toLowerCase();
    const filteredList = interestList.filter((interest) =>
      interest.interest.toLowerCase().startsWith(interestValue)
    );

    setFilteredInterestList(filteredList);
    setInterestValue(interestValue);
  };

  const handleInputChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueValue = event.target.value.toLowerCase();
    const filteredList = valueList.filter((values) =>
      values.valueList.toLowerCase().startsWith(valueValue )
    );
    setFilteredValueList(filteredList);
    setValueValue(valueValue);
  };

  
  const handleConfirm = () => {
    setSelectedInterests(prevSelectedInterests => [...prevSelectedInterests, ...interestArr]);
    setSelectedSkills(prevSelectedSkills => [...prevSelectedSkills, ...skillArr]);
    setSelectedValues(prevSelectedValues => [...prevSelectedValues, ...valueArr]);
      // Pass interestArr as a prop to CoffeeChat component
    onSelectSkills(skillArr);
    onSelectInterests(interestArr);
    onSelectValues(valueArr);
    setIsVisible(false);
    onClose2();

  };


  return isOpen2 ? (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalContainer}>
          <div className={styles.modalHeadingContainer}>
          <button className={styles.closeButton} onClick={handleClose}>
              &times;
            </button>
            <div className={styles.modalHeading}>Tea Filters
            </div>
          </div>

          <div className={styles.modalFilterContainer}>
            Skills
            <br />
            <input
              type="text"
              placeholder=""
              className={CoffeeChatStyle.searchFilter}
              value={skillValue}
              onChange={handleInputChangeSkill}
            />
            {/* skills after searching */}
          {skillValue.length > 0
          //.filter()method creates a new array that only includes skills that are not in the skillArr array
            ? filteredSkillList.filter((skill) => !skillArr.includes(skill.skill)).map((skill) => (
                <div
                  key={skill.id}
                  className={styles.searchedTag}
                  onClick={() => {
                    // setSkillArr([...skillArr, skill.skill]);
                    if (skillArr.includes(skill.skill)) {                    
                      setSkillArr(skillArr.filter((selectedSkills) => selectedSkills !== skill.skill));
                    } else if (skillArr.length < 5) {
                      setSkillArr([...skillArr, skill.skill]);
                    }
                  }}
                >
                  {skill.skill}
                </div>
              ))
            : skillList.map((skill) => (
                <div
                  key={skill.id}
                  // className={CoffeeChatStyle.rightTag}
                  onClick={() => {
                    // setSkillArr([...skillArr, skill.skill]);
                    if (skillArr.includes(skill.skill)) {
                      setSkillArr(skillArr.filter((selectedSkills) => selectedSkills !== skill.skill));
                    } else if (skillArr.length < 5) {
                      setSkillArr([...skillArr, skill.skill]);
                    }
                  }}
                >
                  {/* {skill.skill} */}
                </div>
              ))}
          </div>
          {/* selected skill */}
          <div className={styles.modalFilterSelectedContainer}>
          {skillArr.map((skill) => (
              <div className={styles.selectedInterest}
              onClick={() => {
                setSkillArr(skillArr.filter((selectedSkills) => selectedSkills !== skill));
              }}>{skill}</div>
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
              onChange={handleInputChangeInterest}
            />
          {interestValue.length > 0
            ? filteredInterestList.filter((interest) => !interestArr.includes(interest.interest)).map((interest) => (
                <div 
                  key={interest.id}
                  className={styles.searchedTag}
                  onClick={() => {
                    if (interestArr.includes(interest.interest)) {
                      setInterestArr(interestArr.filter((selectedInterest) => selectedInterest !== interest.interest));
                    } else if (interestArr.length < 5) {
                      setInterestArr([...interestArr, interest.interest]);
                    }
                  }}
                >
                  {interest.interest}
                </div>
              ))
            : interestList.map((interest) => (
                <div
                  key={interest.id}
                  // className={CoffeeChatStyle.rightTag}
                  onClick={() => {
                    if (interestArr.includes(interest.interest)) {
                      setInterestArr(interestArr.filter((selectedInterest) => selectedInterest !== interest.interest));
                    } else if (interestArr.length < 5) {
                      setInterestArr([...interestArr, interest.interest]);
                    }
                  }}
                >
                  {/* {interest.interest} */}
                </div>
              ))}   
          </div>
            {/* selected interest */}
            <div className={styles.modalFilterSelectedContainer}>
            {interestArr.map((interest) => (
              <div className={styles.selectedInterest}
              onClick={() => {
                setInterestArr(interestArr.filter((selectedInterest) => selectedInterest !== interest));
              }}>{interest}</div>
            ))}
          </div>

          <div className={styles.modalFilterContainer}>
            Values
            <br />
            <input
              type="text"
              placeholder=""
              className={CoffeeChatStyle.searchFilter}
              value={valueValue}
              onChange={handleInputChangeValue}
            />
          {valueValue.length > 0
            ? filteredValueList.filter((values) => !valueArr.includes(values.valueList)).map((values) => (
                <div
                  key={values.id}
                  className={styles.searchedTag}
                  onClick={() => {
                    // setValueArr([...valueArr, values.valueList]);
                    if (valueArr.includes(values.valueList)) {
                      setValueArr(valueArr.filter((selectedValues) => selectedValues !== values.valueList));
                    } else if (valueArr.length < 5) {
                      setValueArr([...valueArr, values.valueList]);
                    }
                  }}
                >
                  {values.valueList}
                </div>
              ))
            : valueList.map((values) => (
                <div
                  key={values.id}
                  // className={CoffeeChatStyle.rightTag}
                  onClick={() => {
                    // setValueArr([...valueArr, values.valueList]);
                    if (valueArr.includes(values.valueList)) {
                      setValueArr(valueArr.filter((selectedValues) => selectedValues !== values.valueList));
                    } else if (valueArr.length < 5) {
                      setValueArr([...valueArr, values.valueList]);
                    }
                  }}
                >
                  {/* {values.valueList} */}
                </div>
              ))}
          </div>
          {/* selected value */}
          <div className={styles.modalFilterSelectedContainer}>
          {valueArr.map((values) => (

              <div className={styles.selectedInterest}
              onClick={() => {
                setValueArr(valueArr.filter((selectedValues) => selectedValues !== values));
              }}>{values}</div>
            ))}
          </div>
          
          <button onClick={handleConfirm}>Confirm</button>
 
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  ) : null;
};

export default FilterBy;
