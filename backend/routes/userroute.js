const express = require("express");

const router = express.Router();

//importing controllers from 'products.js' file.
const userController = require("../controller/user");

//router to GET(render) add-products on path "/add-product" using controller "getAddProduct" from "controlller/admin.js"
router.post("/user/add-user", userController.postAddUser);

//router to GET(render) add-products on path "/add-product" using controller "getAddProduct" from "controlller/admin.js"
router.get("/user/get-user", userController.getUsers);

//router to GET(render) add-products on path "/add-product" using controller "getAddProduct" from "controlller/admin.js"
// router.delete("/user/delete-user/:userId", userController.postDeleteUser);

// router.put("/user/edit-user/:userId", userController.postEditUser);

module.exports = router;
