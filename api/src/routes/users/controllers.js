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

const createUser = async (
  name,
  email,
  password,
  image,
  country,
  age,
  sex,
  favType
) => {
  try {
    let allUsers = await getUsers();
    allUsers.map((e) => {
      if (e.name === name) {
        return res.send({ message: "error name" });
      }
      if (e.email === email) {
        return res.send({ message: "error email" });
      }
    });
    await User.create({
      name,
      email,
      password,
      image,
      country,
      age,
      sex,
      favType,
    });
  } catch (error) {
    throw new Error(error);
  }
};

const updateUser = async (
  name,
  email,
  password,
  image,
  country,
  age,
  sex,
  favType
) => {
  try {
    let user = await User.findOne({
      where: {
        id,
      },
    });

    user.name = name;
    user.email = email;
    user.password = password;
    user.image = image;
    user.country = country;
    user.age = age;
    user.sex = sex;
    user.favType = favType;
    user.save();
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getUser, deleteUser, getUsers, createUser, updateUser };
