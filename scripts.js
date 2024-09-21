filterObjects("all");

function filterObjects(c){
    var x, i;
    x =document.getElementsByClassName("box");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++){
        removeClass(x[i], "show");
        if(x[i].className.indexOf(c) > -1) addClass(x[i], "show")
    }
}

function addClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++){
        if (arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++){
        while (arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


const contactLink = document.getElementById('contactLink');
const contactFormPopup = document.getElementById('contactFormPopup');
const closeBtn = document.querySelector('.close');

contactLink.onclick = function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    contactFormPopup.style.display = 'flex';
}

closeBtn.onclick = function() {
    contactFormPopup.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === contactFormPopup) {
        contactFormPopup.style.display = 'none';
    }
}
