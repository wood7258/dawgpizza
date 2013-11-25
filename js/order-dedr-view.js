function createDeDrView(config) {
    var view = createTemplateView(config);

    view.afterRender = function(clonedTemplate){

        //add buttons for the various formats, indicating their price
        var price;
        var sizeTemplate = clonedTemplate.find('.price-template');
        var clonedSizeTemplate;

		clonedSizeTemplate = sizeTemplate.clone();
		clonedSizeTemplate.removeClass('template');
		clonedTemplate.find('.item-name').html(this.model.name);
		clonedSizeTemplate.find('.price-size').html('serving');
		clonedSizeTemplate.find('.price-size-price').html(this.model.price);
		clonedSizeTemplate.find('button').attr({
			'data-item-name': this.model.name,
			'data-item-price': this.model.price,
			'data-item-type': this.model.type
		});
		clonedTemplate.find('.price-list').append(clonedSizeTemplate);
		
		clonedTemplate.removeClass('template');
    };

    return view;
}