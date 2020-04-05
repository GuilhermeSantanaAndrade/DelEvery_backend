const routes = require("express").Router();
const routesProducts = require("./product/routesProducts");

routes.get("/", (req, res) => {
  res.send(
    "Acesse a documentação em https://github.com/GuilhermeSantanaAndrade/DelEvery_backend"
  );
});
routes.use("/products", routesProducts);

module.exports = routes;
