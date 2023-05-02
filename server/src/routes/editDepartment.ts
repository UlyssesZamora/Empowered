import { Router } from "express";
import { pool } from "../index";

let sql = "";

export const editDepartment: Router = Router();

editDepartment.post("/editDepartment", async (req, res) => {
  const companyId = req.body.companyId;
  const department = JSON.parse(req.body.departmentName);
  console.log(department);
  const departmentName = Object.values(department).map((value: any) => [
    value.id,
    companyId,
  ]); // Update to include userId in the values

  // Delete existing user interests from userskill table
  let sql = "DELETE FROM companydepartment WHERE companyId  = ?";
  pool.query(sql, [companyId], (err, deleteResults) => {
    if (err) {
      console.error(
        "Error deleting company department from companydepartment table:",
        err
      );
      res.status(500).json({
        error:
          "Failed to delete company department from companydepartment table",
      });
    } else {
      // Insert new user interests into userinterest table
      sql = "INSERT INTO companydepartment (departmentId, companyId) VALUES ?";
      pool.query(sql, [departmentName, companyId], (err, insertResults) => {
        if (err) {
          console.error(
            "Error inserting user interests into userinterest table:",
            err
          );
          res.status(500).json({
            error:
              "Failed to insert company department into companydepartment table",
          });
        } else {
          console.log("Successfully updated company department");
          res
            .status(200)
            .json({ success: "Successfully updated company department" });
        }
      });
    }
  });
});
