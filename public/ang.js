var app = angular.module('myApp', [])
	app.controller('videoController', ['$scope', '$http', '$sce', function($scope, $http, $sce){

	$scope.$sce = $sce
	var counter = 0
	$scope.displayNumber = 0
	$scope.toggleForm = 'Hide Form'

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

	$scope.vote = function(vidname){
		$http.post('/api/votes', {name: vidname})
			.then(function(dataFromServer){
				$scope.collection = dataFromServer.data
		})
	}
	$scope.nextSet = function(){
		if($scope.displayNumber === 6){
			$scope.displayNumber = 0
		} else {
			$scope.displayNumber +=2
		}
	}
	$scope.prevSet = function(){
		if($scope.displayNumber === 0){
			$scope.displayNumber = 6
		} else {
			$scope.displayNumber-=2
		}
	}

	$scope.hideForm = function(){
		if($scope.toggleForm === 'Hide Form'){
			$scope.toggleForm = 'Show Form'
		} else {
			$scope.toggleForm = 'Hide Form'
		}
		$scope.displayForm = !$scope.displayForm
	}
}])
