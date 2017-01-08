var myApp = angular.module("myApp",[]);

myApp.controller('parentCtrl',function($scope){
var vm = this;

this.sum =function(a,b)
{
alert(a+b);
}

$scope.on('receiveParameter',function(event,data)
{
vm.sum(value1,value2);

);

myApp.controller('childController',function($scope){

var vm =this;
this.callParentSum=function(value1.value2)
{
$scope.$emit('reciveParameter',
data:{value1 :value1,value2:value2});

}

};
