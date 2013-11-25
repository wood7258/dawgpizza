function createDeDrsView(config) {
    config.templateView = createDeDrView(config);
    var view = createTemplateListView(config);
	
    view.afterRender = function() {
        //add event handlers for add-to-cart buttons
        this.container.find('.add-to-cart').click(function(){
            var button = $(this);
            var eventData = {
                name: button.attr('data-item-name'),
                price: button.attr('data-item-price'),
                type: button.attr('data-item-type')
            };
            view.trigger('addToCart', eventData);
        });
    }; //afterRender()

    //auto-render if we have a model
    if (config.model)
        view.render();

    return view;
}