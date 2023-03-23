const { Comment } = require("../../db.js");

const getComments = async () => {
  try {
    const result = await Comment.findAll();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteComment = async (id) => {
  try {
    await Comment.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getComments, deleteComment };
