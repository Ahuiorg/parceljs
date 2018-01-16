console.log('in sort.js');

function swap (i, j, array) {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

const testArray = [1, 2, 4, 3, 8, 5, 9, 7, 0, 6];

// 冒泡排序
function popSort(array) {
	let len = array.length, isSwap;
	for (let i = 0; i < len; i++) {
		isSwap = false;
		for (let j = 0; j < len - i -1; j++) {
			(array[j] > array[j + 1]) && (isSwap = true) && (swap(j, j + 1, array))
		}
	}
	return array;
}
console.log(popSort(testArray), 'popSort');

// 选择排序
function selectSort(array) {
	let len = array.len, min=0;
	for (let i = 0; i < len; i++) {
		min = i;
		for (let j = i + 1; j < len; j++) {
			if (array[min] > array[j]) {
				min = j;
			}
		}
		if (min !== i) {
			swap(i, min, array);
		}
	}
	return array;
}
console.log(selectSort(testArray), 'selectSort');

// 快速排序
function querySort(array) {
	if (array.length > 1) {
		let len = array.length,
			q = array[0],
			leftArray = [],
			rightArray = [];
		for (let i = 1; i < len; i++) {
			if (array[i] < q) {
				leftArray.push(array[i]);
			} else {
				rightArray.push(array[i]);
			}
		}
		return [].concat(arguments.callee(leftArray), [q], arguments.callee(rightArray));
	} else {
		return array;
	}
}
console.log(querySort(testArray), 'querySort');
