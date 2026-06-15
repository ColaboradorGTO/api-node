import Joi from 'joi';

export const createProdutoPromocaoSchema = Joi.object({

    DSPROMO: Joi.string().required()
        .messages({
            'string.base': 'DSPROMO deve ser uma string',
            'any.required': 'DSPROMO é obrigatório',
        }),

    VRPERCDESCONTO: Joi.number().required()
        .messages({
            'number.base': 'IDGRUPOEMPRESARIAL deve ser um número',
            'any.required': 'IDGRUPOEMPRESARIAL é obrigatório',
        }),

    VRPRECODESCONTO: Joi.number().required()
        .messages({
            'number.base': 'NUNCM deve ser um número',
            'any.required': 'NUNCM é obrigatório',
        }),

    VRAPARTIRDE: Joi.number().required()
        .messages({
            'number.base': 'NUCEST deve ser um número',
            'any.required': 'NUCEST é obrigatório',
        }),

    VRLIMITEDE: Joi.number().required()
        .messages({
            'number.base': 'NUCST_ICMS deve ser um número',
            'any.required': 'NUCST_ICMS é obrigatório',
        }),

    QTDAPARTIRDE: Joi.string().required()
        .messages({
            'string.base': 'NUCFOP deve ser um número',
            'any.required': 'NUCFOP é obrigatório',
        }),

    QTDLIMITEDE: Joi.string().required()
        .messages({
            'string.base': 'PERC_OUT deve ser um número',
            'any.required': 'PERC_OUT é obrigatório',
        }),

    DTINICIOPROMO: Joi.string().required()
        .messages({
            'string.base': 'NUCODBARRAS deve ser uma string',
            'any.required': 'NUCODBARRAS é obrigatório',
        }),

    DTFIMPROMO: Joi.string().required()
        .messages({
            'string.base': 'DSNOME deve ser uma string',
            'any.required': 'DSNOME é obrigatório',
        }),

    STATIVO: Joi.string().required()
        .messages({
            'string.base': 'STGRADE deve ser uma string',
            'any.required': 'STGRADE é obrigatório',
        }),

    IDGRUPO: Joi.number().required()
        .messages({
            'number.base': 'IDGRUPO deve ser um número',
            'any.required': 'IDGRUPO é obrigatório',
        }),

    PRODUTOS: Joi.array().required()
        .messages({
            'string.base': 'PRODUTOS deve ser uma array',
            'any.required': 'PRODUTOS é obrigatório',
        }),

    EMPRESAS: Joi.array().required()
        .messages({
            'string.base': 'EMPRESAS deve ser uma array',
            'any.required': 'EMPRESAS é obrigatório',
        }),

});