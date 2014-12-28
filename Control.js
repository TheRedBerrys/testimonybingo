function toggle(cell) {
	if(cell.className.indexOf("grid-no") > -1) {
		cell.className = "grid-cell-inner grid-yes";
	}
	else {
		cell.className = "grid-cell-inner grid-no";
	}
}