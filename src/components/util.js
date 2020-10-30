export const copyInnerHtmlToClipboard = (id) => {
	var text = document.getElementById(id).innerHTML;
	// console.log(text);
	var temp = document.createElement('input');
	document.body.appendChild(temp);
	temp.setAttribute("id", "temp_id");
	document.getElementById("temp_id").value=text;
	temp.select();
	document.execCommand("copy");
	document.body.removeChild(temp);
}

export const copyTextToClipboard = (text) => {
	console.log('"' + text + '" copied to the clipboard');
	var temp = document.createElement('input');
	document.body.appendChild(temp);
	temp.setAttribute("id", "temp_id");
	document.getElementById("temp_id").value=text;
	temp.select();
	document.execCommand("copy");
	document.body.removeChild(temp);
}
