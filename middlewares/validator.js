const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const validateId = Joi.string().length(24).hex();
const validateURL = (value) => {
  if (!validator.isURL(value, { require_protocol: true })) {
    throw new Error('Неправильный формат ссылки');
  }
  return value;
};


const validateSignIn = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const validateSignUp = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    surname: Joi.string().min(2).max(30),
    phone: Joi.string().min(11).max(19),
    agency: Joi.string().min(2).max(30),
  }),
});

const validateUpDateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

   
const validateCreateCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    image: Joi.array().items(Joi.string()).required(),
    //image: Joi.string().required(),
    description: Joi.string().required().min(5).max(100000),
    adress: Joi.string().required(),
    price: Joi.number().required(),
    plotarea: Joi.string(),
    jurstatus: Joi.string(),
    material: Joi.string(),
    rooms: Joi.string().required(),
    cadastre: Joi.string(),
    district: Joi.string().required(),
    commission:Joi.string().required(),
    transaction: Joi.string().required(),
    floor: Joi.string(),
    metro: Joi.string(),
    roomarea: Joi.string(),
    deadline: Joi.string(),
    balcony: Joi.boolean().required(),
    elevator: Joi.boolean().required(),
    repair: Joi.boolean().required(),
    totalarea: Joi.number().required(),
    kitchenarea: Joi.number().required(),
    active: Joi.boolean(),
  }),
});

const validateCreateCommercialCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    image: Joi.array().items(Joi.string()).required(),
    //image: Joi.string().required(),
    description: Joi.string().required().min(5).max(100000),
    adress: Joi.string().required(),
    price: Joi.number().required(),
    access: Joi.string().required(),
    infrastructure: Joi.string().required(),
    entrance: Joi.string().required(),
    commission:Joi.string().required(),
    transaction: Joi.string().required(),
    floor: Joi.string().required(),
    metro: Joi.string().required(),
    parking: Joi.boolean().required(),
    totalarea: Joi.number().required(),
    active: Joi.boolean(),
  }),
});

const validateDeleteCard = celebrate({
  params: Joi.object().keys({
    cardId: validateId,
  }),
});

const validateDeleteCommercialCard = celebrate({
  params: Joi.object().keys({
    cardId: validateId,
  }),
});

module.exports = {
  validateUpDateUser,
  validateSignUp,
  validateSignIn,
  validateCreateCard,
  validateDeleteCard,
  validateCreateCommercialCard,
  validateDeleteCommercialCard,
};
