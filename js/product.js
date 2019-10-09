//----------------------------------------------------------------
// product class
function product(id, title, description, price, image, language, cal, carot, vitc, folate, potassium, fiber) {
    this.id = id; 
    this.title = title;
    this.description = description;
    this.price = price;
	this.image = image;
	this.language = language;
    this.cal = cal;
    this.nutrients = {
        "Carotenoid": carot,
        "Vitamin C": vitc,
        "Folates": folate,
        "Potassium": potassium,
        "Fiber": fiber
    };
}
