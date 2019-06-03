function makeBigger() {
    let textareaElem = document.getElementById("textbox");
    let currentSize = window.getComputedStyle(textareaElem, null).getPropertyValue('font-size');
    let newSize = parseInt(currentSize) + 2;
    textareaElem.style.fontSize = newSize + "px";
}
function bling() {
    let blingcheckElem = document.getElementById("blingcheck");
    let textareaElem = document.getElementById("textbox");
    if (blingcheckElem.checked) {
        textareaElem.style.fontWeight = "bold";
        textareaElem.style.color = "green";
        textareaElem.style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    } else {
        textareaElem.style.fontWeight = "normal";
        textareaElem.style.color = "black";
        textareaElem.style.textDecoration = "none";
        document.body.style.backgroundImage = "none";
    }
}

window.onload = function () {
    var stop = true;
    var start;
    document.getElementById("biggerbutton").onclick = function () {
        if(stop){
            stop = false;
            start = setInterval(function(){ makeBigger(); }, 500);
            
        } else {
            stop = true;
            clearInterval(start);
        }
        
        
    };

    document.getElementById("blingcheck").onchange = function() {
        bling();
    };
    
    // biggerButton.onclick() = function(){makeBigger()};


}
