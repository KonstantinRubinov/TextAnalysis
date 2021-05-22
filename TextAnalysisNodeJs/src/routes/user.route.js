const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { check } = require('express-validator');
const authorize = require("../middlewares/auth");

router.route("/users").get(authorize,userController.GetAllUsers);
router.route("/users/:userID").get(authorize,userController.GetOneUser);
router.route("/users/check",
    [
        check('userNickName').not().isEmpty().isLength({ min: 2, max: 70 }).withMessage('Nick Name must be atleast 2-40 characters long'),
        check('userPassword', 'Password is required').not().isEmpty()
    ]
).post(authorize,userController.ReturnUserByNamePassword);
router.route("/users",
    [
        check('userID').not().isEmpty().isLength({ min: 8 }).withMessage('Id must be atleast 8 characters long'),
        check('userFirstName').not().isEmpty().isLength({ min: 2, max: 40 }).withMessage('First Name must be atleast 2-40 characters long'),
        check('userLastName').not().isEmpty().isLength({ min: 2, max: 40 }).withMessage('Last Name must be atleast 2-40 characters long'),
        check('userNickName').not().isEmpty().isLength({ min: 2, max: 40 }).withMessage('Nick Name must be atleast 2-40 characters long'),
        check('userPassword', 'Password is required').not().isEmpty(),
        check('userEmail', 'Email is required').not().isEmpty(),
        check('userGender', 'Gender is required').not().isEmpty(),
    ]
).post(userController.AddUser);
router.route("/users/:userID").put(authorize,userController.UpdateUser);
router.route("/users/:userID").delete(userController.DeleteUser);
router.route("/users").delete(userController.DeleteUsers);

module.exports = router;