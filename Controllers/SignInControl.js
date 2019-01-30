MyApp.controller("signInUserControl", function ($scope, $window) {
    $scope.sessionUser = JSON.parse(sessionStorage.getItem("createdUser"));

    $scope.attemptedUsername = "";

    $scope.attemptedPassword = "";

    $scope.attemptLogin = function (form) {
        if ($scope.attemptedPassword == $scope.sessionUser.password && ($scope.attemptedUsername === $scope.sessionUser.username || $scope.attemptedUsername === $scope.sessionUser.email)) {
            sessionStorage.setItem("SignedInUser", sessionStorage.getItem("createdUser"));
            location.href = location.href.replace('/login', '/');
        }
        else {
            form.$invalid = true;
            form.password.$invalid = true;
        };
    };
});
