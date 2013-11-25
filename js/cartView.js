/*
    createCartView()

    Creates a view for the whole shopping cart, using TemplateListView
    as the prototype. It overrides the render() function to update the
    total price, and register click event handlers for the remove item
    buttons.
*/

function createCartView(config) {
    config.cartModel = config.model;
	config.templateView = createCartItemView(config);
	var view = createTemplateListView(config);
	
	view.afterRender = function() {
		this.totalPrice.html(this.model.getTotalPrice());
		this.subPrice.html(this.model.getSubPrice());
		this.taxPrice.html(this.model.getTaxPrice());
		if (this.model.getSubPrice() < 20) {
			this.orderButton.addClass('disabled');
			this.orderButton.html('$20 Minimum');
		}
		else {
			this.orderButton.removeClass('disabled');
			this.orderButton.html('Place My Order');
		}
	};
	
	return view;
} //createCartView()
