// Functions to CRUD ABTest

const models = require('../models');

const createABTest = async (req, res, next) => {
  console.log(req.body);
  try {
    const abtest = await models.ABTest.create(
      {
        ...req.body,
      },
      {
        association: [models.ABTest.Options],
        include: [models.ABTest.Options],
      }
    );
    res.json(abtest);
  } catch (error) {
    next(error);
  }
};

module.exports = { createABTest };
