module.exports = function countCats( matrix ) {
	let num = 0;
	let arr = [];
	for (i of matrix) {
		arr.push(...i)
	}
	for (i of arr) {
		if (i == '^^') {
			num +=1;
		}
	}
	return num;
};
