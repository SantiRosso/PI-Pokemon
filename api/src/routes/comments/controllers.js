const { Comment } = require("../../db.js");

const getComments = async () => {
  try {
    const result = await Comment.findAll();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getComments };
