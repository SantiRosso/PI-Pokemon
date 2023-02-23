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

module.exports = { getUser };
