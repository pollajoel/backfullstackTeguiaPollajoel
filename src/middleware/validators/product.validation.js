const Joi = require('joi');

exports.validate = function( data ){
    const productSchemaValidation = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        price:Joi.number().min(1).required(),
        image:Joi.string().required()
    });
    return productSchemaValidation.validate(data);
}