const sha256 = require('js-sha256');

// Do not change this
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.data = new Array(numBuckets).fill(null);
    this.count = 0;
    this.capacity = numBuckets;
    //console.log(this.data);

  }

  hash(key) {
    let sha = sha256(key);
    let eightDig = sha.slice(0, 8);
    return parseInt(eightDig, 16);
  }

  hashMod(key) {
    return this.hash(key) % this.data.length;
  }

  insert(key, value) {
    // fill this in
  }

}


module.exports = HashTable;
