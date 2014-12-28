var usedCards = [];

for (i = 0; i < 24; i++) {
	var index = Math.floor((Math.random() * availableCards.length));
	usedCards.push(availableCards[index]);
	availableCards.splice(index, 1);
}

usedCards.splice(12, 0, "I know this church is true (free space)");

var cells = [];
var elems = document.getElementsByTagName('*'),i;
for (i in elems) {
	if((" "+elems[i].className+" ").indexOf("grid-cell-inner") > -1) {
		cells.push(elems[i]);
	}
}

for (cell in cells) {
	cells[cell].innerHTML = '<div class="text">' + usedCards[cell] + '</div>';
}