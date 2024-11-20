import {
  getUsersById,
  insertUser,
  updateUser,
  deleteUser,
} from "../database/query.js";

const getDataController = async (req, res) => {
  let userId = req.params.id;
  try {
    const user = await getUsersById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user", error: error.message });
  }
};

const insertUserController = async (req, res) => {
  let { user_name, password } = req.body;
  try {
    if (!user_name || !password) {
      return res.status(400).json({
        message: "Username or password is missing",
      });
    }
    await insertUser(user_name, password);

    res.json({
      message: "User has been added successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: `User could not be added due to an error: ${error.message}`,
    });
  }
};

const updateUserController = async (req, res) => {
  let userId = req.params.id;
  let { user_name, password } = req.body;
  try {
    if (!userId) {
      res.json({
        message: "You must add an ID",
      });
    }
    if (!user_name || !password) {
      return res.status(400).json({
        message: "Username or password is missing",
      });
    }
    await updateUser(userId, user_name, password);
    res.json({
      message: "User has been Updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: `User could not be Updated due to an error: ${error.message}`,
    });
  }
};

const deleteUserController = async (req, res) => {
  let userId = req.params.id;
  try {
    if (!userId) {
      res.json({
        message: `You miss user ID`,
      });
    }

    await deleteUser(userId);

    res.json({
      message: "User Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: `User could not be Removed due to an error: ${error.message}`,
    });
  }
};

export {
  getDataController,
  insertUserController,
  updateUserController,
  deleteUserController,
};
