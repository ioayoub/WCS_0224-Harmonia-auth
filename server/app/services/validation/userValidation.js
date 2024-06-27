const { z } = require("zod");

const userSchema = z.object({
  firstname: z.string().min(2),
  lastname: z.string().min(3),
  email: z.string().email(),
  password: z
    .string()
    .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/),
});

const validateUser = (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    userSchema.parse({firstname, lastname, email, password});

    next();
  } catch (e) {
    next(e);
  }
};

module.exports = validateUser;
