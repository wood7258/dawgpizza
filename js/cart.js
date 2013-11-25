/*
    createCartModel()

    Creates a model for the shopping cart. This uses the ListModel
    as the prototype, but adds a few specific methods.

    The config parameter can contain the following properties:
    - items (array of objects) initial items for the cart (optional)
*/

function createCartModel(config) {
	var model = createListModel(config);
	
	model.getSubPrice = function() {
		var idx;
		var totalPrice = 0;
		for (idx = 0; idx < this.items.length; ++idx) {
			totalPrice+= Number(this.items[idx].price);
		}
		return totalPrice.toFixed(2);
	};
	
	model.getTaxPrice = function() {
		return Number(model.getSubPrice()*.095).toFixed(2);
	};
	
	model.getTotalPrice = function() {
		return (Number(model.getSubPrice()) + Number(model.getTaxPrice())).toFixed(2);
	};
	
	model.toJSON = function() {
		return JSON.stringify(this.items);
	};
	
	return model;
} //createCartModel()