'use strict';

const UserModel = require('../../../models/user-model');


async function getUserProfile(req, res, next) {
  const { claims } = req;

  try {
    const data = await UserModel.findOne({ uuid: claims.uuid }, '-_id -__v').lean();
    return res.send(data);
  } catch (e) {
    return res.status(500).send();
  }
}


module.exports = getUserProfile;
