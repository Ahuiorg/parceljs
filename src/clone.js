console.log('in clone.js');

// 对象深度拷贝

const testObj = {
	name: 'Ange Lee',
	sex: 'man',
	age: '18',
	friends: ['LePenghui', 'LeXingXing', 'LiWenhua'],
	like: 'ski',
	likely: function() {
		console.log(`I like ${this.like}`);
	},
	company: {
		name: 'MT',
		miss: 'lipenghui02',
		time: new Date()
	}
}

// 当被拷贝的内容没有方法，也就没有函数的时候，可以用这个方法
function cloneA(obj) {
	return JSON.parse(JSON.stringify(obj));
}
let ahui = cloneA(testObj);
console.log('json拷贝', ahui);


// 深度拷贝
function deepClone (obj) {
	if (typeof obj !== 'object') {
		return obj;
	}

	let result = obj instanceof Array ? [] : {};
	for (let i in obj) {
		result[i] = arguments.callee(obj[i]);
	}

	return result;
}
let angeli = deepClone(testObj);
console.log('深度拷贝', angeli);
angeli.like = 'baseketball';
angeli.likely();

console.log(testObj.company.time);
console.log(angeli.company.time);







