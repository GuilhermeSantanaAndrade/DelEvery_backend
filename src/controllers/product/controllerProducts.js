const connection = require("../../database/connection");
//const uuidv4 = require("uuid/v4");
const { v4 } = require("uuid");
const {
  prepareSuccess200,
  throwError,
  throwRefuse401,
} = require("../../helpers/responses_struct");
const { dateToMoment } = require("../../helpers/functions");

class controllerProduct {
  listAll = async (req, res) => {
    try {
      const result = await connection("products").select("*");
      res.json(prepareSuccess200(result));
    } catch (error) {
      throwError(res, error);
    }
  };

  listOne = async (req, res) => {
    try {
      let { guid } = req.params;

      const result = await connection("products")
        .select("*")
        .where({ guid: guid });
      res.json(prepareSuccess200(result));
    } catch (error) {
      throwError(res, error);
    }
  };

  create = async (req, res) => {
    try {
      let {
        name,
        description,
        external_description,
        price,
        tipo,
        peso,
        altura,
        largura,
      } = req.body;

      let guid = v4();

      const [result] = await connection("products").insert({
        created_at: dateToMoment(new Date()),
        updated_at: dateToMoment(new Date()),
        guid: guid,
        name: name,
        description: description,
        external_description: external_description,
        price: price,
        tipo: tipo,
        peso: peso,
        altura: altura,
        largura: largura,
      });

      res.json(
        prepareSuccess200({
          id: result,
          guid: guid,
        })
      );
    } catch (error) {
      throwError(res, error);
    }
  };

  update = async (req, res) => {
    try {
      let {
        id,
        guid,
        name,
        description,
        external_description,
        price,
        tipo,
        peso,
        altura,
        largura,
      } = req.body;

      if (!guid && req.params) {
        guid = req.params.guid;
      }

      if (!guid && !id) {
        throwRefuse401(res, "Não foi informado 'guid' ou 'id' na requisição.");
        return;
      }

      let where = {};

      if (id) {
        where = {
          id: id,
        };
      } else {
        where = {
          guid: guid,
        };
      }

      const result = await connection("products")
        .update({
          updated_at: dateToMoment(new Date()),
          name: name,
          description: description,
          external_description: external_description,
          price: price,
          tipo: tipo,
          peso: peso,
          altura: altura,
          largura: largura,
        })
        .where(where);

      res.json(
        prepareSuccess200({
          updatedRecs: result,
          guid: guid,
        })
      );
    } catch (error) {
      throwError(res, error);
    }
  };

  delete = async (req, res) => {
    try {
      let { guid, id } = req.body;

      if (!guid && req.params) {
        guid = req.params.guid;
      }

      if (!guid && !id) {
        throwRefuse401(res, "Não foi informado 'guid' ou 'id' na requisição.");
        return;
      }

      let where = {};

      if (id) {
        where = {
          id: id,
        };
      } else {
        where = {
          guid: guid,
        };
      }

      const result = await connection("products").delete().where(where);

      res.json(
        prepareSuccess200({
          deletedRecs: result,
          guid: guid,
        })
      );
    } catch (error) {
      throwError(res, error);
    }
  };
}

module.exports = new controllerProduct();
