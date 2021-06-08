var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];

function ReOrder(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function DoSounds() {
	var sndList = document.getElementById('soundlist');
	while (sndList.hasChildNodes()) {
		sndList.removeChild(sndList.lastChild);
	}
	for (var i = 0, n = animals.length; i < n; i++) {
		var thisAnimal = animals[i];
		if (thisAnimal == 'cat')
			var animalString = 'I am a cat';
		else if (thisAnimal == 'dog')
			var animalString = 'borf borf';
		else
			var animalString = 'I\'m an animal';
		var newItem = document.createElement('li');
		var newText = document.createTextNode(animalString);
		newItem.appendChild(newText);
		sndList.appendChild(newItem);
	}
	animals = ReOrder(animals);
}

document.body.onload = DoSounds;