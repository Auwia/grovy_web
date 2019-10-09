'use strict';

function storeController($scope, $routeParams, DataService) {

    // get store and cart from service
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    // use routing to pick the selected product
    if ($routeParams.id != null) {
        $scope.product = $scope.store.getProduct($routeParams.id);
    }
}