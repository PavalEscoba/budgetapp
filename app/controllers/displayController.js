/**
 * Created by Pablo on 02.11.2016.
 */
var app = angular.module('myApp');

app.controller("displayController", function ($scope) {
    $scope.productsArray = ['apple','banana','car'];
    $scope.priceArray = ['4','3','220']
    $scope.addProduct = function (item, num) {
        $scope.productsArray.push(item);
        $scope.priceArray.push(num);
    }
})