$(document).ready(function () {
    $("#nav-logo").click(function (e) { 
        e.preventDefault();
        $("body").load("landing.html")
    });
    $("#get-started").click(function (e) { 
        e.preventDefault();
        $("body").load("event.html");
    });
});