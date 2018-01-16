console.log('in countTag');

// 获取所有的tag
let tags = document.getElementsByTagName('*');

// console.log(tags);
console.log(Array.from(tags));
// console.log([].slice.call(tags));


// 统计数组中出现次数的多的项

function countNum (array) {
	let obj = {}, len = array.length;

	for (let i = 0; i < len; i++) {
		if (obj[array[i]]) {
			obj[array[i]]++;
		} else {
			obj[array[i]] = 1;
		}
	}

	console.log(obj);

	let maxChart = '', maxValue = 0;
	for (let k in obj) {
		if (obj[k] > maxValue) {
			maxValue = obj[k];
			maxChart = k;
		}
	}

	return maxChart;
}

console.log(countNum(Array.from(tags)));