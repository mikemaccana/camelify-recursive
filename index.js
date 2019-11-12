var changeCase = require('change-case');

var log = console.log.bind(log);

var kind = function (object) {
  if (object && object.constructor && object.constructor.name) {
    return object.constructor.name
  }
  return null
}

// Inspired from https://gist.github.com/Sneagan/8366247
var camelifyObject = function(obj) {
	var keys = Object.keys(obj)
	var convertKey = function(oldKeyName) {
		if ( oldKeyName.includes('_') ) {
			var oldValue = obj[oldKeyName]
			
			// Fix 'id' so it becomes 'ID' - prevents 'Id' in output which is poor
			oldKeyName = oldKeyName.replace('_id','_ID').replace(/^id$/,'ID')

			var newKeyName = changeCase.camelCase(oldKeyName);
			obj[newKeyName] = oldValue;
			delete obj[oldKeyName];
		}
	}
	keys.forEach(function(key, index){
		var value = obj[key]

		if ( kind(value) === 'Object' ) {
			obj[key] = camelifyObject(value);
		}
		if ( kind(value) === 'Array' ) {
			value.forEach(function(item, index){
				value = camelifyObject(obj[key][index]);
			});
		}
		// Now we've fixed any potential subkeys, convert the actual key
		convertKey(key);
	});
	return obj;
};

module.exports = camelifyObject
