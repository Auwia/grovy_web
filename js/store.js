function store($http) {
	
	this.products = $http.get("ws/allStock.php").then(
			function(response) {
				
				var arr = [];
				
				for (var i = 0; i < response.data.records.length; i++) {
					arr.push(new product(response.data.records[i].id, response.data.records[i].title, response.data.records[i].description, response.data.records[i].price, response.data.records[i].image,response.data.records[i].language,0,1,2,3,4,5));
				}
				return arr;
			}
	);
	
    this.dvaCaption = [
        "Negligible",
        "Low",
        "Average",
        "Good",
        "Great"
    ];
    this.dvaRange = [
        "below 5%",
        "between 5 and 10%",
        "between 10 and 20%",
        "between 20 and 40%",
        "above 40%"
    ];
}
store.prototype.getProduct = function (id) {
    for (var i = 0; i < this.products.$$v.length; i++) {
        if (this.products.$$v[i].id == id)
            return this.products.$$v[i];
    }
    return null;
}
