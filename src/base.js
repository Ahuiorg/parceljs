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
