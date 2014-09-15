function MatryoshkaSelectOverviewHandler() {

	var that = this;

	// This is for setting up the field type in Matryoshka.
	// Else Matryoshka will think the "pen" type is invalid.
	that.fieldTypeObject = {
		name: 'select-overview',
		templateFileName: 'matryoshka__customField__selectOverview'
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
		that.toggleBodyOverflow( true );
	};

	that.popup.deletePopup = function () {
		if (that.popup.currentPopup)
			Blaze.remove(that.popup.currentPopup);
		that.popup.currentPopup = false;
		that.popup.input = false;
		that.toggleBodyOverflow( false );
		Matryoshka.filter.hide();
	};

	that.bodyOverflowFirstValue = false;

	that.toggleBodyOverflow = function ( forceHidden ) {
		var bd = $('body');
		// First make sure we've stored the initial state of the body overflow value.
		if (!that.bodyOverflowFirstValue)
			that.bodyOverflowFirstValue = bd.css('overflow');
		// If we're not force-hiding the overflow or it's currently hidden, reset it.
		if (forceHidden) {
			that.bodyOverflowFirstValue = bd.css('overflow');
			bd.css({ overflow: 'hidden' });
		}
		// Else hide it and store it's current overflow value for use later.
		else {
			bd.css({ overflow: that.bodyOverflowFirstValue });
		}
	};

	that.init = function () {
		Meteor.startup(function () {
			Session.setDefault('listViewStyle', 'grid');
			that.popup.deletePopup();
		});
		// Add this field type to Matryoshka
		Matryoshka.userDefinedFields.add( that.fieldTypeObject );
	};

	that.init();

}

MatryoshkaSelectOverview = new MatryoshkaSelectOverviewHandler();