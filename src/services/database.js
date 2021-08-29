function insert(key, values = []) {
  if (!key || !values)
    throw new Error("Key and/or values to insert are not being setting!");

  return localStorage.setItem(key, JSON.stringify(values));
}

function select(key) {
  if (!key) 
    throw new Error("Key to insert is not being setting!");

  const result = localStorage.getItem(key);
  return JSON.parse(result);
}

function remove(key) {
  return localStorage.removeItem(key);
}

const exportedDatabase = {
  insert,
  select,
  remove,
};

export default exportedDatabase;