import Joi from "joi";

const updateConferirQuebraCaixaSchema = Joi.object({

    IDFUNCIONARIO: Joi.number().required()
        .messages({
            "string.base": "IDFUNCIONARIO must be a string",
            "any.required": "IDFUNCIONARIO is required field"
        }),
    STCONFERIDO: Joi.string().required()
        .messages({
            "string.base": "STCONFERIDO must be a string",
            "any.required": "STCONFERIDO is required field"
        }),
    IDQUEBRACAIXA: Joi.number().required()
        .messages({
            "number.base": "IDQUEBRACAIXA must be a number",
            "any.required": "IDQUEBRACAIXA is required field"
        })



});

export default updateConferirQuebraCaixaSchema;

