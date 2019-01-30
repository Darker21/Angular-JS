MyApp.controller("registerUserCtrl", function ($window, $scope) {
    $scope.userCreating = {};

    $scope.commit = function () {
        
        sessionStorage.setItem("createdUser", JSON.stringify($scope.userCreating));
        $scope.userCreating = null;
        $window.location.href = "/";
    };
});