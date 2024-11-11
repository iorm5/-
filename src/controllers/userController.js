export const getUsers = async (req, res, next) => {
  try {
    res.json({ users: [] });
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    res.status(201).json({ message: 'User created', user: { name, email } });
  } catch (error) {
    next(error);
  }
};