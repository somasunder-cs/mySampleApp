/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function GeoController($scope, $http){
    $scope.fetchGeoName = function(){
         //$scope.postalCode = "560037";
         console.log("$scope.postalCode "+$scope.postalCode);
         $http.get("http://api.geonames.org/postalCodeSearch?postalcode="+$scope.postalCode+"&maxRows=10&username=somasunder")
        .success(function(response){
            console.log("response "+response);
            $scope.geoNames = x2js.xml_str2json(response).geonames;
            //console.log("$scope.geoName "+response);
            var totalResultsCount = $scope.geoNames.totalResultsCount;
            //console.log("$scope.geoName "+ $scope.geoNames.totalResultsCount);
            if(totalResultsCount==1)
            {
                $scope.geoNames = [$scope.geoNames.code];
            }
            else
            {
                $scope.geoNames = $scope.geoNames.code;
            }
            //console.log("$scope.geoName =="+x2js.xml_str2json(response));
        });
    };
}


