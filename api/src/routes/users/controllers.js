const { User } = require("../../db.js");

const getUser = async (id) => {
  try {
    const user = await User.findOne({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const getUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteUser = async (id) => {
  try {
    await User.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getUser, deleteUser, getUsers };
