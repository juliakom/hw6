// 1 ---------------------------------------------

function fillArray(size, value) {
	return [...Array(size)].map(() => value);
}

let arr = fillArray(10, 'qwerty');
console.log(arr);

// 2 ---------------------------------------------

function filterArray(name, ...args) {
	return name.filter(el => !args.includes(el));
}

let array = [0, 1, 2, null, undefined, 'qwerty', false];
let result = filterArray(array, false, undefined, '', 0, null,); 
console.log(filterArray(result));

// 3 ---------------------------------------------

function calcSum() {
	if(!arguments.length) {
    return 'No arguments';
  }

	let sum = 0;
	for(let i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
  return sum;
}

let sum1 = calcSum(0); 
let sum2 = calcSum(1,2,3); 
let sum3 = calcSum(5,0,10, 1, 5); 
console.log(sum1, sum2, sum3)

// 4 ---------------------------------------------

function createPipe(f = '=====') {
  return function (text) {
    return  f + " '" + text + "' " + f;
  };
}

const pipeFunction = createPipe();
console.log(pipeFunction('some text you like'));

// 5 ---------------------------------------------

function consFunction (text) {
  console.log(text);
}

function alertFunction (text) {
  alert(text);
}

function getText(text, func) {
  return func(text);
}

getText('some text', consFunction);
getText('some text', alertFunction);