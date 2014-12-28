var availableCards = [
	"I would be ungrateful if...",
	"Member of the bishopric falls asleep",
	"Tender Mercies",
	"Odd use of the word 'Even'",
	"Someone getting up after the meeting should be over",
	"Mad dash for first place",
	"Unaccompanied minor",
	"Politics",
	"Name dropper",
	"...With every fiber of my being...",
	"The Arrangement (I'll go up if you go up)",
	"Too much information",
	"In the name of Thy Son...",
	"Accompanied minor (with parent whispering)",
	"Bad Joke (congregation doesn't laugh)",
	"The Regular",
	"Moment of Silence (over 30 seconds)",
	"Movie Comparison",
	"On my mission...",
	"The Ugly Cry",
	"The Long Talker (over ten minutes)",
	"Not a member of the ward",
	"Good Joke (congregation laughs)",
	"Travelogue",
	"Medical Problems",
	"Someone talks in a foreign language",
	"I don't know where I would be...",
	"I don't know why I'm up here...",
	"Three Nephites",
	"Entire testimony without mentioning Jesus",
	"Bruce R. McConkie Quote"
];

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
	cells[cell].innerHTML = "<span>" + usedCards[cell] + "</span>";
}