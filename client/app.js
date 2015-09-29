/**
 * Created by Nick on 9/29/15.
 */
var app = angular.module('app',[]);
app.controller('IndexController',['$scope','$http',function($scope,$http) {
    $scope.adj = [];
    $scope.noun = [];
    $scope.handles = [];
    $http.get('/adj').then(function (res) {
        //console.log(res.data);
        $scope.adj = res.data;
    });
    $http.get('/noun').then(function (res) {
        //console.log(res.data);
        $scope.noun = res.data;
    });

    $scope.genHandles = function () {
        $scope.handles = [];
        var handles = 10;
        for (var i=0;i<handles;i++){
            $scope.handles.push(getHandle());
        }
        console.log($scope.handles);
    };

    function getHandle(){
        var randAdj = Math.floor(Math.random()*$scope.adj.length);
        var randNoun = Math.floor(Math.random()*$scope.noun.length);
        randAdj = $scope.adj[randAdj].word;
        randNoun = $scope.noun[randNoun].word;
        return randAdj+randNoun;
    }
}]);