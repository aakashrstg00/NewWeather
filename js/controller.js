app.controller("aboutuscontroller", function ($scope) {
    $scope.msg = "Want to know about the weather?Stay connected to the latest in weather forecasting with Sunshine or Raindrops – Weather for Life. This free weather app is available for every place in India and for more minutes than any other minute-by-minute precipitation forecast.";
});
app.controller("citycontroller", function ($scope, cityfactory) {
    $scope.searchByCid = function () {
        console.log("Checking for city data");
        var city = $scope.cName || "Delhi";
        var promise = cityfactory.serverCall(city);
        promise.then(function (data) {
            $scope.result = data.data.query.results.channel;
            console.log($scope.result);
        }, function (error) {
            $scope.error = error;
        });
        console.log("$scope.cityName", $scope.cityName);
        console.log("city", city);
        $scope.cityName = "";
    };
    $scope.searchByCid();
});