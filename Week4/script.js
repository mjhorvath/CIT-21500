var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

// do not write any elements into your HTML file
// loop through the above array to append a div using .append() into the body tag
// the appended div should always have the ".character" class
// display the characters name, class, and vehicle in the div
// Information should be displayed as "Name: Optimus Prime", with the next information on a different line
// if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"
// in the top right, based on the top information, insert an img elemnt for either the autobot or decepticon
// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png
// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png
// in the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER')
// in the characters' "vehicle" data, change the color of that value in the div based on its value
// truck=blue
// tank=green
// card=gold
// plane=white
for (var i = 0, n = chrs.length; i < n; i++) {
	var thisTran = chrs[i];
	var outerDiv = document.createElement('div');
	outerDiv.className = 'character ' + thisTran.afl;
	var namesDiv = document.createElement('div');
	var namesTxt = document.createTextNode('Name: ' + thisTran.name);
	namesDiv.appendChild(namesTxt);
	outerDiv.appendChild(namesDiv);
	var classDiv = document.createElement('div');
	var classTxt = document.createTextNode('Class: ' + thisTran.class.toUpperCase());
	classDiv.appendChild(classTxt);
	outerDiv.appendChild(classDiv);
	var vehicDiv = document.createElement('div');
	var vehicTxt = document.createTextNode('Vehicle: ' + thisTran.vehicle);
	switch (thisTran.vehicle) {
		case 'truck':
			vehicDiv.style.color = 'blue';
		break;
		case 'tank':
			vehicDiv.style.color = 'green';
		break;
		case 'car':
			vehicDiv.style.color = 'gold';
		break;
		case 'plane':
			vehicDiv.style.color = 'white';
		break;
	}
	vehicDiv.appendChild(vehicTxt);
	outerDiv.appendChild(vehicDiv);
	var imageIco = document.createElement('img');
	if (thisTran.afl == 'autobot')
		imageIco.src = 'https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png';
	else
		imageIco.src = 'https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png';
	outerDiv.appendChild(imageIco);
	document.body.appendChild(outerDiv);
}
