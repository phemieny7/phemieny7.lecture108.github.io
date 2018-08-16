var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("lI");



//this function create a button for all <li> elements
function createButton(){
  var button = document.createElement("button");
  var txt = document.createTextNode("done");
  button.appendChild(txt);
  listItems[i].appendChild(button);
  button.onclick = underlineParent; //this was called out from the function underlineParent to underline an element


  var button = document.createElement("button");
  var txt = document.createTextNode("delete");
  button.appendChild(txt);
  listItems[i].appendChild(button);
  button.onclick = removeParent; //this was called out from the function removeParent to delete an element
}

//add a delete button button to all exisiting list
var i;
for (i = 0; i < listItems.length; i++) {
 	createButton();
}

//check to see an input takes place
function inputLength() {
	return input.value.length;
}

//create a new li elemnt.
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

//create a delete button and strikethrough for all new items.
	createButton();

}
 //underline an element
function underlineParent(event){
	event.target.parentNode.classList.toggle("done");
}

//remove an element
function removeParent(evt){
	evt.target.parentNode.remove();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);