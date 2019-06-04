


window.onload = function () {
    
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
  
}
