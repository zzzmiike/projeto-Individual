var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/cadastrar", function (req, res) {
    dashboardController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    dashboardController.entrar(req, res);
});