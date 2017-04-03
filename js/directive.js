app.directive("rosHeader", function () {
    return {
        template: " <div id=\"header\"><ul id = \"navmenu\" ><li><a href = \"#\"> HOME </a></li><li><a href = \"#/aboutus\"> About Us </a></li><li style = \"float:left;background-color:#2a54a3\"><a href = \"#/aboutus\"><b> Raindrops or Sunshine ? </b></a></li></ul></div>"
        , restrict: "E"
    };
});
app.directive("rosFooter", function () {
    return {
        template: "<img src=\"mages/favicon.ico\" style=\"float:left\"><img src=\"images/favicon.ico\" style=\"float:right\">"
        , restrict: "E"
    };
});