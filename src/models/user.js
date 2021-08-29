import db from "../services/database";

function insertUser({ user, password }) {
  const users = db.select("users");

  let newUsers = [];
  if (users) 
    newUsers = [...users];

  newUsers.push({
    user,
    password,
  });

  return db.insert("users", newUsers);
}

function findUser(user) {
  const users = db.select("users");

  let myUser = null;
  if (users && users.length > 0) {
    const userFound = users.filter((u) => {
      console.log(u, user);
     return u.user === user
    });
    myUser = userFound[0];
  }

  return myUser;
}

function insertSession(user){
  return db.insert("session", user);
}

function removeSession(user){
  return db.remove("session");
}

export default {
  insertUser,
  findUser,
  insertSession,
  removeSession
};
