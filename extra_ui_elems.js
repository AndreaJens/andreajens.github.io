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

function addBottomBarNoName(linkPrevious, titlePrevious, linkNext, titleNext, mainText){
	let linkElemPrev = document.createElement('a');
	let anchorTextPrev = document.createTextNode('< PREVIOUS');
	linkElemPrev.appendChild(anchorTextPrev);
	linkElemPrev.title = titlePrevious;
	linkElemPrev.href = linkPrevious;
	let linkElemNext = document.createElement('a');
	let anchorTextNext = document.createTextNode('NEXT >');
	linkElemNext.appendChild(anchorTextNext);
	linkElemNext.title = titleNext;
	linkElemNext.href = linkNext;
	let div = document.createElement('div');
	div.classList.add('bottomnav')
	var paragraph = document.createElement("p");
	paragraph.textContent = mainText
	div.append(linkElemPrev);
	div.append(paragraph);
	div.append(linkElemNext);
	document.body.appendChild(div)
}

function addBottomAllLinks(mainText, linkPrevious, titlePrevious, linkNext, titleNext, indexLink, indexText){
	let linkElemPrev = document.createElement('a');
	let anchorTextPrev = document.createTextNode('< PREVIOUS');
	linkElemPrev.appendChild(anchorTextPrev);
	linkElemPrev.title = titlePrevious;
	linkElemPrev.href = linkPrevious;
	let linkElemNext = document.createElement('a');
	let anchorTextNext = document.createTextNode('    NEXT >');
	linkElemNext.appendChild(anchorTextNext);
	linkElemNext.title = titleNext;
	linkElemNext.href = linkNext;
	let div = document.createElement('div');
	div.classList.add('bottomnav')
	let linkElemIndex = document.createElement('a');
	let anchorTextIndex = document.createTextNode('INDEX');
	linkElemIndex.appendChild(anchorTextIndex);
	linkElemIndex.title = indexText;
	linkElemIndex.href = indexLink + "#TOC";
	var paragraph = document.createElement("p");
	var paragraph2 = document.createElement("p");
	paragraph.textContent = mainText;
	//paragraph.display = "block";
	//paragraph.append(document.createElement('br'));
	paragraph2.append(linkElemPrev);
	paragraph2.append(linkElemIndex);
	paragraph2.append(linkElemNext);
	div.append(paragraph);
	div.append(paragraph2);
	document.body.appendChild(div)
}