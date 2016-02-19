var app = angular.module('myApp', [])
	app.controller('videoController', ['$scope', '$http', '$sce', function($scope, $http, $sce){

	$scope.$sce = $sce
	var counter = 0

	//retrieving data from server to be displayed
	$http.get('/api/videos').then(function(dataFromServer){
		$scope.collection = dataFromServer.data
		console.log($scope.collection)
	})

	//sending form data to server
	$scope.addNewVideo = function(){
		counter++
		if(counter < 9 ){
			$http.post('/api/videos', $scope.newVideo).then(function(dataFromServer){
				$scope.collection = dataFromServer.data
				$scope.newVideo = {}
			})
		} else {
			$scope.test = 'There have Been too many videos submitted'
			console.log('too may videos')
		}
		
	}

	// $scope.vote = function(){
	// 	$http.put('/api/videos', $scope.collection.rating).then(function(dataFromServer){
	// 		$scope.collection = dataFromServer.data
	// 	})
	// }

}])
