// /// exercise ///

// // Write a function that expects a string representing a selector to be passed as a parameter.
// The function should find all the elements in the document that match the selector and change their style
// so that the text they contain is italic, underlined, and bold.

// // Write a function that expects a string representing a class name to be passed as a parameter.
// The function should return an array containing all the elements in the document
// that have the class that was passed in.

// // Write a function that inserts an element into the body of the currently loaded page.
// That element should have fixed position, z-index of 2147483647, left of 20px, top of 100px,
// font-size of 200px, and contain the text 'AWESOME'.

//1

function findElement(tagname) {
    var textStyles = document.querySelectorAll(tagname);
    for (var i = 0; i < textStyles.length; i++) {
        textStyles[i].style.fontStyle = "italic";
        textStyles[i].style.textDecoration = "underline";
        textStyles[i].style.fontWeight = "bold";
    }
}
findElement("p");

//2
function findClassElements(classname) {
    var classes = [];
    classes = document.getElementsByClassName(classname);
    return classes;
}

findClassElement("");

//3
function insertElement() {
    var element = document.createElement("div");
    element.style.position = "fixed";
    element.style.zIndex = "2147483647";
    element.style.left = "20px";
    element.style.top = "100px";
    element.style.fontSize = "200px";
    var bigText = document.createTextNode("AWESOME");
    element.appendChild(bigText);
    document.body.prepend(element);
}

insertElement();
