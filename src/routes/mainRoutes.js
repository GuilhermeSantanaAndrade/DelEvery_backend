const routes = require("express").Router();
const routesProducts = require("./product/routesProducts");
const routesCompanies = require("./company/routesCompanies");
const routesCustomers = require("./customer/routesCustomers");

routes.get("/", (req, res) => {
  res.send(
    "Acesse a documentação em https://github.com/GuilhermeSantanaAndrade/DelEvery_backend"
  );
});
routes.use("/products", routesProducts);
routes.use("/companies", routesCompanies);
routes.use("/customers", routesCustomers);

module.exports = routes;
