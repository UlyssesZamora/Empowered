import a from "../styles/companyModal.module.css";
import { useEffect, useState, useRef, SetStateAction } from "react";
import InputBox from "./inputBox";
import axios from "axios";


const EditCompanyProfile = ({
  closeModal,
  companyLogo,
  companyName,
  companyId,
  companyInfoEdit,
  companyLocation,
  companyMission,
  companyDepartment,
  allDepartment,
  companyReview,
}: {
  closeModal: (arg: boolean) => void;
  companyLogo: string;
  companyName: string;
  companyId: number;
  companyInfoEdit: string;
  companyLocation: string;
  companyMission: string;
  companyDepartment: any;
  allDepartment: any;
  companyReview: any;
}) => {
  const [newcompanyName, setcompanyName] = useState(companyName);
  const [newcompanyLocation, setcompanyLocation] = useState(companyLocation);
  const updateCompanyMission = useRef<any>([]);
  const [newDepartment, setNewDepartment] = useState("");
  const [departmentList, setDepartmentList] = useState(companyDepartment);

  const onProfileLogoChange = () => {
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
          .put("/api/updateLogo", {
            companyId: companyId,
            companyImage: imageDataUrl,
          })
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

  //DeleteProfileLogoChange
  const DeleteProfileLogoChange = () => {
    axios
      .put("https://goldfish-app-wb78d.ondigitalocean.app/api/updateLogo", {
        companyId: companyId,
        companyImage: "../src/assets/companyLogo.png",
      })
      .then((res: any) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //updating name company name
  const handlecompanyNameChange = (value: string) => {
    setcompanyName(value);
  };

  //updating company location
  const handlecompanyLocation = (value: string) => {
    setcompanyLocation(value);
  };

  const onChangeValue = (e: any) => {
    setNewDepartment(e.target.value);
  };

  const onSearch = (searchTerm: string) => {
    setNewDepartment(searchTerm);
  };

  //  update New Info of company to DB
  const updateNewInfo = () => {
    axios
      .put("https://goldfish-app-wb78d.ondigitalocean.app/updateCompanyInfo", {
        companyId: companyId,
        companyName: newcompanyName,
        companyLocation: newcompanyLocation,
      })
      .then((res: any) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //  update New CompanyMission to DB
  const updateNewCompanyMission = () => {
    axios
      .put("https://goldfish-app-wb78d.ondigitalocean.app/updateCompanyMission", {
        companyId: companyId,
        companyMission: updateCompanyMission.current.value,
      })
      .then((res: any) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (departmentId: number) => {
    setDepartmentList((prevValue: any) => {
      const updatedValues = prevValue.filter(
        (value: any) => value.id !== departmentId
      );
      return updatedValues;
    });
  };

  //deleting review depatment
  const handleDeleteDepartment = () => {
    let newIDList: any = [];
    let oldIDList: any = [];

    for (let i = 0; i < departmentList.length; i++) {
      newIDList.push(departmentList[i].id);
    }
    for (let i = 0; i < companyDepartment.length; i++) {
      oldIDList.push(companyDepartment[i].id);
    }
    let deleteID = oldIDList.filter((word: any) => !newIDList.includes(word));

    companyReview.map((review: any) => {

      deleteID.map((deptID: any) => {
        if (review.companydepartmentId === deptID) {

          axios
            .delete(`https://goldfish-app-wb78d.ondigitalocean.app/deleteDepartmentReview/${review.id}`)
            .then((res: any) => {
              console.log(res);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    });
    deleteTable(deleteID);
  };

  //deleting department
  const deleteTable = (deleteDepartmentID: any) => {
    console.log(deleteDepartmentID);
    deleteDepartmentID.map((deptID: any) => {

      axios
        .delete(`https://goldfish-app-wb78d.ondigitalocean.app/deleteDepartment/${deptID}`)
        .then((res: any) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    window.location.reload();
  };

  // handling changes in search and add in in modal
  const handleDepartmentChanges = (departmentId: number) => {
    const selectedDepartment = allDepartment.find(
      (department: any) =>
        department.departmentName.toLowerCase() === newDepartment.toLowerCase()
    );

    if (selectedDepartment) {
      const newDept = {
        departmentId: selectedDepartment.id,
        companyId: companyId,
        departmentName: selectedDepartment.departmentName,
      };
      setDepartmentList((prevInterests: any) => {
        return [...prevInterests, newDept];
      });

      setNewDepartment("");
    }
  };

  //adding newdepartment  to DB
  const handleAdd = () => {
    let newIDList: any = [];
    let oldIDList: any = [];

    for (let i = 0; i < departmentList.length; i++) {
      newIDList.push(departmentList[i].departmentId);
    }
    for (let i = 0; i < companyDepartment.length; i++) {
      oldIDList.push(companyDepartment[i].departmentId);
    }

    let addID = newIDList.filter((word: any) => !oldIDList.includes(word));

    addID.map((deptID: any) => {
      axios
        .post("https://goldfish-app-wb78d.ondigitalocean.app/addDepartment", {
          departmentId: deptID,
          companyId: companyId,
        })
        .then((res: any) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    window.location.reload();
  };

  return (
    // logo update modal
    <div className={a.fullModalBackground}>
      {companyInfoEdit === "companyLogo" && (
        <div className={a.modalBackground}>
          <div className={a.modalContainer}>
            <div className={a.titleCloseBtn}>
              <div className={a.modualTitleText}>Uplode JPG or PNG</div>
              <button
                onClick={() => {
                  closeModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className={a.body}>
              <img className={a.profileCardLogoAvatar} src={companyLogo} />
            </div>
            <div style={{ display: "flex", marginLeft: "30px" }}>
              <div>
                <a href="#" onClick={onProfileLogoChange}>
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src="/images/camera.png"
                  />
                </a>

                <br />
                <p style={{ marginTop: "-5px", marginLeft: "-20px" }}>
                  Upload Photo
                </p>
              </div>

              <div style={{ marginLeft: "420px" }}>
                <a href="#" onClick={DeleteProfileLogoChange}>
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src="/images/trash.png"
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

      {/* company profile edit */}
      {companyInfoEdit === "companyInfo" && (
        <div className={a.modalBackground}>
          <div className={a.modalContainer}>
            <div className={a.titleCloseBtn}>
              <div className={a.modualTitleText}>Edit Company intro</div>
              <button
                onClick={() => {
                  closeModal(false);
                }}
              >
                X
              </button>
            </div>

            <br />
            <div style={{ marginTop: "-15px" }}>
              <div>
                <p style={{ fontFamily: "Montserrat", marginBottom: "10px" }}>
                  Name of Company:
                </p>
                <InputBox
                  defaultValue={companyName}
                  placeHolder="Name of Company"
                  onInputChange={handlecompanyNameChange}
                />
              </div>
              <div>
                <p style={{ fontFamily: "Montserrat", marginBottom: "10px" }}>
                  Company Location:
                </p>
                <InputBox
                  defaultValue={companyLocation}
                  placeHolder="Company Location"
                  onInputChange={handlecompanyLocation}
                />
              </div>

              <br />
            </div>
            <br />
            <button onClick={updateNewInfo} className={a.saveChanges}>
              Save Changes
            </button>
          </div>
        </div>
      )}

      {/* company mission edit */}
      {companyInfoEdit === "companyMission" && (
        <div className={a.modalBackground}>
          <div className={a.modalContainer}>
            <div className={a.titleCloseBtn}>
              <div className={a.modualTitleText}>Edit Company Mission</div>
              <button
                onClick={() => {
                  closeModal(false);
                }}
              >
                X
              </button>
            </div>
            <p className={a.modualTitleText}>Company Mission:</p>
            <textarea
              defaultValue={companyMission}
              placeholder="Company Mission"
              className={a.textarea}
              ref={updateCompanyMission}
            />
            <br />
            <button onClick={updateNewCompanyMission} className={a.saveChanges}>
              Save Changes
            </button>
          </div>
        </div>
      )}

      {/* company depatment add */}
      {companyInfoEdit === "addDepartment" && (
        <div className={a.modalBackground}>
          <div className={a.modalContainer}>
            <div className={a.titleCloseBtn}>
              <div className={a.modualTitleText}>Add New Department</div>
              <button
                onClick={() => {
                  closeModal(false);
                }}
              >
                X
              </button>
            </div>

            <div className={a.tagContiner}>
              {departmentList.map((dept: any) => (
                <div className={a.tag}>{dept.departmentName}</div>
              ))}
            </div>
            {/* search bar to add new departmentName*/}
            <input
              type="text"
              className={a.search}
              value={newDepartment}
              onChange={onChangeValue}
            />
            <p className={a.modualTitleText}>
              Double click on tag to add, and update one at the time
            </p>
            <div className={a.tagContiner}>
              {allDepartment
                .filter((dept: any) => {
                  const searchTerm = newDepartment.toLowerCase();
                  const departmentname = dept.departmentName.toLowerCase();
                  const isSelected = departmentList.some(
                    (deptart: any) => deptart.id === dept.id
                  );

                  return (
                    searchTerm &&
                    departmentname.startsWith(searchTerm) &&
                    !isSelected
                  );
                })
                .map((dept: any) => (
                  <div
                    className={a.tag}
                    onClick={() => {
                      onSearch(dept.departmentName);
                      //adding depatment on clicking the tag
                      // handleAddDepartment(dept.id, dept.departmentName);
                      handleDepartmentChanges(dept.id);
                    }}
                  >
                    {dept.departmentName}
                  </div>
                ))}
            </div>

            <button className={a.saveChanges} onClick={handleAdd}>
              Update Changes
            </button>
          </div>
        </div>
      )}

      {/* company depatment delete */}
      {companyInfoEdit === "deleteDepartment" && (
        <div className={a.modalBackground}>
          <div className={a.modalContainer}>
            <div className={a.titleCloseBtn}>
              <div className={a.modualTitleText}>Delete Department</div>
              <button
                onClick={() => {
                  closeModal(false);
                }}
              >
                X
              </button>
            </div>
            {/* displaying  department in Database */}
            <p className={a.modualTitleText}>
              Click on tag to delete department, and update one at the time
            </p>
            <div className={a.tagContiner}>
              {departmentList.map((dept: any) => (
                <div
                  className={a.tag}
                  onClick={() => {
                    handleDelete(dept.id);
                  }}
                >
                  {dept.departmentName}
                </div>
              ))}
            </div>

            <button className={a.saveChanges} onClick={handleDeleteDepartment}>
              Update Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditCompanyProfile;
