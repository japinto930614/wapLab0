$(document).ready(function () {

    let winning = 1;

    $(".boundary")
        .mouseover(function () {
            $(".boundary").css("background-color", "red");
            if (winning === 1) {
                // alert("Sorry, you lost :[");
                $("#status").text("Sorry, you lost :[");
                winning = 0;

            }
        });
    $("#end")
        .mouseover(function () {
            if (winning === 1) {
                $("#status").text("You win! :]");
                // alert("You win! :]");
            }
        });

    $("#start").click(function (e) {
        $(".boundary").css("background-color", "#eeeeee");
        if (winning === 0) {
            winning = 1;
        }
    });
    $("#maze").mouseleave(function () {
        $(".boundary").css("background-color", "red");
        if (winning === 1) {
            // alert("Sorry, you lost :[");
            $("#status").text("Sorry, you lost :[");
            winning = 0;
        }
    });
});
