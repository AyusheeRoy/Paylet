const express = require('express');
const userRouter = require("./user", userRouter);
const accountRouter = require("./account");

const router = express.Router();

router.use("/user", useRouter);
router.use("/account", accountRouter);

module.exports = router;