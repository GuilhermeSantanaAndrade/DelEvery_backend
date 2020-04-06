const controllerCustomers = require("../../controllers/customer/controllerCustomers");
const routes = require("express").Router();

routes.get("/", controllerCustomers.listAll);
routes.get("/:guid", controllerCustomers.listOne);
routes.post("/", controllerCustomers.create);
routes.put("/:guid?", controllerCustomers.update);
routes.delete("/:guid?", controllerCustomers.delete);

module.exports = routes;
