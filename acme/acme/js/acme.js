//$("#page-nav").ready(function () {
//    getLinkName();
////    $("#page-nav").ready(function () {
////        getLinkName();
//}
//function getData(input) {
//    // Get the data from the wunderground API
//    $.ajax({
//        url: "js/acme.json"
//       , dataType: "jsonp"
//        , success: function (data) {
//            console.log(data);
//
//
//
//        $("#link1").text(data.Navigation.link1);
//
//
//
//        }
//        });
//}

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

        }
    });
}

//second pasted section of code
// Intercept the menu link clicks
$("#page-nav").on("click", "a", function (evt) {
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
            console.log(data[pictures]);
           $("#welcome").text(data[link].name);
            $('img').html("<img src='" + pictures + "'>");
            $("#info").text(data[link].description);
            $("#manufac").text("Made by:" + data[link].manufacturer);
            $("#review").text("Reviews: " + data[link].reviews + "/5 stars");
            $("#price").text('Price: $' + data[link].price);
        }
    });
}
else{
    $('#mainpage').show();
    $('#pageTwo').hide();
    $('#welcome').text("Welcome to Acme!");

}
});
