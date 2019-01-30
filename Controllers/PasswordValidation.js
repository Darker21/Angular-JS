MyApp.directive('passwordValidation', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctl)
        {
            scope.$watch(attrs["passwordValidation"], function (errorMsg) {
                elm[0].setCustomValidity(errorMsg);
                ctl.$setValidity("passwordValidation", errorMsg ? true : false);
            });
        }
    };
});