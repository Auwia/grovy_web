'use strict';

var storeApp = angular.module('AngularStore', ['pascalprecht.translate']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/store', {
        templateUrl: 'partials/store.htm',
        controller: storeController 
      }).
      when('/products/:id', {
        templateUrl: 'partials/product.htm',
        controller: storeController
      }).
      when('/cart', {
        templateUrl: 'partials/shoppingCart.htm',
        controller: storeController
      }).
      otherwise({
        redirectTo: '/store'
      });}])
	
	.config(["$translateProvider",function($translateProvider){
		var en_translations = {
		  "title" : "Irpinia Express Store - User Registration and Login",
		  "Login" : "Login",
		  "Register" : "Register",
		  "Signup" : "Signup",
		  "Help" : "Help",
		  "Item" : "Item",
		  "Price" : "Price",
		  "Quantity" : "Quantity",
		  "Cart" : "Your cart is empty.",
		  "BackStore" : "back to store",
		  "ClearCart" : "clear cart",
		  "PayPal" : "check out using PayPal",
		  "Google" : "check out using Google",
		  "Stripe" : "check out using Stripe",
		  "items" : "items",
		  "search" : "Search",
		  "addCart" : "add to cart",
		  "itemCart" : "this item is in the cart",
		  "removeCart" : "remove from cart",
		  "hi" : "Hi",
		  "loggedIn" : "You're logged in!!",
		  "Picture" : "Picture",
		  "firstName" : "First Name:",
		  "lastName" : "Last Name:",
		  "street" : "Street/n.:",
		  "ort" : "ORT:",
		  "place" : "Place:",
		  "telephone" : "Telephone:",
		  "email" : "e-mail:",
		  "logout" : "Logout",
		  "update" : "Update",
		  "delete" : "Delete",
		  "emailReq" : "Username is required",
		  "pwdReq" : "Password is required",
		  "firstNameReq" : "First name is required",
		  "lastNameReq" : "Last name is required",
		  "cancel" : "Cancel",
		  "Thanks" : "Thanks for shopping at the Irpinia Express Store."
		}

		var it_translations = {
		  "title" : "Irpinia Express Store - Registrazione utente e accesso al contenuto privato",
		  "Login" : "Accedi",
		  "Signup" : "Iscriviti",
		  "Register" : "Registrati",
		  "Help" : "Aiuto",
		  "Item" : "Oggetti",
		  "Price" : "Prezzo",
		  "Quantity" : "Quantità",
		  "Cart" : "Il carrello è vuoto.",
		  "BackStore" : "Indietro al negozio",
		  "ClearCart" : "Svuota carrello",
		  "PayPal" : "Paga con PayPal",
		  "Google" : "Paga con Google",
		  "Stripe" : "Page con Stripe",
		  "items" : "oggetti",
		  "addCart" : "Aggiungi al carrello",
		  "search" : "Cerca",
		  "itemCart" : "l'oggetto è nel carrello",
		  "removeCart" : "rimuovi dal carrello",
		  "hi" : "Ciao",
		  "loggedIn" : "Sei entrato!!",
		  "Picture" : "Immagine",
		  "firstName" : "Nome:",
		  "lastName" : "Cognome:",
		  "street" : "Via/n°:",
		  "ort" : "CAP:",
		  "place" : "Comune:",
		  "telephone" : "Telefono:",
		  "email" : "e-mail:",
		  "logout" : "Scollegati",
		  "update" : "Aggiorna",
		  "delete" : "Cancella",
		  "emailReq" : "campo e-mail obbligatorio",
		  "pwdReq" : "campo password obbligatorio",
		  "firstNameReq" : "campo Nome obbligatorio",
		  "lastNameReq" : "campo Cognome obbligatorio",
		  "cancel" : "Cancella",
		  "Thanks" : "Grazie per acquistare su Irpinia Express Store."
    	}

		var fr_translations = {
		  "title" : "Irpinia Express Store - User Registration and Login",
		  "Login" : "Login",
		  "Signup" : "Signup",
		  "Register" : "Register",
		  "Help" : "Help",
		  "Item" : "Item",
		  "Price" : "Price",
		  "Quantity" : "Quantity",
		  "Cart" : "Your cart is empty.",
		  "BackStore" : "back to store",
		  "ClearCart" : "clear cart",
		  "PayPal" : "check out using PayPal",
		  "Google" : "check out using Google",
		  "Stripe" : "check out using Stripe",
		  "items" : "items",
		  "addCart" : "add to cart",
		  "search" : "Search",
		  "itemCart" : "this item is in the cart",
		  "removeCart" : "remove from cart",
		  "hi" : "Hi",
		  "loggedIn" : "You're logged in!!",
		  "Picture" : "Picture",
		  "firstName" : "First Name:",
		  "lastName" : "Last Name:",
		  "street" : "Street/n.:",
		  "ort" : "ORT:",
		  "place" : "Place:",
		  "telephone" : "Telephone:",
		  "email" : "e-mail:",
		  "logout" : "Logout",
		  "update" : "Update",
		  "delete" : "Delete",
		  "emailReq" : "Username is required",
		  "pwdReq" : "Password is required",
		  "firstNameReq" : "First name is required",
		  "lastNameReq" : "Last name is required",
		  "cancel" : "Cancel",
		  "Thanks" : "Thanks for shopping at the Irpinia Express Store."
		}

		 var sp_translations = {
		  "title" : "Irpinia Express Store - User Registration and Login",
		  "Login" : "Login",
		  "Signup" : "Signup",
		  "Register" : "Register",
		  "Help" : "Help",
		  "Item" : "Item",
		  "Price" : "Price",
		  "Quantity" : "Quantity",
		  "Cart" : "Your cart is empty.",
		  "BackStore" : "back to store",
		  "ClearCart" : "clear cart",
		  "PayPal" : "check out using PayPal",
		  "Google" : "check out using Google",
		  "Stripe" : "check out using Stripe",
		  "items" : "items",
		  "addCart" : "add to cart",
		  "search" : "Search",
		  "itemCart" : "this item is in the cart",
		  "removeCart" : "remove from cart",
		  "hi" : "Hi",
		  "loggedIn" : "You're logged in!!",
		  "Picture" : "Picture",
		  "firstName" : "First Name:",
		  "lastName" : "Last Name:",
		  "street" : "Street/n.:",
		  "ort" : "ORT:",
		  "place" : "Place:",
		  "telephone" : "Telephone:",
		  "email" : "e-mail:",
		  "logout" : "Logout",
		  "update" : "Update",
		  "delete" : "Delete",
		  "emailReq" : "Username is required",
		  "pwdReq" : "Password is required",
		  "firstNameReq" : "First name is required",
		  "lastNameReq" : "Last name is required",
		  "cancel" : "Cancel",
		  "Thanks" : "Thanks for shopping at the Irpinia Express Store."
		}

		var de_translations = {
		  "title" : "Irpinia Express Store - User Registration and Login",
		  "Login" : "Login",
		  "Signup" : "Signup",
		  "Register" : "Register",
		  "Help" : "Help",
		  "Item" : "Item",
		  "Price" : "Price",
		  "Quantity" : "Quantity",
		  "Cart" : "Your cart is empty.",
		  "BackStore" : "back to store",
		  "ClearCart" : "clear cart",
		  "PayPal" : "check out using PayPal",
		  "Google" : "check out using Google",
		  "Stripe" : "check out using Stripe",
		  "items" : "items",
		  "addCart" : "add to cart",
		  "search" : "Search",
		  "itemCart" : "this item is in the cart",
		  "removeCart" : "remove from cart",
		  "hi" : "Hi",
		  "loggedIn" : "You're logged in!!",
		  "Picture" : "Picture",
		  "firstName" : "First Name:",
		  "lastName" : "Last Name:",
		  "street" : "Street/n.:",
		  "ort" : "ORT:",
		  "place" : "Place:",
		  "telephone" : "Telephone:",
		  "email" : "e-mail:",
		  "logout" : "Logout",
		  "update" : "Update",
		  "delete" : "Delete",
		  "emailReq" : "Username is required",
		  "pwdReq" : "Password is required",
		  "firstNameReq" : "First name is required",
		  "lastNameReq" : "Last name is required",
		  "cancel" : "Cancel",
		  "Thanks" : "Thanks for shopping at the Irpinia Express Store."		  
		}

		var pt_translations = {
		  "title" : "Irpinia Express Store - User Registration and Login",
		  "Login" : "Login",
		  "Signup" : "Signup",
		  "Register" : "Register",
		  "Help" : "Help",
		  "Item" : "Item",
		  "Quantity" : "Quantity",
		  "Price" : "Price",
		  "Cart" : "Your cart is empty.",
		  "BackStore" : "back to store",
		  "ClearCart" : "clear cart",
		  "PayPal" : "check out using PayPal",
		  "Google" : "check out using Google",
		  "Stripe" : "check out using Stripe",
		  "items" : "items",
		  "addCart" : "add to cart",
		  "search" : "Search",
		  "itemCart" : "this item is in the cart",
		  "removeCart" : "remove from cart",
		  "hi" : "Hi",
		  "loggedIn" : "You're logged in!!",
		  "Picture" : "Picture",
		  "firstName" : "First Name:",
		  "lastName" : "Last Name:",
		  "street" : "Street/n.:",
		  "ort" : "ORT:",
		  "place" : "Place:",
		  "telephone" : "Telephone:",
		  "email" : "e-mail:",
		  "logout" : "Logout",
		  "update" : "Update",
		  "delete" : "Delete",
		  "emailReq" : "Username is required",
		  "pwdReq" : "Password is required",
		  "firstNameReq" : "First name is required",
		  "lastNameReq" : "Last name is required",
		  "cancel" : "Cancel",
		  "Thanks" : "Thanks for shopping at the Irpinia Express Store."
		}
  
		$translateProvider.translations('en',en_translations);
		$translateProvider.translations('sp',sp_translations);
		$translateProvider.translations('it',it_translations);
		$translateProvider.translations('fr',fr_translations);
		$translateProvider.translations('de',de_translations);
		$translateProvider.translations('pt',pt_translations);
		$translateProvider.preferredLanguage('de');

}])
	
	.controller("translateController" ,["$scope","$translate",function($scope, $translate, DataService){
		$scope.currentLanguage = 'de';
		$scope.changeLanguage = function(lang){
		$scope.currentLanguage = lang;
		$translate.use(lang);
	}
	}]);


// create a data service that provides a store and a shopping cart that
// will be shared by all views (instead of creating fresh ones for each view).
storeApp.factory("DataService", function ($http) {
	
	// create store
    var myStore = new store($http);

    // create shopping cart
    var myCart = new shoppingCart("AngularStore");

    // enable PayPal checkout
    // note: the second parameter identifies the merchant; in order to use the 
    // shopping cart with PayPal, you have to create a merchant account with 
    // PayPal. You can do that here:
    // https://www.paypal.com/webapps/mpp/merchant
    myCart.addCheckoutParameters("PayPal", "paypaluser@youremail.com");

    // enable Google Wallet checkout
    // note: the second parameter identifies the merchant; in order to use the 
    // shopping cart with Google Wallet, you have to create a merchant account with 
    // Google. You can do that here:
    // https://developers.google.com/commerce/wallet/digital/training/getting-started/merchant-setup
    myCart.addCheckoutParameters("Google", "xxxxxxx",
        {
            ship_method_name_1: "UPS Next Day Air",
            ship_method_price_1: "20.00",
            ship_method_currency_1: "USD",
            ship_method_name_2: "UPS Ground",
            ship_method_price_2: "15.00",
            ship_method_currency_2: "USD"
        }
    );

    // enable Stripe checkout
    // note: the second parameter identifies your publishable key; in order to use the 
    // shopping cart with Stripe, you have to create a merchant account with 
    // Stripe. You can do that here:
    // https://manage.stripe.com/register
    myCart.addCheckoutParameters("Stripe", "pk_test_xxxx",
        {
            chargeurl: "https://localhost:1234/processStripe.aspx"
        }
    );

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
});

var appRet = angular.module("myApp", []); 
appRet.controller("loginDataRetFb", function($scope, DataRetFb) {
	var arr = [];
	arr = DataRetFb.getValue;
	
    $scope.firstName = arr.first_name;
    $scope.lastName = arr.last_name;
	$scope.gender = arr.gender;
	$scope.birthday = arr.birthday;
	$scope.email = arr.email;
	$scope.picture = arr.picture;
});

var appRet2 = angular.module('myApp', ['appLog']);
appRet2.service('DataRetFb', function(DataFacebook) {
    this.getValue = function() {
        return DataFacebook.getValue();
    };

    this.setValue = function() {
        DataFacebook.setValue('New value');
    }
});

