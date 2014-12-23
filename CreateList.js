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
	"I don't know where I would be..."
];

var usedCards = [];

for (i = 0; i < 24; i++) {
	var index = Math.floor((Math.random() * availableCards.length));
	usedCards.push(availableCards[index]);
	availableCards.splice(index, 1);
}

var testDiv = document.getElementById("test");
testDiv.innerHTML = usedCards.join("<br/>");