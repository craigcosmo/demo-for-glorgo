export function objectToArray(object){
	let newData = []
	for (let i in object){
		newData.push(object[i])
	}
	return newData
}

export function hasDuplicateItem(array) {
	return (new Set(array)).size !== array.length
}

export function isObjectLitteral(ob){
	return ob ? ob.constructor === {}.constructor : false
}

export function renameProperty(object, oldName, newName) {
	// Do nothing if the names are the same
	if (oldName == newName) {
		return object
	}
	// Check for the old property name to avoid a ReferenceError in strict mode.
	if (object.hasOwnProperty(oldName)) {
		object[newName] = object[oldName]
		delete object[oldName]
	}
	return object
}
