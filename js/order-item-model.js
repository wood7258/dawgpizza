function createItemModel(config) {
	var model = createListModel(config);
	
	model.refresh = function() {
		var items = this.menu;
		model.setItems(items);
	};
	
	return model;
}