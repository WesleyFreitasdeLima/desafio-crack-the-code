import Joi from "joi";
import modelUser from "../models/user";
import helperEcrypt from "../helpers/crypto";

async function register(payload = {}) {
  const schema = Joi.object({
    user: Joi.string().required(),
    password: Joi.string()
      .regex(
        /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
      )
      .required(),
    passwordConfirm: Joi.ref("password"),
  });

  const validation = schema.validate(payload);
  if (validation.error) 
    throw new Error("Usuário e/ou senha inválidos!");

  const newUser = validation.value;

  const userExists = modelUser.findUser(newUser.user);
  if (userExists) 
    throw new Error(`Usuário "${newUser.user}" já existe!`);

  const encryptedPassword = await helperEcrypt.encrypt(newUser.password);

  return modelUser.insertUser({
    user: newUser.user,
    password: encryptedPassword,
  });
}

async function login(payload = {}) {
  const schema = Joi.object({
    user: Joi.string().required(),
    password: Joi.string()
      .regex(
        /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
      )
      .required(),
  });

  const validation = schema.validate(payload);
  if (validation.error) 
    throw new Error("Usuário e/ou senha inválidos!");

  const userLogin = validation.value;

  const userExists = modelUser.findUser(userLogin.user);
  if (!userExists) throw new Error(`Usuário "${userLogin.user}" não existe!`);

  const pwdValidation = await helperEcrypt.validate(
    userLogin.password,
    userExists.password
  );
  if (!pwdValidation) 
    throw new Error(`Senha incorreta!`);

  modelUser.insertSession(userLogin.user);

  return true;
}

function logout() {
  return modelUser.removeSession();
}

const exportedController = { register, login, logout };

export default exportedController;
