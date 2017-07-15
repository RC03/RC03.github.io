$(document).ready(function () {
    getData();
    $('').hide();
});


function getData() {
    // Get the data from the wunderground API
    $.ajax({
        url: "/RC03.github.io/acme/acme/js/acme.json",
        dataType: "json",
        success: function (data) {
            console.log(data);
            $("#Home").html(data.Navigation.link1);
            $("#Anvils").html(data.Navigation.link2);
            $("#Explosives").html(data.Navigation.link3);
            $("#Decoys").html(data.Navigation.link4);
            $("#Traps").html(data.Navigation.link5);
            console.log(Home);
        }
    });
}

//second pasted section of code
// Intercept the menu link clicks
$("#navigation").on("click", "a", function (evt) {
    evt.preventDefault();
    // With the text value get the needed value from the weather.json file
    var link = $(this).text(); // Franklin, etc...
    console.log(link);

if (link!="Home") {
    $("#mainpage").hide();
    $("#pageTwo").show();


    $.ajax({
        url: "/RC03.github.io/acme/acme/js/acme.json",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var pictures=(data[link].path);
            console.log(data[link]);
            $('title').replaceWith("<title>"+ link + ' | ACME' +"'</title>");
            $("#welcome").text(data[link].name);
            $('#img').html("<img src='" + pictures + "'>");
            $("#info").text(data[link].description);
            $("#manufac").html("<strong>Made by:</strong>" + data[link].manufacturer);
            $("#reviews").html("<strong>Reviews:</strong> " + data[link].reviews + "/5 stars");
            $("#price").html("<strong>Price: $</strong> " + data[link].price);
            console.log(data[link].reviews);
        }
    });
}
else{
    $('title').replaceWith("<title>"+ 'ACME' +"'</title>");
    $('#mainpage').show();
    $('#pageTwo').hide();
    $('#welcome').text("Welcome to Acme!");

}
});
