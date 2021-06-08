var stringers=[3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12]
var lines = []

function CreateLine(thisLine) {
	var lineDiv = document.createElement('div');
	if ((typeof(thisLine) == 'number') && (thisLine < 10))
		var lineString = 'less than the number 10';
	else if ((typeof(thisLine) == 'number') && (thisLine == 15))
		var lineString = 'equal to the number 15';
	else if ((typeof(thisLine) == 'string') && (thisLine.length > 5))
		var lineString = 'longer than 5 characters';
	else
		var lineString = 'normal'
	var lineTxt = document.createTextNode('The value is ' + thisLine + ' and it is ' + lineString + '.');
	lineDiv.appendChild(lineTxt);
	var lineClick = function () {
  	this.style.color = 'blue';
	}
	lineDiv.addEventListener('click', lineClick);
	document.body.appendChild(lineDiv);
}

for (var i = 0; i < stringers.length; i++) {
	lines.push(new CreateLine(stringers[i]))
}