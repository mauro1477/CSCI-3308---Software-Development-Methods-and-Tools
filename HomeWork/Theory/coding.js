function display2_1() {
  var myanswer  = "First line we are creating a objected. The second line will give us undefined because dragonball was never definded for the object. The Third line we use Loose equality to compare two values for equality, after converting both values to a common type that why the equality return a true to the console. The fourth line uses strict equality compares two values for equality. Neither value is implicitly converted to some other value before being compared. If the values have different types, the values are considered unequal, returning a false to the console since undefined and Null have different types.  " // TODO 2.1: Fill in Answer here after the :
  document.getElementById("21answer").innerHTML = myanswer; // Do not change
}
function display2_2() {
  var myanswer  = "This will give us a referenceError because x is not defined with a type when we use strict mode, but if we don't use this mode it will not give us a error in the console." // TODO 2.2: Fill in Answer here
  document.getElementById("22answer").innerHTML = myanswer; // Do not change
}

function display2_5() {
  var myanswer  = "In function getChildrenTags we are able to access to the child elements as an HTMLCollection object. The elements in the collection are sorted as they appear in the source code and can be accessed by index numbers. Using the length property we can loop through all children and extract the info we want.  " // TODO 2.5: Fill in Answer here
  document.getElementById("25answer").innerHTML = myanswer; // Do not change
}

function countDiv() { // Do not add or remove lines to this function
    var divs = document.getElementsByTagName("div"); // TODO: Question 2.3: Use the document Object to get the number of divs in the HTML page. Replace dummyMethod with the correct one.
    alert("Number of divs in this page is: " + divs.length); // Do not change
    //The getElementsByTagName() method returns a collection of an elements's child elements with the specified tag name, as a NodeList object.
}

function makeOrange() { // Do not add or remove lines to this function
    var narutos = document.getElementsByName("naruto"); // TODO: Question 2.4: Use the document Object to get all tags named "naruto" in the HTML page. Replace dummyMethod with the correct one.
    for(var i=0; i< narutos.length; i++) { // Do not change
        narutos[i].style.color = 'orange'; // Do not change
    }
    //In the html table name = Naruto or different characters
}

function getChildrenTags() { // Do not add or remove lines to this function
  var children = document.getElementById("div_1134").children; // TODO: Question 2.5 Use the appropriate function to get all the children of a div named 'div_1134'
  var tagNames = ""; // Do not change
  for (var i = 0; i < children.length; i++) {// Do not change
    console.log(children[i].tagName);// Do not change
    tagNames += children[i].tagName +", " ;// Do not change
  }// Do not change
  alert(children.length); // Do not change
  alert("The tags that I found are: " + tagNames);// Do not change
  //count tag if its the second child element of a <div_1134> element
}
