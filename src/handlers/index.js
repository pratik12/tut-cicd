'use strict';

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

module.exports.luckyNumber = async (event) => {
  
  const upperLimit = 100;
  const number = getRandomInt(0, upperLimit);
  const result = JSON.stringify({
      version: '1.0',
      number:`Your lucky number is ${number}`
    })
  const response = {
    statusCode: 200,
    body: result
  }
  return response
};