import Joi from "joi";
import modelUser from "../models/user";
import helperEcrypt from "../helpers/crypto";

async function register({ user, password, passwordConfirm }) {
  const schema = Joi.object({
    user: Joi.string().required(),
    password: Joi.string()
      .regex(
        /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
      )
      .required(),
    passwordConfirm: Joi.ref("password"),
  });

  const validation = await schema.validate({ user, password, passwordConfirm });
  console.log(validation);
  if (validation.error) throw new Error("Usuário e/ou senha inválidos!");

  const encryptedPassword = await helperEcrypt.encrypt(password);

  return modelUser.insertUser({ user, password: encryptedPassword });
}

export default { register };
