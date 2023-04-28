import CoffeeChatStyle from "../styles/CoffeeChatStyle.module.css";
import { useEffect,useState } from "react";
import Modal from "../components/Modal";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FilterBy from "../components/FilterBy";
import { useNavigate } from "react-router-dom";
import axios from "axios";

let owner: boolean = false;

const CoffeeChat = () => {

  const navigate = useNavigate();
  const [interestList, setInterestList] = useState<any[]>([]);
  const [savedInterests, setSavedInterests] = useState<string[]>([]);
  const [userInterests, setUserInterests] = useState<any[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  // const savedInterests: string[] = ["Interest 1", "Interest 2", "Interest 3"];


  const handleInterestsSubmit = (interests: any[]) => {
    setSelectedInterests(interests.map((interest) => interest.interest));
  };

  const handleInterestSaved = (interests: string[]) => {
    setSavedInterests(interests);
  };



  /// Will change later ////

  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log("Modal opened");

  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  console.log("Modal opened");

  const handleOpen = () => {
    console.log("Modal opened");
    setIsOpen(true);
  };
  const handleOpen2 = () => {
    console.log("Modal opened");
    setIsOpen2(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    console.log("Modal closed");
  };
  const handleClose2 = () => {
    setIsOpen2(false);
    console.log("Modal closed");
  };

  // const handleInterestUpdate = () => {
  //   axios
  //   .post("/addUserInterest", {userInterests: JSON.stringify(interestArr)})
  //   .then((res:any) => {
  //       console.log(res)
  //       window.location.reload()
  //   })
  //   .catch((error) => {
  //       console.log(error)
  //   })
  // };

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


  useEffect(() => {
    getAllInterests();
  });



  return (
    <div className={CoffeeChatStyle.pageBackground}>
      {/* @ts-expect-error Server Component */}
      <NavBar></NavBar>

      {/* <Modal isOpen={isOpen} onClose={handleClose}>
               <h2>Modal Title</h2>
               <p>This is the content of the modal.</p>
      </Modal> */}


      {/* body */}
      <div className={CoffeeChatStyle.container}>

        {/* title card */}
        <div className={CoffeeChatStyle.containerRow}>
          <div className={CoffeeChatStyle.coffeeChatTopCard }>
              <p className={CoffeeChatStyle.coffeeChatText}>
                Chai Time
              </p>

              <p className={CoffeeChatStyle.coffeeChatSubText}>
              Connect. Schedule. Chat. Empower.
              </p>
          </div>
        </div>
        <div className={CoffeeChatStyle.secondContainerRow}>
          <div className={CoffeeChatStyle.leftcontainer}>
           
            {/* Chai Now & Connection Cards */}

            <div className={CoffeeChatStyle.leftCard}>

            {/* chai now  start*/}

              {/* chai now card */}
              <div className={CoffeeChatStyle.chaiNowCard}>
                <div className={CoffeeChatStyle.connectionCardTop}> </div>

               <div className={CoffeeChatStyle.smallContainer}>
              <p className={CoffeeChatStyle.chaiNowCardTitle}>
                Chai Now
              </p>
              <p className={CoffeeChatStyle.chaiNowCardDescription}>
              Do you have a minute to connect? 
              <br>
              </br>
              Chat with other members instantly!
              </p>
              </div>
              <div className = {CoffeeChatStyle.smallContainerChatNow}>
              <button className={CoffeeChatStyle.chatNowButton}>
               Chat Now
              </button>
              </div>

              </div>
              {/* chai now end */}

              {/* connection card */}
              <div className={CoffeeChatStyle.connectionCard}>
                <div className={CoffeeChatStyle.connectionCardTop}>
                  <img
                    className={CoffeeChatStyle.connectionCardAvatar}
                    src="./src/assets/avatar.png"
                  />
                </div>
                <div>
                  <p className={CoffeeChatStyle.connectionCardName}>
                    Profile Name
                  </p>
                  <p className={CoffeeChatStyle.connectionCardJobTitle}>
                    job title
                  </p>
                </div>

                {/* Featured Skills */}
               <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.connectionCardCategories}>Featured Skills</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>

               </div>

                {/* Common Interests */}
               <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.connectionCardCategories}>Common Interests</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
               </div>

                {/* Upcoming Availability */}

                <div className={CoffeeChatStyle.smallContainer}>
                   <div className = {CoffeeChatStyle.connectionCardCategories}>Upcoming Availability</div>
                </div>

               <div className = {CoffeeChatStyle.smallContainerAvailability}>

               <button className={CoffeeChatStyle.dateAvailableButton}>
               <img src="./src/assets/leftArrow.png" />
               </button>

                 {/* Availability 1 */}
                <div className={CoffeeChatStyle.connectionDateTag}> 
                 <div className={CoffeeChatStyle.connectionAvailabilityMonth}> 
                  JAN
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  9
                 </div>                
                </div>

                 {/* Availability 2 */}
                 <div className={CoffeeChatStyle.connectionDateMiddleTag}> 
                 <div className={CoffeeChatStyle.connectionAvailabilityMonth}> 
                  JAN
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  10
                 </div>                
                </div>

                  {/* Availability 3 */}
                  <div className={CoffeeChatStyle.connectionDateTag}> 
                 <div className={CoffeeChatStyle.connectionAvailabilityMonth}> 
                  JAN
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  11
                 </div>                
                </div>

               <button className={CoffeeChatStyle.dateAvailableButton}>
               <img src="./src/assets/rightArrow.png" />
               </button>

                </div>


               <div className = {CoffeeChatStyle.smallContainerScheduleMeeting}>
               <button onClick= {handleOpen} className={CoffeeChatStyle.scheduleMeetingButton}>
               Schedule a meeting
               </button>
              {/* Schedule a Meeting Command */}
               <Modal isOpen={isOpen} onClose={handleClose}>
               {/* <h2>Modal Title</h2>
               <p>This is the content of the modal.</p> */}
               </Modal>


               </div>

              </div>

            {/*connection card end*/}

            {/* connection card */}
              <div className={CoffeeChatStyle.connectionCard}>
                <div className={CoffeeChatStyle.connectionCardTop}>
                  <img
                    className={CoffeeChatStyle.connectionCardAvatar}
                    src="./src/assets/avatar.png"
                  />
                </div>
                <div>
                  <p className={CoffeeChatStyle.connectionCardName}>
                    Profile Name
                  </p>
                  <p className={CoffeeChatStyle.connectionCardJobTitle}>
                    job title
                  </p>
                </div>

                {/* Featured Skills */}
               <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.connectionCardCategories}>Featured Skills</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
               </div>

                {/* Common Interests */}
               <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.connectionCardCategories}>Common Interests</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
               </div>

                {/* Upcoming Availability */}

                <div className={CoffeeChatStyle.smallContainer}>
                   <div className = {CoffeeChatStyle.connectionCardCategories}>Upcoming Availability</div>
                </div>

               <div className = {CoffeeChatStyle.smallContainerAvailability}>

               <button className={CoffeeChatStyle.dateAvailableButton}>
               <img src="./src/assets/leftArrow.png" />
               </button>

                 {/* Availability 1 */}
                <div className={CoffeeChatStyle.connectionDateTag}> 
                 <div className={CoffeeChatStyle.connectionAvailabilityMonth}> 
                  JAN
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  9
                 </div>                
                </div>

                 {/* Availability 2 */}
                 <div className={CoffeeChatStyle.connectionDateMiddleTag}> 
                 <div className={CoffeeChatStyle.connectionAvailabilityMonth}> 
                  JAN
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  10
                 </div>                
                </div>

                  {/* Availability 3 */}
                  <div className={CoffeeChatStyle.connectionDateTag}> 
                 <div className={CoffeeChatStyle.connectionAvailabilityMonth}> 
                  JAN
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  11
                 </div>                
                </div>

               <button className={CoffeeChatStyle.dateAvailableButton}>
               <img src="./src/assets/rightArrow.png" />
               </button>

                </div>


               <div className = {CoffeeChatStyle.smallContainerScheduleMeeting}>
               <button className={CoffeeChatStyle.scheduleMeetingButton}>
               Schedule a meeting
               </button>
               </div>
              </div>

            {/*connection card end*/}

            {/* connection card */}
            <div className={CoffeeChatStyle.connectionCard}>
                <div className={CoffeeChatStyle.connectionCardTop}>
                  <img
                    className={CoffeeChatStyle.connectionCardAvatar}
                    src="./src/assets/avatar.png"
                  />
                </div>
                <div>
                  <p className={CoffeeChatStyle.connectionCardName}>
                    Profile Name
                  </p>
                  <p className={CoffeeChatStyle.connectionCardJobTitle}>
                    job title
                  </p>
                </div>

                {/* Featured Skills */}
               <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.connectionCardCategories}>Featured Skills</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
               </div>

                {/* Common Interests */}
               <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.connectionCardCategories}>Common Interests</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
               </div>

                {/* Upcoming Availability */}

                <div className={CoffeeChatStyle.smallContainer}>
                   <div className = {CoffeeChatStyle.connectionCardCategories}>Upcoming Availability</div>
                </div>

               <div className = {CoffeeChatStyle.smallContainerAvailability}>

               <button className={CoffeeChatStyle.dateAvailableButton}>
               <img src="./src/assets/leftArrow.png" />
               </button>

                 {/* Availability 1 */}
                <div className={CoffeeChatStyle.connectionDateTag}> 
                 <div className={CoffeeChatStyle.connectionAvailabilityMonth}> 
                  JAN
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  9
                 </div>                
                </div>

                 {/* Availability 2 */}
                 <div className={CoffeeChatStyle.connectionDateMiddleTag}> 
                 <div className={CoffeeChatStyle.connectionAvailabilityMonth}> 
                  JAN
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  10
                 </div>                
                </div>

                  {/* Availability 3 */}
                  <div className={CoffeeChatStyle.connectionDateTag}> 
                 <div className={CoffeeChatStyle.connectionAvailabilityMonth}> 
                  JAN
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  11
                 </div>                
                </div>

               <button className={CoffeeChatStyle.dateAvailableButton}>
               <img src="./src/assets/rightArrow.png" />
               </button>

                </div>

               {/* divider */}


               <div className = {CoffeeChatStyle.smallContainerScheduleMeeting}>
               <button className={CoffeeChatStyle.scheduleMeetingButton}>
               Schedule a meeting
               </button>
               </div>

              </div>    
            </div>   
          </div>
          {/*connection card end*/}
          

          {/* rightContainer */}
          <div className={CoffeeChatStyle.rightContainer}>
            <div className={CoffeeChatStyle.rightCard}>

              {/* <img
                className={CoffeeChatStyle.editIcon}
                src="./src/assets/edit.png"
              /> */}

              {/* Interests */}
              <p className={CoffeeChatStyle.rightCardHeading}>Filter by category 
              <button onClick= {handleOpen2} className={CoffeeChatStyle.filterButton}>
               <img src="./src/assets/filter.png" />
              </button>
              {/* <FilterByTest isOpen2={isOpen2} onClose2={handleClose2} interestList={undefined}>
               </FilterByTest> */}

              <FilterBy isOpen2={isOpen2} onClose2={handleClose2}>
               </FilterBy> 

              {/* <FilterBy isOpen2={isOpen2} onClose2={handleClose2} onInterestSaved={handleInterestSaved}>
               </FilterBy>  */}



               
              </p>

              <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.rightCardCategories}>Interests</div>


                {/* {interestList.map((interest) => (
                    <div
                      key={interest.id}
                      className={CoffeeChatStyle.rightTag}
                      // style={{
                      //   margin: "0.5rem",
                      //   whiteSpace: "nowrap",
                      //   textOverflow: "ellipsis",
                      // }}
                    >
                      {interest.interest}
                    </div>
                  ))} */}

                  {/* {savedInterests.map((interest) => (
                  <div
                    key={interest}
                    className={CoffeeChatStyle.rightTag}
                    // style={{
                    //   margin: "0.5rem",
                    //   whiteSpace: "nowrap",
                    //   textOverflow: "ellipsis",
                    // }}
                  >
                    {interest}
                  </div>
                ))} */}

                {/* <div>
                  <h2>Saved Interests:</h2>
                  {savedInterests.map((interest) => (
                    <div key={interest}>{interest}</div>
                  ))}
                </div> */}
      <div>

        {/* {selectedInterests.map((interest) => (
          <div key={interest} className={CoffeeChatStyle.rightTag}>
            {interest}
          </div>
        ))} */}



      </div>


                <div className={CoffeeChatStyle.rightTag}>interest</div>
                <div className={CoffeeChatStyle.rightTag}>interest</div>
                
              </div>


              {/* Values */}
              <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.rightCardCategories}>Values</div>
                <div className={CoffeeChatStyle.rightTag}>value</div>
                <div className={CoffeeChatStyle.rightTag}>value</div>
              </div>


              {/* Skills */}
              <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.rightCardCategories}>Skills</div>
                <div className={CoffeeChatStyle.rightTag}>skill</div>
                <div className={CoffeeChatStyle.rightTag}>skill</div>
              </div>            

            </div>



            {/* Instant Coffee Start*/}

            {/* <div className={CoffeeChatStyle.instantCoffeeCard}>
              
            <div className={CoffeeChatStyle.smallContainer}>
              <p className={CoffeeChatStyle.instantCoffeeTitle}>
                Instant Coffee
              </p>
              <p className={CoffeeChatStyle.instantCoffeeDescription}>
              Do you have a minute to connect? 
              <br>
              </br>
              Chat with other members instantly!
              </p>
              </div>
              <div className = {CoffeeChatStyle.smallContainerChatNow}>
              <button className={CoffeeChatStyle.chatNowButton}>
               Chat Now
              </button>
              </div>

            </div> */}
            {/* Instant Coffee End*/}

          </div>
        </div>
      </div>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default CoffeeChat;
