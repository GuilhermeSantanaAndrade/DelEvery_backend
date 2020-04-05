const { celebrate, Joi, Segments } = require("celebrate");

module.exports.validate_create = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().max(100).required(),
    description: Joi.string().max(254),
    external_description: Joi.string().min(1).max(254).required(),
    price: Joi.number().required(),
    tipo: Joi.number().required(),
    peso: Joi.number(),
    altura: Joi.number(),
    largura: Joi.number(),
  }),
});
