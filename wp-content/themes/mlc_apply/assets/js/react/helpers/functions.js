export function compare (key, order='asc') {
	return (a,b) => {
		if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
		// property doesn't exist on either object
			return 0;
		}

		const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key]
		const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key]

		let comparison = 0;

		if (varA > varB) {
			comparison = 1
		} else if (varA < varB) {
			comparison = -1
		}
		return (
			(order == 'desc') ? (comparison * -1) : comparison 
		);
	};
}

export function arraySort(key) {
	return (obj1,obj2) => {
		let val1 = obj1[prop]
		let val2 = obj[prop]

		val1 - val2
	}
}

export function isEmpty (obj) {
	for(var key in obj) {
		if(obj.hasOwnProperty(key)) {
			return false
		}
	}
	return true
}

export function htmlDecode(input){
	var e = document.createElement('div');
	e.innerHTML = input
	return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue
}


export function allReplace(obj) {
    var retStr = this
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x])
    }
    return retStr;
};


export function getParam(name, url) {
	if (!url) url = location.href
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]")
	const regexS = "[\\?&]"+name+"=([^&#]*)"
	const regex = new RegExp( regexS )
	const results = regex.exec( url )
	return results == null ? null : results[1]
}

export function queryString(params) {
	return Object.keys(params).map(key => key + '=' + params[key]).join('&')
}

export function getObjectNextPrev(data, value, phrase, loop) {
	const oFunctions = {}

	oFunctions.keys = {}

	oFunctions.keys.next = (o, id, loop) => {
		const keys = Object.keys(o)
		const idIndex = keys.indexOf(id)
		const nextIndex = idIndex + 1
		if (nextIndex >= keys.length) {
			//we're at the end, there is no next
			if (loop) {
				return keys[0]
			} else {
				return
			}
		}
		const nextKey = keys[nextIndex]
		return nextKey
	}
	
	oFunctions.keys.prev = (o, id, loop) => {
		const keys = Object.keys(o)
		const idIndex = keys.indexOf(id)
		const nextIndex = idIndex - 1

		if (idIndex === 0) {
			//we're at the beginning, there is no previous
			if (loop) {
			  return keys.slice(-1)[0];
			} else {
			  return;
			}
		}
		const nextKey = keys[nextIndex]
		return nextKey
	}
}