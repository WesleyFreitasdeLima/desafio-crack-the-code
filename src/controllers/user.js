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
  if (validation.error) throw new Error("Usuário e/ou senha inválidos!");

  const userExists = modelUser.findUser(user);
  if (userExists) throw new Error(`Usuário "${user}" já existe!`);

  const encryptedPassword = await helperEcrypt.encrypt(password);

  return modelUser.insertUser({ user, password: encryptedPassword });
}

async function login({ user, password }) {
  const schema = Joi.object({
    user: Joi.string().required(),
    password: Joi.string()
      .regex(
        /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
      )
      .required(),
  });

  const validation = await schema.validate({ user, password });
  if (validation.error) throw new Error("Usuário e/ou senha inválidos!");

  const userExists = modelUser.findUser(user);
  if (!userExists) throw new Error(`Usuário "${user}" não existe!`);

  const pwdValidation = await helperEcrypt.validate(
    password,
    userExists.password
  );
  if (!pwdValidation) throw new Error(`Senha inválida!`);

  modelUser.insertSession(user);

  return true;
}

function logout() {
  return modelUser.removeSession();
}

export default { register, login, logout };
