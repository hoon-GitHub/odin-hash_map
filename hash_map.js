function HashMap () {

  const CAPACITY = 16;
  let buckets = new Array(CAPACITY).fill(null);

  function hash (key) {
    let hashCode = 0;
        
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % CAPACITY;
    }

    return hashCode;
  }

  // just a utility to display full map
  function getAll () {
    console.log(buckets);
  }

  function set (key, value) {
    const index = hash(key);
    try {
      if (index < 0 || index >= buckets.length) {
        throw new Error("Trying to access index out of bound");
      }

      if (buckets[index] === null) {
        buckets[index] = value;
      } else {
        throw new Error("Collision");
      }
    } catch (error) {
      console.error(error);
    }
  }

  function get (key) {
    const index = hash(key);
    try {
      if (index < 0 || index >= buckets.length) {
        throw new Error("Trying to access index out of bound");
      }
    } catch (error) {
      console.error(error);
    }
    return buckets[index];
  }

  function has (key) {
    const index = hash(key);
    try {
      if (index < 0 || index >= buckets.length) {
        throw new Error("Trying to access index out of bound");
      }
    } catch (error) {
      console.error(error);
    }
    return (buckets[index] !== null);
  }

  function remove (key) {
    const index = hash(key);
    try {
      if (index < 0 || index >= buckets.length) {
        throw new Error("Trying to access index out of bound");
      }
    } catch (error) {
      console.error(error);
    }
    if (buckets[index] !== null) {
      buckets[index] = null;
      return true;
    } else {
      return false
    }
  }

  return { hash, getAll, set, get, has, remove }

}

const map = HashMap();
map.set("abc", 100);
map.set("def", 200);
map.set("xyz", 300);
map.getAll();
console.log("Value for key \"abc\": " + map.get("abc"));
console.log("Is key \"def\" in the hash map? " + map.has("def"));
console.log(map.remove("abc"));
map.getAll();
