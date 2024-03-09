function addTopBar(sourceDir='./', activeElement=-1){
	let div = document.createElement('div');
	div.classList.add('topnav');
	const elems = ["Home", "Racconti", "Giochi", "Contatti"];
	const links = ["index.html", "tales.html", "games.html", "contacts.html"];
	for (let i = 0; i < elems.length; i++){
		let linkElem = document.createElement('a');
		let anchorText = document.createTextNode(elems[i]);
		linkElem.appendChild(anchorText);
		linkElem.title = elems[i];
		linkElem.href = sourceDir + links[i];
		if (activeElement == i){
			linkElem.classList.add('active');
		}
		div.append(linkElem);
	}
	document.body.appendChild(div)
}

function addBottomBar(textToDisplay){
	let div = document.createElement('div');
	div.classList.add('bottomnav')
	var paragraph = document.createElement("p");
	paragraph.textContent = "Andrea Demetrio - " + textToDisplay
	div.append(paragraph);
	document.body.appendChild(div)
}