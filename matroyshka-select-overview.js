function MatryoshkaSelectOverviewHandler() {

	var that = this;

	// This is for setting up the field type in Matryoshka.
	// Else Matryoshka will think the "pen" type is invalid.
	that.fieldTypeObject = {
		name: 'select-overview',
		templateFileName: 'matryoshka__customField__selectOverview',
		initMethod: function() {
			Session.setDefault('listViewStyle', 'grid');
			// Remove any current popups
			if (that.popup.currentPopup)
				that.popup.deletePopup();
		}
	};

	that.popup = {};
	that.popup.options = {};
	// Holder for the current popup
	that.popup.currentPopup = false;
	// The input to be filled later with the data
	that.popup.input = false;
	// To keep code shorter
	that.popup.tmplName = 'matryoshka__customField__selectOverview__popup';

	// Method for getting the data for the popup
	that.popup.getData = function () {
		// Currently only sessions are supported
		if ( that.popup.options.type === 'session' ) {

			if (!Session.get(that.popup.options.sessionName))
				return ;

			return Session.get(that.popup.options.sessionName)[ that.popup.options.sessionKey ] ||
			Session.get(that.popup.options.sessionName);

		}
	};

	that.popup.show = function ( data, input ) {
		// Remove any current popups
		if (that.popup.currentPopup)
			that.popup.deletePopup();
		// The user defined options for this field
		that.popup.options = data.selectOverviewOptions;
		// The input to be filled later with the data
		that.popup.input = input;
		// This is the data to be used to populate the "popup"
		var dataToUse = that.popup.getData();
		that.popup.currentPopup = Blaze.renderWithData( Template[that.popup.tmplName], dataToUse, document.body );
		// The body should not be scrollable!
		Matryoshka.DOMhelpers.body.toggleHiddenOverflow( true );
	};

	that.popup.deletePopup = function () {
		if (that.popup.currentPopup)
			Blaze.remove(that.popup.currentPopup);
		that.popup.currentPopup = false;
		that.popup.input = false;
		Matryoshka.DOMhelpers.body.toggleHiddenOverflow( false );
		Matryoshka.filter.hide();
	};

	that.init = function () {
		// Add this field type to Matryoshka
		Matryoshka.userDefinedFields.add( that.fieldTypeObject );
	};

	that.init();

}

MatryoshkaSelectOverview = new MatryoshkaSelectOverviewHandler();
