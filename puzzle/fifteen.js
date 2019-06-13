$(document).ready(function () {

    let randomBlankSpaceIndex = 16;
    let currentOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, null];


    init = function () {
        // let puzzleArea = document.getElementById('puzzlearea');
        let divs = $('#puzzlearea div');
        // let divs = puzzleArea.getElementsByTagName("div");
        // initialize each piece
        for (var i = 0; i < divs.length; i++) {
            var div = divs[i];
            // calculate x and y for this piece
            var x = ((i % 4) * 100);
            var y = (Math.floor(i / 4) * 100);
            // set basic style and background
            div.className = "puzzlepiece";
            div.id = i;
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            div.style.backgroundImage = 'url("https://scontent-lht6-1.cdninstagram.com/vp/aed4e120a2bd957c84d98f65d2f6823f/5D7BC926/t51.2885-19/s150x150/14719202_1768785320028358_2044085312530939904_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&se=")';
            div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
            // store x and y for later
            div.x = x;
            div.y = y;
        }
    };
    init();
// shuffles all the pieces in a random order
    $("#shufflebutton").click(function () {
        let divs = $(".puzzlepiece");
        var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        function shuffle(o) {
            for (var j, x, i = o.length;
                i; j = parseInt(Math.random() * i),
                x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        };
        var random = shuffle(numbers);
        randomBlankSpaceIndex = parseInt(Math.random() * 15);
        let afterBlank = false;


        for (var i = 0; i <= divs.length; i++) {
            if (randomBlankSpaceIndex === i) {
                afterBlank = true;
                currentOrder[i] = null;
            } else {
                var div;
                let randomindex;
                if (afterBlank) {
                    randomindex = random[i - 1];
                    // div = divs[randomindex];
                } else {
                    randomindex = random[i];
                }
                currentOrder[i] = randomindex;
                div = divs[randomindex];
                var x = (((i) % 4) * 100);
                var y = (Math.floor((i) / 4) * 100);
                // set basic style and background
                div.style.left = x + 'px';
                div.style.top = y + 'px';
            }
        }
    });
// moves the piece as soon is clicked
    $("#puzzlearea div").click(function () {
        let blankspace = currentOrder.indexOf(null);
        let nearbyPieces = [null, null, null, null];
        let index = 0;
        if (blankspace > 3) {
            let up = blankspace - 4;
            nearbyPieces[0] = currentOrder[up];
        }
        if ((blankspace % 4) >= 0 && (blankspace % 4) < 3) {
            let right = blankspace + 1;
            nearbyPieces[1] = currentOrder[right];
        }
        if (blankspace < 12) {
            let down = blankspace + 4;
            nearbyPieces[2] = currentOrder[down];
        }
        if ((blankspace % 4) <= 3 && (blankspace % 4) > 0) {
            let left = blankspace - 1;
            nearbyPieces[3] = currentOrder[left];
        }
        let divId = parseInt(this.id);
        //verifies if the piece can be moved
        if (nearbyPieces.includes(divId)) {
            let PiecePosition = nearbyPieces.indexOf(divId);
            currentOrder[blankspace] = divId;
            let y = parseInt(this.style.top);
            let x = parseInt(this.style.left);
            let newY = 0;
            let newX = 0;
            switch (PiecePosition) {
                case 0:
                    currentOrder[blankspace - 4] = null;
                    newY = y + 100;
                    this.style.top = newY + 'px';
                    break;
                case 1:
                    currentOrder[blankspace + 1] = null;
                    newX = x - 100;
                    this.style.left = newX + 'px';
                    break;
                case 2:
                    currentOrder[blankspace + 4] = null;
                    newY = y - 100;
                    this.style.top = newY + 'px';
                    break;
                case 3:
                    currentOrder[blankspace - 1] = null;
                    newX = x + 100;
                    this.style.left = newX + 'px';
                    break;
                default:
            }
        }
    });
});