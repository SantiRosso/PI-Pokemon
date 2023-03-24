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

const createComment = async (text, userId) => {
  try {
    const comment = await Comment.create({
      where: {
        text,
      },
    });

    const user = await userId.findByPk(userId);

    user.addComment(comment);
  } catch (error) {
    throw new Error(error);
  }
};

const updateComment = async (id, text) => {
  try {
    const comment = Comment.findByPk(id);

    comment.text = text;
    comment.save();
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getComments, deleteComment, createComment, updateComment };
