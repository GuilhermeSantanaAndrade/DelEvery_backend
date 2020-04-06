const connection = require("../../database/connection");
const uuidv4 = require("uuid/v4");
const {
  prepareSuccess200,
  throwError,
  throwRefuse401,
} = require("../../helpers/responses_struct");

class controllerCompany {
  listAll = async (req, res) => {
    try {
      const result = await connection("companies").select("*");
      res.json(prepareSuccess200(result));
    } catch (error) {
      throwError(res, error);
    }
  };

  listOne = async (req, res) => {
    try {
      let { guid } = req.params;

      const result = await connection("companies")
        .select("*")
        .where({ guid: guid });
      res.json(prepareSuccess200(result));
    } catch (error) {
      throwError(res, error);
    }
  };

  create = async (req, res) => {
    try {
      let { name, description, phone } = req.body;

      let guid = uuidv4();

      const [result] = await connection("companies").insert({
        guid: guid,
        name: name,
        description: description,
        phone: phone,
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
      let { guid, id, name, description, phone } = req.body;

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

      const result = await connection("companies")
        .update({
          guid,
          id,
          name,
          description,
          phone,
        })
        .where(where);

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

      const result = await connection("companies").delete().where(where);

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
}

module.exports = new controllerCompany();
