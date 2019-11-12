// https://stackoverflow.com/a/35976812/123671
function snakeToCamelCase(str) {
  return str
    .split("_")
    .map(function(word, index) {
      log(`Testing ${word}`);

      // The word 'ID' is always 'ID'
      // Prevents 'Id' in output which is weird
      if (word === "id") {
        return "ID";
      }

      // If it is the first word make sure to lowercase all the chars.
      if (index === 0) {
        return word.toLowerCase();
      }

      // It is not the first word
      // only upper case the first char and lowercase the rest.
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

var log = console.log.bind(log);

var kind = function(object) {
  if (object && object.constructor && object.constructor.name) {
    return object.constructor.name;
  }
  return null;
};

// Inspired from https://gist.github.com/Sneagan/8366247
var camelifyObject = function(obj) {
  var keys = Object.keys(obj);
  var convertKey = function(oldKeyName) {
    var oldValue = obj[oldKeyName];
    var newKeyName = snakeToCamelCase(oldKeyName);
    delete obj[oldKeyName];
    obj[newKeyName] = oldValue;
  };
  keys.forEach(function(key, index) {
    var value = obj[key];

    if (kind(value) === "Object") {
      obj[key] = camelifyObject(value);
    }
    if (kind(value) === "Array") {
      value.forEach(function(item, index) {
        value = camelifyObject(obj[key][index]);
      });
    }
    // Now we've fixed any potential subkeys, convert the actual key
    convertKey(key);
  });
  return obj;
};

module.exports = camelifyObject;
