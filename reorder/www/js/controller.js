app.controller('reorderCtrl', function($scope) {
    $scope.draggableObjects = [
                    {name: 'one'},
                    {name: 'two'},
                    {name: 'three'}
                ];
                $scope.onDropComplete = function (index, obj, evt) {
                    var otherObj = $scope.draggableObjects[index];
                    var otherIndex = $scope.draggableObjects.indexOf(obj);
                    $scope.draggableObjects[index] = obj;
                    $scope.draggableObjects[otherIndex] = otherObj;
                }
});

