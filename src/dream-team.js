module.exports = function createDreamTeam(members) {
	members = typeof members !== 'undefined' ?  members : [];
	if (!Array.isArray(members)) return false;
	
	let dreamTeam = members.filter(item => typeof item == 'string').map(item => item.replace(/[\W\d]/g, ""));
	if (dreamTeam.length == 0) {
		return false;
	} else {
		return dreamTeam.map(item => item.toLowerCase())
					  	.sort()
					  	.map(item => item.slice(0,1).toUpperCase())
				      	.join("");
	}				
};