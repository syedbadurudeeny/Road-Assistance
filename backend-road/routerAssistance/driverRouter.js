const express = require("express");
const { registerDriver , loginDriver} = require("../controllerAsistance/driverController");
const router = express.Router();


router.post("/register/driver",registerDriver);
router.post("/login/driver",loginDriver);

module.exports = router;