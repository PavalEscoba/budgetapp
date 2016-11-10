var app = angular.module('myApp');

app.filter("currencyFilter", function(){

	return function(item){
		var dollar = (item * 1.9).toFixsed(2);
		return dollar = "$" + dollar;
	}
});