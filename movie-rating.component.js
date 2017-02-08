(function() {
    "use strict";
    
    
    function MovieRatingController($scope){
        $scope.contents=[];
        $scope.user={};
        $scope.form={};
        var original = angular.copy($scope.user);
       
             /*** star **/   
$scope.rate = 0;
        $scope.inital=0;
  $scope.max = 5;
  $scope.isReadonly = false;
        
        
      
        $scope.overStar=0;
        
  
$scope.func=function(){
   
    
    $scope.starrate=this.initial;
    if(this.initial==0){
        this.initial="";
    };
    
}
        
  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];
        
   /*** star **/  
        
        
        $scope.save=function(){
         
        
            
            $scope.bb=function(n){
                
                var a=new Array(n)
                return a;
            }
            
           
              $scope.contents.push({"Album":this.user.Album,"Artist":this.user.Artist,"SongName":this.user.SongName,"star":this.rate
                                    });
            
             
            
          reset();      
        }
        
        $scope.cancel=function(){
            
            reset();
            
         }
        
        $scope.a={};
        var reset=function(){
            
            $scope.user=angular.copy(original);
            $scope.form.myform.$setPristine();
           
        }
        
        
        $scope.propertyName="";
        $scope.reverse=false;
        $scope.sort=function(a,b){
            console.log("clicked");
            console.log(a);
            console.log(b);
            $scope.propertyName=a;
$scope.reverse=b;
        }
        
 
        
        
    }
    
    
    
    
    
    angular.module('componentModule').component('movieRating',{
        
        templateUrl: 'movieRating.html',
        controller: MovieRatingController
        
    })

} ());
