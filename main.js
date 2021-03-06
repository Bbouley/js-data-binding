// ** globals ** //

var scope = {};
//array of classes you want to link data-binding to
var classNamesArray = ['name', 'age'];

// ** functions ** //

//iterate through class name array
//in that for loop grab dom elements associated with each class name
//return an array of dom elements
function getElements(array){
    var elements = [];
    for (var i = 0; i < array.length; i++) {
        var elem = document.getElementsByClassName(array[i]);
        elements.push(elem);
    }
    return elements;
}

//function calls

var domElements = getElements(classNamesArray);

//iterate through domelements
//take each element and attach an event handler to it
//onkeyup for event
//perform some sort of action to bind the two inputs


function domBinding(array) {
    for (var i = 0; i < array.length; i++) {
        var newArray = array[i];
        for (var j = 0; j < newArray.length; j++) {
            newArray[j].addEventListener('keyup', function() {
                for (var k = 0; k < newArray.length; k++) {
                    if(newArray[k] !== this.value) {
                        newArray[k].value = this.value;
                    }
                }
            });
        }
    }
}

domBinding(domElements[0]);

function modelBinding(elements) {
        for (var i = 0; i < elements.length; i++) {
            Object.defineProperty(scope, classNamesArray[i], {
                set: function(newValue) {
                    for (var index in elements) {
                        elements[index].value = newValue;
                    }
                }
            });
        }
}

modelBinding(domElements[0]);


