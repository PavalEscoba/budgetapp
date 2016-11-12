/**
 * Created by Pablo on 02.11.2016.
 */
var app = angular.module('myApp');

app.controller("displayController", function ($scope) {
    function isNumeric(n){
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    $scope.products =[];
    $scope.total = 0;
    $scope.addProduct = function (item, num) {
        var addedProduct = {};
        var total = 0;
        if(!isNumeric($scope.price) || $scope.price<0){
            alert("Прадукт ня можа каштаваць меней за 0");
            alert("Вам за яго даплочваюць?")
        }
        else if (item && num){
            addedProduct.name = item;
            addedProduct.price = num;
            $scope.products.push(addedProduct);
        }
        else if (item && num == 0){
            addedProduct.name = item;
            addedProduct.price = 0;
            $scope.products.push(addedProduct);
        }
        else if(item == 0 && num){
            addedProduct.name = "";
            addedProduct.price = num;
            $scope.products.push(addedProduct);
        }
        else{
            addedProduct.name = "" ;
            addedProduct.price = "";
        };
        $scope.total += $scope.price;
        
        $scope.name = "";
        $scope.price = "";
    }
});

app.filter("currencyFilter", function(){

    return function(item){
        var dollar = (item / 1.9).toFixed(2);
        return dollar = "$" + dollar;
    }
});
app.filter("belCurrencyFilter", function(){
    return function(item){
        return item + " BYN";
    }
})