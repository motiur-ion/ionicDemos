app.controller('accordinCtrl', function($scope) {
  $scope.groups = [];
  
    $scope.groups[0] = {
      name: 'Header 01',
      items: []
    };
	$scope.groups[1] = {
      name: 'Header 02',
      items: []
    };
	$scope.groups[2] = {
      name: 'Header 03',
      items: []
    };
	$scope.groups[3] = {
      name: 'Header 04',
      items: []
    };
	$scope.groups[4] = {
      name: 'Header 05',
      items: []
    };
    
      $scope.groups[0].items.push('content 01');
      $scope.groups[1].items.push('content 02');
      $scope.groups[2].items.push('content 03');
      $scope.groups[3].items.push('content 04');
      $scope.groups[4].items.push('content 05');
    
 
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  
});

