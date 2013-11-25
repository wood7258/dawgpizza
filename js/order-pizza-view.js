function createPizzaView(config) {
    var view = createTemplateView(config);

    view.afterRender = function(clonedTemplate){

        //add buttons for the various formats, indicating their price
        var price;
        var sizeTemplate = clonedTemplate.find('.price-template');
        var clonedSizeTemplate;

		clonedSizeTemplate = sizeTemplate.clone();
		clonedSizeTemplate.removeClass('template');
		clonedTemplate.find('.item-name').html(this.model.name);
		clonedTemplate.find('.description').html(this.model.description);
		clonedSizeTemplate.find('.price-size').html('Small');
		clonedSizeTemplate.find('.price-size-price').html(this.model.prices[0]);
		clonedSizeTemplate.find('button').attr({
			'data-item-name': this.model.name,
			'data-item-price': this.model.prices[0],
			'data-item-type': this.model.type,
			'data-item-size': "small"
		});
		clonedTemplate.find('.price-list').append(clonedSizeTemplate);

		clonedSizeTemplate = sizeTemplate.clone();
		clonedSizeTemplate.removeClass('template');
		clonedTemplate.find('.item-name').html(this.model.name);
		clonedTemplate.find('.description').html(this.model.description);
		clonedSizeTemplate.find('.price-size').html('Medium');
		clonedSizeTemplate.find('.price-size-price').html(this.model.prices[1]);
		clonedSizeTemplate.find('button').attr({
			'data-item-name': this.model.name,
			'data-item-price': this.model.prices[1],
			'data-item-type': this.model.type,
			'data-item-size': "medium"
		});
		clonedTemplate.find('.price-list').append(clonedSizeTemplate);

		clonedSizeTemplate = sizeTemplate.clone();
		clonedSizeTemplate.removeClass('template');
		clonedTemplate.find('.item-name').html(this.model.name);
		clonedTemplate.find('.description').html(this.model.description);
		clonedSizeTemplate.find('.price-size').html('Large');
		clonedSizeTemplate.find('.price-size-price').html(this.model.prices[2]);
		clonedSizeTemplate.find('button').attr({
			'data-item-name': this.model.name,
			'data-item-price': this.model.prices[2],
			'data-item-type': this.model.type,
			'data-item-size': "large"
		});
		clonedTemplate.find('.price-list').append(clonedSizeTemplate);
		
		clonedTemplate.removeClass('template');
    };

    return view;
}