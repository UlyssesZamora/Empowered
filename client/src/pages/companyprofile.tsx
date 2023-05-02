import UserProfileStyle from "../styles/UserProfileStyle.module.css";
import "react-calendar/dist/Calendar.css";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import EditCompanyProfile from "../components/EditCompanyProfile";
import jwtDecode from "jwt-decode";

let owner: boolean = false;

const CompanyProfile = () => {
  const navigate = useNavigate();
  const [companyData, setCompanyData] = useState<any[]>([]);
  const [modalOpen, setOpenModal] = useState(false);
  const [companyInfoEdit, setcompanyInfoEdit] = useState("");
  const [allPros, setAllPros] = useState<any[]>([]);
  const [Pros, setPros] = useState<any[]>([]);
  const [Cons, setCons] = useState<any[]>([]);
  const [companyReview, setCompanyReview] = useState<any[]>([]);
  const [departmentReview, setDepartmentReview] = useState<any[]>([]);
  const [Department, setDepartment] = useState<any[]>([]);
  const [allDepartment, setAllDepartment] = useState<any[]>([]);
  const [companydepartmentId, setcompanydepartmentId] = useState("");
  const { id } = useParams();

  if (localStorage.getItem("jwt") === null) {
    navigate("/");
  }
  let lol: any = jwtDecode(localStorage.getItem("jwt")!);

  if (id == lol.key && lol.isUser == false) {
    // id is string and key is number, === doesn't work
    owner = true;
  }

  // getting data from api and setting to profile
  const getData = async (id: any) => {
    axios
      .get(`https://goldfish-app-wb78d.ondigitalocean.app/companyId/${id}`)
      .then((res: any) => {
        setCompanyData(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // getting all pros
  const getAllPros = async () => {
    axios
      .get("https://goldfish-app-wb78d.ondigitalocean.app/getAllPros")
      .then((res: any) => {
        setAllPros(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //getting Pros for loged in company
  const getPros = async () => {
    axios
      .get(`https://goldfish-app-wb78d.ondigitalocean.app/getPros/${id}`)
      .then((res: any) => {
        setPros(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //getting Cons for loged in company
  const getCons = async () => {
    axios
      .get(`https://goldfish-app-wb78d.ondigitalocean.app/getCons/${id}`)
      .then((res: any) => {
        setCons(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //getting Cons for logged in company
  const getCompanyReviews = async () => {
    axios
      .get(
        `https://goldfish-app-wb78d.ondigitalocean.app/getCompanyReviews/${id}`
      )
      .then((res: any) => {
        setCompanyReview(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //getting Department Review for logged in company
  const getDepartmentReviews = async () => {
    axios
      .get(
        `https://goldfish-app-wb78d.ondigitalocean.app/getDepartmentReviews/${id}`
      )
      .then((res: any) => {
        setDepartmentReview(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //getting Department for logged in company
  const getDepartment = async () => {
    axios
      .get(`https://goldfish-app-wb78d.ondigitalocean.app/getDepartment/${id}`)
      .then((res: any) => {
        setDepartment(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //getting all department
  const getAllDepartment = async () => {
    axios
      .get("https://goldfish-app-wb78d.ondigitalocean.app/getAllDepartment")
      .then((res: any) => {
        setAllDepartment(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogo = () => {
    /* @ts-expect-error Server Component */
    if (companyData.companyLogo === null) {
      return "/images/companyLogo.png";
    } else {
      /* @ts-expect-error Server Component */
      return companyData.companyLogo;
    }
  };

  useEffect(() => {
    getData(id);
    getAllPros();
    getPros();
    getCons();
    getCompanyReviews();
    getDepartmentReviews();
    getDepartment();
    getAllDepartment();
  }, [id]);

  if (!companyData) {
    return <p>Loading user data...</p>;
  }

  // getting year from companyRegisteredDate

  /* @ts-expect-error Server Component */
  const EstablishedYear = new Date(companyData.companyRegisteredDate);
  const year = EstablishedYear.getFullYear();

  return (
    <div className={UserProfileStyle.pageBackground}>
      <nav className={UserProfileStyle.nav}>
        <img className={UserProfileStyle.logo} src="/images/image3.png" />

        {/* search box */}
        <input
          type="text"
          placeholder="Search.."
          className={UserProfileStyle.search}
        />
        <button className={UserProfileStyle.button}>
          <img src="/images/search.png" />
        </button>

        <img className={UserProfileStyle.logoAvatar} src={handleLogo()} />
      </nav>
      {modalOpen && (
        <EditCompanyProfile
          closeModal={setOpenModal}
          /* @ts-expect-error Server Component */
          companyLogo={companyData.companyLogo}
          /* @ts-expect-error Server Component */
          companyName={companyData.companyName}
          /* @ts-expect-error Server Component */
          companyId={companyData.id}
          companyInfoEdit={companyInfoEdit}
          /* @ts-expect-error Server Component */
          companyLocation={companyData.companyLocation}
          /* @ts-expect-error Server Component */
          companyMission={companyData.companyMission}
          companyDepartment={Department}
          allDepartment={allDepartment}
          companyReview={departmentReview}
        />
      )}

      {/* body */}
      <div className={UserProfileStyle.container}>
        {/* profile image card */}
        <div className={UserProfileStyle.containerRow}>
          <div className={UserProfileStyle.profileCard}>
            <div className={UserProfileStyle.profileCardTop}>
              {/* editing company info */}
              {owner && (
                <>
                  <a
                    href="#"
                    onClick={() => {
                      setOpenModal(true);
                      setcompanyInfoEdit("companyInfo");
                    }}
                  >
                    <img
                      className={UserProfileStyle.editIcon}
                      src="/images/edit.png"
                    />
                  </a>
                </>
              )}

              {/* editing profile picture */}
              {owner ? (
                <>
                  <a
                    href="#"
                    onClick={() => {
                      setOpenModal(true);
                      setcompanyInfoEdit("companyLogo");
                    }}
                  >
                    <img
                      className={UserProfileStyle.profileCardLogoAvatar}
                      src={handleLogo()}
                    />
                  </a>
                </>
              ) : (
                <>
                  <img
                    className={UserProfileStyle.profileCardLogoAvatar}
                    src={handleLogo()}
                  />
                </>
              )}

              <div className={UserProfileStyle.nameContiner}>
                <p className={UserProfileStyle.accountName}>
                  {/*  @ts-expect-error Server Component */}
                  {companyData.companyName}
                </p>
                <p className={UserProfileStyle.infoText}>
                  {/*  @ts-expect-error Server Component */}
                  {companyData.companyLocation}
                </p>
                <p className={UserProfileStyle.infoText}>Established {year}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={UserProfileStyle.secounContainerRow}>
          <div className={UserProfileStyle.leftcontainer}>
            {/* Mission Statement */}
            <div className={UserProfileStyle.leftCard}>
              {/* editing  company mission*/}
              {owner && (
                <>
                  <a
                    href="#"
                    onClick={() => {
                      setOpenModal(true);
                      setcompanyInfoEdit("companyMission");
                    }}
                  >
                    <img
                      className={UserProfileStyle.editIcon}
                      src="/images/edit.png"
                    />
                  </a>
                </>
              )}

              <h2 className={UserProfileStyle.cardHeading}>
                Mission Statement
              </h2>
              <div className={UserProfileStyle.textcontiner}>
                <p className={UserProfileStyle.aboutMeCardtext}>
                  {/*  @ts-expect-error Server Component */}
                  {companyData.companyMission}
                </p>
              </div>
              {/* uncomment if value are need in Mission card */}
              {/* <div className={UserProfileStyle.tagContiner}>
                <div className={UserProfileStyle.tag}>Value</div>
                <div className={UserProfileStyle.tag}>Value</div>
                <div className={UserProfileStyle.tag}>Value</div>
              </div> */}
            </div>

            {/* Company 360º Review */}
            <div className={UserProfileStyle.leftCard}>
              <h2 className={UserProfileStyle.cardHeading}>
                Company 360º Review
              </h2>
              <div className={UserProfileStyle.reviewCardCointiner}>
                <div style={{ display: "inline" }}>
                  {/* Over all Company 360º Review*/}
                  <div style={{ display: "flex" }}>
                    <h3 className={UserProfileStyle.ratingLable}>Overall</h3>

                    <div
                      style={{
                        height: "20px",
                        width: "20px",
                        background: "#385846",
                        marginLeft: "153px",
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

                  {/* Work/Life Balance Company 360º Review*/}
                  <div style={{ display: "flex" }}>
                    <h3 className={UserProfileStyle.ratingLable}>
                      Work/Life Balance
                    </h3>
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

                  {/* Comp & Benefits Company 360º Review*/}
                  <div style={{ display: "flex" }}>
                    <h3 className={UserProfileStyle.ratingLable}>
                      Comp & Benefits
                    </h3>
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

                  {/* Career Opportunities Company 360º Review*/}
                  <div style={{ display: "flex" }}>
                    <h3 className={UserProfileStyle.ratingLable}>
                      Career Opportunities
                    </h3>
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

                {/* Professionalism */}
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
                      marginLeft: "5px",
                    }}
                  >
                    Professionalism
                  </p>
                </div>

                {/* Job satisfaction */}
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
                      marginLeft: "10px",
                    }}
                  >
                    Job satisfaction
                  </p>
                </div>

                {/* Employee friendly */}
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
                      fontSize: "15px",
                      marginTop: "70px",
                      marginLeft: "-5px",
                    }}
                  >
                    Employee friendly
                  </p>
                </div>
              </div>
            </div>

            {/* Reviews*/}
            <div className={UserProfileStyle.leftCard}>
              <p className={UserProfileStyle.cardHeading}>Reviews</p>
              <div className={UserProfileStyle.reviewCardCointiner}>
                {/* displaying only 4 reviews */}
                {companyReview.slice(0, 4).map((review) => (
                  <div className={UserProfileStyle.reviewCard}>
                    <p key={review.id} className={UserProfileStyle.review}>
                      {review.reviewDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews – Department based */}
            <div className={UserProfileStyle.leftCard}>
              <p className={UserProfileStyle.cardHeading}>
                Reviews – Department based
              </p>
              <div className={UserProfileStyle.reviewCardCointiner}>
                {/* displaying only 4 reviews */}
                {departmentReview.slice(0, 4).map((depReview) => (
                  <div className={UserProfileStyle.reviewCard}>
                    <p key={depReview.id} className={UserProfileStyle.review}>
                      {depReview.reviewDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* rightContainer */}
          <div className={UserProfileStyle.rightContainer}>
            <div className={UserProfileStyle.rightCard}>
              {/* Pros */}
              <p className={UserProfileStyle.rightCardHeading}>Pros</p>
              <div className={UserProfileStyle.smallContainer}>
                {Pros.map((pro) => (
                  <span key={pro.id} className={UserProfileStyle.rightTag}>
                    {pro.pro}
                  </span>
                ))}
              </div>
            </div>

            {/* Cons */}
            <div className={UserProfileStyle.rightCard}>
              <p className={UserProfileStyle.rightCardHeading}>Cons</p>
              <div className={UserProfileStyle.smallContainer}>
                {Cons.map((con) => (
                  <span key={con.id} className={UserProfileStyle.rightTag}>
                    {con.con}
                  </span>
                ))}
              </div>
            </div>

            {/* Departments */}
            <div className={UserProfileStyle.rightCard}>
              {/* adding or deleting the department */}
              {owner ? (
                <>
                  <a
                    href="#"
                    onClick={() => {
                      setOpenModal(true);
                      setcompanyInfoEdit("addDepartment");
                    }}
                  >
                    <img
                      className={UserProfileStyle.addIcon}
                      src="/images/add.png"
                    />
                    <span className={UserProfileStyle.addText}>add</span>
                  </a>
                </>
              ) : (
                <></>
              )}

              {owner ? (
                <>
                  <a
                    href="#"
                    onClick={() => {
                      setOpenModal(true);
                      setcompanyInfoEdit("deleteDepartment");
                    }}
                  >
                    <img
                      className={UserProfileStyle.trashIcon}
                      src="/images/trash.png"
                    />
                    <span className={UserProfileStyle.deleteText}>delete</span>
                  </a>
                </>
              ) : (
                <></>
              )}
              {/* displaying depatment in the company */}
              <p className={UserProfileStyle.rightCardHeading}>Departments</p>
              <div className={UserProfileStyle.smallContainer}>
                {Department.map((department) => (
                  <span
                    key={department.id}
                    className={UserProfileStyle.rightTag}
                  >
                    {department.departmentName}
                  </span>
                ))}
              </div>
            </div>

            {/* Location Map */}
            <div className={UserProfileStyle.rightCard}>
              <p className={UserProfileStyle.rightCardHeading}>Location Map</p>
              <div className={UserProfileStyle.calanderCard}></div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default CompanyProfile;
