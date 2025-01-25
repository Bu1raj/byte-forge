// This file contains the utility functions for the cache which is used to store the responses of the AI assistant based on the test case and the type of error.

class Cache {
  constructor(limit = 5) {
    this.cache = new Map();
    this.limit = limit;
  }

  //Map maintains the insertion order
  // implementing LRU cache
  add(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    // the above code is to refresh the key if it already exists

    if (this.cache.size > this.limit) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }

    console.log(this.cache); //temporary
  }

  get(key) {
    if (this.cache.has(key)) {
      console.log("found in cache"); //temporary

      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value); // refreshing the key
      return value;
    }
    return null;
  }

  delete(key) {
    this.cache.delete(key);
  }

  clear() {
    this.cache.clear();
  }

  size() {
    return this.cache.size;
  }
}

export default Cache;
