function checkBingo() {
	if (typeof bingoTime !== 'undefined') {
		return true;
	}
	
	var foundBingo = false;
	var yesCells = [];
	for (cell in cells) {
		if((" "+cells[cell].className+" ").indexOf("grid-yes") > -1) {
			yesCells.push(parseInt(cell));
		}
	}
	
	//check rows
	for (row = 0; row < 5; row++) {
		var hasThisRow = true;
		for (column = 0; column < 5; column++) {
			if (yesCells.indexOf(row * 5 + column) == -1) {
				hasThisRow = false;
			}
		}
		if (hasThisRow) {
			bingoTime = new Date();
			foundBingo = true;
		}
	}
	
	//check columns
	for (column = 0; column < 5; column++) {
		var hasThisColumn = true;
		for (row = 0; row < 5; row++) {
			if (yesCells.indexOf(row * 5 + column) == -1) {
				hasThisColumn = false;
			}
		}
		if (hasThisColumn) {
			bingoTime = new Date();
			foundBingo = true;
		}
	}
	
	//check diagonals
	var diagonals = [0, 6, 12, 18, 24];
	var hasThisDiagonal = true;
	for (index in diagonals) {
		if (yesCells.indexOf(diagonals[index]) == -1) {
			hasThisDiagonal = false;
		}
	}
	if (hasThisDiagonal) {
		bingoTime = new Date();
		foundBingo = true;
	}
	
	diagonals = [4, 8, 12, 16, 20];
	hasThisDiagonal = true;
	for (index in diagonals) {
		if (yesCells.indexOf(diagonals[index]) == -1) {
			hasThisDiagonal = false;
		}
	}
	if (hasThisDiagonal) {
		bingoTime = new Date();
		foundBingo = true;
	}
	
	//update footer
	if (foundBingo) {
		var footer = document.getElementById("footer");
		footer.innerHTML = "Got Bingo: " + bingoTime.toLocaleTimeString("en-US");
	}
	
	return foundBingo;
}

function toggle(cell) {
	if(cell.className.indexOf("grid-no") > -1) {
		cell.className = "grid-cell-inner grid-yes";
		checkBingo();
	}
	else {
		cell.className = "grid-cell-inner grid-no";
	}
}