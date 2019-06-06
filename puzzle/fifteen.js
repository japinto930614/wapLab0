$(document).ready(function () {

    init = function () {
        let puzzleArea = document.getElementById('puzzlearea');
        let divs = puzzleArea.getElementsByTagName("div");

        // initialize each piece
        for (var i = 0; i < divs.length; i++) {
            var div = divs[i];

            // calculate x and y for this piece
            var x = ((i % 4) * 100);
            var y = (Math.floor(i / 4) * 100);

            // set basic style and background
            div.className = "puzzlepiece";
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            div.style.backgroundImage = 'url("background.jpg")';
            div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

            // store x and y for later
            div.x = x;
            div.y = y;
        }
    };
    init();
    
    $("#shufflebutton").click(function(){
        let divs = $(".puzzlepiece");
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        function shuffle(o) {
            for(var j, x, i = o.length;
                 i; j = parseInt(Math.random() * i),
                  x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        };
        var random = shuffle(numbers);
             
        for (var i = 0; i < divs.length; i++) {
            var div = divs[random[i]];

            // calculate x and y for this piece
            var x = ((i % 4) * 100);
            var y = (Math.floor(i / 4) * 100);

            // set basic style and background
            div.className = "puzzlepiece";
            div.style.left = x + 'px';
            div.style.top = y + 'px';
        }
    });
});