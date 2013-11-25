// menu-boogaloo.js

$(function() {
	var idx;
	var meatpies = $('.meat-list');
	var vegpies = $('.veg-list');
	var drinks = $('.drinks');
	var desserts = $('.desserts');
	var pizza;
	var template = $('.template.pie');
	for (idx = 0; idx < com.dawgpizza.menu.pizzas.length; idx++) {
		pizza = com.dawgpizza.menu.pizzas[idx];
		var menuline = template.clone();
		menuline.find('.item-name').html(pizza.name);
		menuline.find('.description').html(pizza.description);
		menuline.find('.menu-price').html('$' + pizza.prices[0] + '/' + '$' + pizza.prices[1] + '/' + '$' + pizza.prices[2]);
        menuline.removeClass('template');
		if (pizza.vegetarian) {
			vegpies.append(menuline);
		}
		else {
			meatpies.append(menuline);
		}
	}
	var drink;
	var template = $('.template.dedr');
	for (idx = 0; idx < com.dawgpizza.menu.drinks.length; ++idx) {
		drink = com.dawgpizza.menu.drinks[idx];
		var menuline = template.clone();
		menuline.find('.item-name').html(drink.name);
		menuline.find('.menu-price').html('$' + drink.price);
        menuline.removeClass('template');
		drinks.append(menuline);
	}
	for (idx = 0; idx < com.dawgpizza.menu.desserts.length; ++idx) {
		drink = com.dawgpizza.menu.desserts[idx];
		var menuline = template.clone();
		menuline.find('.item-name').html(drink.name);
		menuline.find('.menu-price').html('$' + drink.price);
        menuline.removeClass('template');
		desserts.append(menuline);
	}
});