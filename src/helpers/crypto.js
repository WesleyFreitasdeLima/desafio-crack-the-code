import bcrypt from "bcryptjs";

function encrypt(value) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(value, 14, (err, hash) => {
      if (err) return reject(err);

      return resolve(hash);
    });
  });
}

function validate(value, hash) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(value, hash, (err, success) => {
      if (err) 
        return reject(err);
      return resolve(success);
    });
  });
}

const exportedHelper = {
  encrypt,
  validate,
};

export default exportedHelper;
