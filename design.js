var box = document.getElementById('display');

function toScreen(x) {
	box.value += x;
	if (x === 'c') {
		box.value= ' ';
	}
};

function answer() {
	var y = box.value;
	y = eval(y);
	box.value= y;
}

function power(){
	var power =box.value;
	power = eval(power* power);
	box.value = power;
}

function backspace(){
	var num = box.value;
	var len = num.length-1;
	var newNum = num.substring(0,len);
	box.value = newNum;
}
