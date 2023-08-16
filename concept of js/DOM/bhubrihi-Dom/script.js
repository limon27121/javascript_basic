

let val;


// //single selector
document.getElementById("document-title").innerHTML="limon my boy"

document.getElementById("document-title").style.backgroundColor="blue"
val=document.getElementById("document-title");
val.style.display="block"
val.style.padding="10px"

val=document.querySelector("li")
console.log(val)

val=document.querySelector("ol li")
console.log(val)

val.style.color="red"

document.querySelector("li:last-child").style.color="blue"
document.querySelector("li:nth-child(3)").style.color="green"


// Multiselector 


val=document.querySelectorAll(".sample-class li")

val.forEach(function(item){
    console.log(item)
})



//dom traversing

let list = document.querySelector('ul');

 val = Array.from(list.children);

list.children[0].textContent="Limon"

val.forEach(function(item){
   console.log(item)
})



 list = document.querySelector('ul');
let listItem = document.querySelector('ul li:first-child');

val = list;
val = listItem;

// Get Child Nodes
val = list;
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[2];
val = list.childNodes[1].nodeName;
val = list.childNodes[0].nodeType;

// 1 Element
// 2 Attribute
// 3 Text Node
// 8 Comment
// 9 Document Itself
// 10 Doctype
val = list.childNodes;

val = list.children;
val = list.children[1];
list.children[0].textContent = "Hello";
val = list.children[1].children[0];


val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = listItem;
val = listItem.parentElement;
val = listItem.parentNode;
val = listItem.parentElement.parentElement;

val = listItem.nextSibling.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

val = document.querySelector('ul li:last-child');
val = val.previousSibling;
val = val.previousElementSibling;

console.log(val);



// Adding Element to DOM

// Create Element
let olItem = document.createElement('li');

// Add Id and Class
olItem.className = "a new another-class";
olItem.id = "new-element";

// Add Attribute using method
olItem.setAttribute('title', 'A title to new Element');

//list er text add kora hoilo

olItem.appendChild(document.createTextNode('JavaScript'));

//order list vitor new list element add kora hoilo

document.querySelector('ol').appendChild(olItem);


//ul er vitor list with anchor tag in korbo

//create list
let ul_item=document.createElement("li");
//create anchor tag
let ul_anchor=document.createElement("a");
//<a href></a>
ul_anchor.setAttribute("href","")
//<a href>mansur</a>
ul_anchor.appendChild(document.createTextNode('Mansur'));
//add list  <li><a>mansur</a></li>
ul_item.appendChild(ul_anchor)
// <ul><li><a>mansur</a></li></ul>
document.querySelector("ul").appendChild(ul_item)


// Replacing Elements

//create html header
let new_heading=document.createElement("h1")
//header text
new_heading.appendChild(document.createTextNode("welcome home"))
//add header class
new_heading.className="header_class"
//selection existing header in my html document
let parent_heading=document.querySelector("h3")
//selecting parent of existing header
let parent = document.querySelector('.container');

// let old_parent=parent_heading.parentElement;

//replace the new header with the old one
parent.replaceChild(new_heading,parent_heading)


// Remove element
//select list item
let lis = document.querySelectorAll('li');
//select un order list
let list1 = document.querySelector('ul');

//remove 1 st element of list
lis[0].remove()

//add class in list
list1.classList.add("test");
list1.classList.add("test-new")
//remove class name
list1.classList.remove("test-new");
//set attribute
list.setAttribute("title", "Yes")
//remove attribute
list.removeAttribute("title");