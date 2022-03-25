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
    let index = this.hashMod(key);
    let keyPair = new KeyValuePair(key, value);
    if(this.data[index]){
      keyPair.next = this.data[index];
      this.data[index] = keyPair;
    }
    else{
      this.data[index] = keyPair;
    }

    //console.log(this.data);
    this.count++;
  }

}


module.exports = HashTable;
