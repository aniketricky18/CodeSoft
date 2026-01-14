var screen = document.getElementById('screen');
var currentValue = ""

function addNum(val) {
	screen.value = screen.value + val;
	currentValue = screen.value
}

function showResult() {
	try {
		var answer = eval(screen.value);
		screen.value = answer;
	} catch (err) {
		screen.value = 'Error';
		setTimeout(function() {
			screen.value = '';
		}, 1200);
	}
}