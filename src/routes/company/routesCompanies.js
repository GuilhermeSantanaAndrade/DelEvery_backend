const controllerCompanies = require("../../controllers/company/controllerCompanies");
const routes = require("express").Router();

routes.get("/", controllerCompanies.listAll);
routes.get("/:guid", controllerCompanies.listOne);
routes.post("/", controllerCompanies.create);
routes.put("/:guid?", controllerCompanies.update);
routes.delete("/:guid?", controllerCompanies.delete);

module.exports = routes;
