function insert(key, values = []) {
  if (!key || !values)
    throw new Error("Key and/or values to insert are not being setting!");

  return localStorage.setItem(key, JSON.stringify(values));
}

function select(key) {
  if (!key) throw new Error("Key to insert is not being setting!");

  const result = localStorage.getItem(key);
  return JSON.parse(result);
}

function update(key, newValues = []) {
  if (!key || !newValues)
    throw new Error("Key and/or values to insert are not being setting!");

  const myObj = select(key);
  let newObj = null;
  console.log(myObj);

  newValues.forEach((row, index) => {
    console.log(row);

    Object.entries(row).forEach((property, newValue) => {
      console.log(property);

      newObj = Object.values((curr) => {
        return curr[property] ? (curr[property] = newValue) : curr;
      });
    });
  });

  console.log(newValues);
  return insert(key, newObj);
}

function remove(key) {
  return localStorage.removeItem(key);
}

export default {
  insert,
  select,
  update,
  remove,
};
