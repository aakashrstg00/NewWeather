app.controller("citycontroller", function ($scope, cityfactory) {
    window.addEventListener("load", $scope.searchByCid);
    $scope.searchByCid = function () {
        console.log("Checking");
        var promise = cityfactory.serverCall($scope.cityName);
        promise.then(function (data) {
            $scope.result = data.data;
            $scope.tempincelsius = parseInt(data.data.main.temp - 273.15);
        }, function (error) {
            $scope.error = error;
        });
    }
});