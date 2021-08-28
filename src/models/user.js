import db from "../services/database";

async function insertUser({ user, password }) {
  return db.insert("users", [
    {
      user,
      password,
    },
  ]);
}

export default {
  insertUser
};
