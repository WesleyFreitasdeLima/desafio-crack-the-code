import Joi from "joi";
import modelUser from "../models/user";

async function register({ user, password, passwordConfirm }) {
  const schema = Joi.object({
    user: Joi.string().required(),
    password: Joi.string()
      .pattern(
        new RegExp(
          /"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"/
        )
      )
      .required(),
    passwordConfirm: Joi.ref("password")
  });

  const validation = await schema.validate({ user, password, passwordConfirm });
  if (validation.error)
    throw new Error("Usuário e/ou senha inválidos!")

  return modelUser.insertUser({ user, password });
}

export default { register };
