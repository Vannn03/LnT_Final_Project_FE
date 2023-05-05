$(document).ready(function () {
    $("#nav-logo").click(function (e) { 
        e.preventDefault();
        $("body").load("landing.html")
    });

    $("#te-table").hide();

    $("#te").click(function (e) { 
        e.preventDefault();
        $("#vc-table").hide();
        $("#te-table").show();
    });

    $("#vc").click(function (e) { 
        e.preventDefault();
        $("#te-table").hide();
        $("#vc-table").show();
    });
});
