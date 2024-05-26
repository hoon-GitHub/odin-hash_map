function HashMap () {

  let capacity = 16;
  const loadFactor = 0.75;
  let buckets = new Array(capacity).fill(null);

  function hash (key) {
    let hashCode = 0;
        
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  }

  // just a utility to display full map
  function getAll () {
    console.log(buckets);
  }

  function set (key, value) {
    const index = hash(key);
    if (this.length() / capacity > loadFactor) {
      console.log(`Increasing capacity from ${capacity} to ${capacity * 2}.`);
      let temp = new Array(capacity).fill(null);
      buckets = buckets.concat(temp);
      capacity *= 2;
    }
    try {
      if (index < 0 || index >= buckets.length) {
        throw new Error("Trying to access index out of bound");
      }

      if (buckets[index] === null) { // if bucket is empty, simply fill it
        buckets[index] = { key, value };
      } else if (buckets[index].key === key) { // if the key is already there, just update the value
        buckets[index].value = value;
      } else { // otherwise, it is a collision - different keys, but same hash value
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
    return buckets[index].value;
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
    return (buckets[index].key === key);
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

  function length () {
    let count = 0;
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i] !== null) count++;
    }
    return count;
  }

  function clear () {
    buckets = new Array(capacity).fill(null);
  }

  function keys () {
    let temp = [];
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i] !== null) temp.push(buckets[i].key);
    }
    return temp;
  }

  function values () {
    let temp = [];
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i] !== null) temp.push(buckets[i].value);
    }
    return temp;
  }

  function entries () {
    let temp = [];
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i] !== null) temp.push([ buckets[i].key, buckets[i].value ]);
    }
    return temp;
  }

  return { hash, getAll, set, get, has, remove, length, clear, keys, values, entries }

}

const map = HashMap();
map.set("abc", 100);
map.set("def", 200);
map.set("xyz", 300);
console.log(map.entries());
console.log("Value for key \"abc\": " + map.get("abc"));
console.log("Is key \"def\" in the hash map? " + map.has("def"));
console.log(map.remove("abc"));
console.log(map.entries());
console.log("Hash map size: " + map.length());
map.set("abcd", 110);
map.set("ghi", 250);
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
console.log("Hash map size: " + map.length());
map.set("j", 310);
map.set("k", 320);
map.set("l", 330);
map.set("m", 340);
map.set("n", 350);
map.set("o", 360);
map.set("p", 370);
map.set("q", 380);
map.set("s", 390);
map.set("t", 400);
console.log(map.entries());
console.log("Hash map size: " + map.length());
map.getAll();
