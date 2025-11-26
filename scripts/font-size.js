let fontSize = 1;
document.documentElement.style.fontSize = fontSize + 'em';

const decreaseBtn = document.getElementById('fontDecrease');
const increaseBtn = document.getElementById('fontIncrease');
const resetBtn = document.getElementById('fontReset');

decreaseBtn.addEventListener('click', function() {
	fontSize = Math.max(0.6, parseInt(fontSize) - 0.2);
	document.documentElement.style.fontSize = fontSize + 'em';
});

increaseBtn.addEventListener('click', function() {
	fontSize = Math.min(1.8, parseInt(fontSize) + 0.2);
	document.documentElement.style.fontSize = fontSize + 'em';
});

resetBtn.addEventListener('click', function() {
	fontSize = 1;
	document.documentElement.style.fontSize = fontSize + 'em';
});
