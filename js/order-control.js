// order-control.js

$(function() {
	var cartModel = createCartModel();
	
	var placeOrder = $('.place-order');

	var cartView = createCartView({
		model: cartModel,
		template: $('.cart-item-template'),
		container: $('.cart-items-container'),
		totalPrice: $('.total-price'),
		taxPrice: $('.tax-price'),
		subPrice: $('.sub-price'),
		orderButton: placeOrder
	});
	
	$('.last-order').click(function() {
		var cartJSON = localStorage.getItem('cart');
		if (cartJSON && cartJSON.length > 0) {
			cartModel.setItems(JSON.parse(cartJSON));
		}
	});
	
	var temPie;
	var meatMenu = [];
	var vegMenu = [];
	var pidx = 0;
	for (pidx; pidx < com.dawgpizza.menu.pizzas.length; ++pidx) {
		temPie = com.dawgpizza.menu.pizzas[pidx];
		if (temPie.vegetarian)
			vegMenu.push(temPie);
		else
			meatMenu.push(temPie);
	}
	
	var meatModel = createItemModel({
		menu: meatMenu
	});
	
	var meatView = createPizzasView({
		model: meatModel,
		template: $('.template.pie'),
		container: $('.meat-list')
	});
	
	meatModel.refresh();
	
	var vegModel = createItemModel({
		menu: vegMenu
	});
	
	var vegView = createPizzasView({
		model: vegModel,
		template: $('.template.pie'),
		container: $('.veg-list')
	});
	
	vegModel.refresh();
	
	var drinksModel = createItemModel({
		menu: com.dawgpizza.menu.drinks
	});
	
	var drinksView = createDeDrsView({
		model: drinksModel,
		template: $('.template.pie'),
		container: $('.drinks'),
	});
	
	drinksModel.refresh();
	
	var dessertsModel = createItemModel({
		menu: com.dawgpizza.menu.desserts
	});
	
	var dessertsView = createDeDrsView({
		model: dessertsModel,
		template: $('.template.pie'),
		container: $('.desserts'),
	});
	
	dessertsModel.refresh();
	
	pizzasView.on('addToCart', function(data){
		cartModel.addItem({
			name: data.name,
			size: data.size,
			type: data.type,
			price: data.price
		});
	});
	
	drinksView.on('addToCart', function(data){
		cartModel.addItem({
			name: data.name,
			type: data.type,
			price: data.price
		});
	});
	
	dessertsView.on('addToCart', function(data){
		cartModel.addItem({
			name: data.name,
			type: data.type,
			price: data.price
		});
	});
	
	$('.start-over').click(function() {
		cartModel.setItems([]);
	});
	
	placeOrder.click(function(){
		var signupForm = $('form');
		var reqFields = ["name", "addr-1", "zip", "phone"];
		var reqField;
		var reqValue;
		for (var i = 0; i < reqFields.length; i++) {
			var fieldName = reqFields[i];
			reqField = signupForm.find('input[name="' + fieldName + '"]');
			reqValue = reqField.val().trim();
			if (0 === reqValue.length) {
				alert('You must enter your ' + reqField.attr('placeholder') + '!');
				return false;
			}
		}
		
		var info = {
			address1: signupForm.find('input[name="addr-1"]').val(),
			address2: signupForm.find('input[name="addr-2"]').val(),
			name: signupForm.find('input[name="name"]').val(),
			zip: signupForm.find('input[name="zip"]').val(),
			phone: signupForm.find('input[name="phone"]').val(),
			items: JSON.parse(cartModel.toJSON())
		};
		
		var json = JSON.stringify(info);
		
		localStorage.setItem('cart', cartModel.toJSON());
		
		signupForm.find('input[name="cart"]').val(json);
		signupForm.submit();
	});
});