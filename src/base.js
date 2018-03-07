function doSomething() {
	console.log(this);
}

let element = document.getElementById('element');
let clickBtn = document.getElementById('clickBtn');

clickBtn.addEventListener('click', () => {
	console.log('button');
});

element.addEventListener('click', () => {
	console.log('element');
});

/*
 http 头部信息
 */

let httpHeaderMsg = [
	'accept',
	'accept-charset',
	'accept-encoding',
	'accept-language',
	'host',
	'cookie',
	'user-agent',
	'referer',
	'connection',
]


// gaode 2018-01-30

/**
 * 给一个数字，返回国际格式 
 * 1234567 => 1,234,567
 */

function turnContryNum (num) {
	if (num < 1000) {
		return num;
	}
	str = `,${num%1000}`;
	return arguments.callee(num/1000);
}


console.log(turnContryNum(1234567));


// 值引用
