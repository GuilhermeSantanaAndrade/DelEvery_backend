const controllerProducts = require("../../controllers/product/controllerProducts");
const routes = require("express").Router();

routes.get("/", controllerProducts.listAll);
routes.get("/:guid", controllerProducts.listOne);
routes.post("/", controllerProducts.create);
routes.put("/:guid?", controllerProducts.update);
routes.delete("/:guid?", controllerProducts.delete);

module.exports = routes;
