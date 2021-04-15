const Joi = require('joi');

exports.validate = function( data ){
    const categorierSchemaValidation = Joi.object({
        title: Joi.string().required()
    });
    return categorierSchemaValidation.validate(data);
}