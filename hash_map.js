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

    // only use the provided range
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    if (buckets[index] === null) {
      buckets[index] = value;
    } else {
      throw new Error("Collision");
    }
  }

  function get (key) {
    const index = hash(key);

    // only use the provided range
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    
    return buckets[index];
  }

  return { hash, getAll, set, get }

}

const map = HashMap();
map.set("abc", 100);
map.set("def", 200);
map.set("xyz", 300);
map.getAll();
console.log("Value for key \"abc\": " + map.get("abc"));
