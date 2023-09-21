function myEach(collection, callback) {
    if (typeof collection === 'object') {
      for (const key in collection) {
        const value = collection[key];
          alert(value);
        callback(key, value);
      }
    } else if (Array.isArray(collection)) {
      for (const element of collection) {
          alert(element);
        callback(element);
      }
    } 
  
    return collection;
  }


  function myMap(collection, callback) {
    const newCollection = [];
  
    if (typeof collection === 'object') {
      for (const key in collection) {
        const value = collection[key];
        const transformedValue = callback(value, key);
        newCollection.push(transformedValue);
      }
    } else if (Array.isArray(collection)) {
      for (const element of collection) {
        const transformedValue = callback(element);
        newCollection.push(transformedValue);
      }
    } else {
      throw new TypeError('Collection must be an object or an array.');
    }
  
    return newCollection;
  }

  function myReduce(collection, callback, acc) {
    if (acc === undefined) {
      if (Array.isArray(collection)) {
        acc = collection[0];
        collection = collection.slice(1);
      } else if (typeof collection === 'object') {
        for (const key in collection) {
          acc = collection[key];
          break;
        }
        delete collection[key];
      } else {
        throw new TypeError('Collection must be an object or an array.');
      }
    }
  
    for (const element of collection) {
      acc = callback(acc, element, collection);
    }
  
    return acc;
  }

  function myFind(collection, predicate) {
    for (const element of collection) {
      if (predicate(element)) {
        return element;
      }
    }
  
    return undefined;
  }

  function myFilter(collection, predicate) {
    const filteredCollection = [];
  
    for (const element of collection) {
      if (predicate(element)) {
        filteredCollection.push(element);
      }
    }
  
    return filteredCollection;
  }

  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object') {
      return Object.keys(collection).length;
    } else {
      throw new TypeError('Collection must be an object or an array.');
    }
  }

  function myFirst(array, n = 1) {
    if (n === 1) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }

  function myLast(array, n = 1) {
    if (n === 1) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }

  function myKeys(object) {
    const keys = [];
    for (const key in object) {
      keys.push(key);
    }
    return keys;
  }

  function myValues(object) {
    const Values = [];
    for (const key in object) {
      Values.push(object[key]);
    }
    return Values;
  }
  