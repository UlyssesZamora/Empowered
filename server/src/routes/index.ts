import { Router } from "express";
import { landingPage } from "./landingPage";
import { userCreation } from "./userCreation";
import { logIn } from "./logIn";
import { auth } from "./auth";
import { testProfile } from "./testProfile";
import { test } from "./test";
import { validation } from "./validation";
import { getProfileData } from "./getProfileData";
import { userReviews } from "./userReviews";
import { updateProfilePhoto } from "./updateProfilePhoto";
import { companyLogin } from "./companyLogin";
import { companyCreation } from "./companyCreation";
import { getCompanyId } from "./getCompanyId";
import { getCompanyProfileData } from "./getCompanyProfileData";
import { updateCompanyLogo } from "./updateCompanyLogo";
import { updateCompanyInfo } from "./updateCompanyInfo";
import { updateBioAndSkills } from "./updateBioAndSkills";
import { editIntro } from "./editIntro";
import { getSkills } from "./getSkills";
import { getValues } from "./getValues";
import { getInterests } from "./getInterests";
import { getAllSkills } from "./getAllSkills";
import { getAllInterests } from "./getAllInterests";
import { getAllValues } from "./getAllValues";
import { AddUserInterest } from "./addUserInterest";
import { addUserValues } from "./addUserValues";
import { getPendingFollowers } from "./getPendingFollowers";
import { acceptFollowers } from "./acceptFollower";
import { newConnection } from "./newConnection";
import { checkFollow } from "./checkFollow";
import { updateCompanyMission } from "./updateCompanyMission";
import { getAllPros } from "./getAllPros";
import { getPros } from "./getPros";
import { getCons } from "./getCons";
import { getCompanyReviews } from "./getCompanyReviews";
import { getDepartmentReviews } from "./getDepartmentReviews";
import { getDepartment } from "./getDepartment";
import { editDepartment } from "./editDepartment";
import { getAllDepartment } from "./getAllDepartment";
import { addDepartment } from "./addDepartment";
import { deleteDepartment } from "./deleteDepartment";
import { deleteDepartmentReview } from "./deleteDepartmentReview";
import { deleteProfilePhoto } from "./deleteProfilePhoto";

export const routes: Router = Router();

routes.use(test);
routes.use(landingPage);
routes.use(userCreation);
routes.use(getProfileData);
routes.use(validation);
routes.use(logIn);
routes.use(auth);
routes.use(testProfile);
routes.use(userReviews);
routes.use(updateProfilePhoto);
routes.use(companyLogin);
routes.use(companyCreation);
routes.use(getCompanyId);
routes.use(getCompanyProfileData);
routes.use(updateCompanyLogo);
routes.use(getPendingFollowers)
routes.use(acceptFollowers)
routes.use(newConnection)
routes.use(checkFollow)
routes.use(updateBioAndSkills);
routes.use(editIntro);
routes.use(getSkills);
routes.use(getValues);
routes.use(getInterests);
routes.use(getAllSkills);
routes.use(getAllInterests);
routes.use(getAllValues);
routes.use(AddUserInterest);
routes.use(addUserValues);
routes.use(updateCompanyInfo);
routes.use(updateCompanyMission);
routes.use(getAllPros);
routes.use(getPros);
routes.use(getCons);
routes.use(getCompanyReviews);
routes.use(getDepartmentReviews);
routes.use(getDepartment);
routes.use(editDepartment);
routes.use(getAllDepartment);
routes.use(addDepartment);
routes.use(deleteDepartment);
routes.use(deleteDepartmentReview);
routes.use(deleteProfilePhoto)