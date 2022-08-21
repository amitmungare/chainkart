const express = require("express");
const router = express.Router();
const {
  registerCompany,
  loginCompany,
  logout,
  forgotPassword,
  resetPassword,
  getCompanyDetails,
  updatePassword,
  updateProfile,
  getAllCompany,
  getSingleCompany,
  deleteCompany,
  getAllTransactions,
} = require("../controllers/companyController");

const {
  isAuthenticatedCompany,
  authorizeRoles,
} = require("../middleware/auth");

router.route("/company/register").post(registerCompany);

router.route("/company/login").post(loginCompany);

router.route("/company/getAllT").post(getAllTransactions);

router.route("/company/password/forgot").post(forgotPassword);

router.route("/company/password/reset/:token").put(resetPassword);

router.route("/company/logout").get(logout);

router.route("/company/me").get(isAuthenticatedCompany, getCompanyDetails);

router.route("/company/password/update").put(updatePassword);

router.route("/company/me/update").put(isAuthenticatedCompany, updateProfile);

router
  .route("/company/companys")
  .get(isAuthenticatedCompany, authorizeRoles("company"), getAllCompany);

router
  .route("/company/company/:id")
  .get(isAuthenticatedCompany, authorizeRoles("company"), getSingleCompany)
  .delete(isAuthenticatedCompany, authorizeRoles("company"), deleteCompany);

module.exports = router;
