const Joi = require("joi");
const validator = (schema) => (data) => 
    schema.validate(data, {abortEarly: false})
const postUpdateSchema = Joi.object({
    Brand: Joi.string().required(),
    Model: Joi.string().required(),
    Year: Joi.number().integer().min(1900).max((new Date()).getFullYear()).required(),
    Price: Joi.number().required(),
    Condition: Joi.string().valid('new', 'used').required(),
    Mileage: Joi.number().integer().min(0).required(),
    Location: Joi.string().required(),
    Seller: Joi.string().required()
});

const updateAndPostValidator = validator(postUpdateSchema);
module.exports = updateAndPostValidator;
