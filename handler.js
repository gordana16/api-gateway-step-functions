'use strict';

exports.validate = async (event) => {
  console.log('validate data function', event);

  const { name, email, work } = event;

  if (name && email && work) {
    return {
      validated: true
    };
  } else {
    return {
      validated: false
    };
  }
};
