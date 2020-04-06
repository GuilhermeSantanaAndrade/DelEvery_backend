const routes = require("express").Router();
const routesProducts = require("./product/routesProducts");
const routesCompanies = require("./company/routesCompanies");

routes.get("/", (req, res) => {
  res.send(
    "Acesse a documentação em https://github.com/GuilhermeSantanaAndrade/DelEvery_backend"
  );
});
routes.use("/products", routesProducts);
routes.use("/companies", routesCompanies);

module.exports = routes;
