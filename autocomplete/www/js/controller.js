app.controller('autocompleteCtrl', function($scope) {
 
 /*For Location Based AutoComplete*/
 
 $scope.result1 = '';
    $scope.options1 = null;
    $scope.details1 = '';



    $scope.result2 = '';
    $scope.options2 = {
      country: 'bd',
      types: '(cities)'
    };    $scope.details2 = '';
    
    
    
    $scope.result3 = '';
    $scope.options3 = {
      country: 'bd',
      types: 'establishment'
    };
    $scope.details3 = '';
	
	/*For Array Based AutoComplete*/
	 $scope.availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $scope.complete=function(){
    $( "#autocompleteArr" ).autocomplete({
      source: $scope.availableTags
    });
    } 
 
  
});

