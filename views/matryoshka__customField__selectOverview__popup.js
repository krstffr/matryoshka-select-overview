// Just to make code a bit more readable/not long
var tmplName = 'matryoshka__customField__selectOverview__popup';

Template[tmplName].helpers({
	showListData: function () {
		return this;
	},
	listData: function () {
		var toReturn = this;
		if (MatryoshkaSelectOverview.popup.options.mapMethod)
			toReturn = _.compact( _.map(this, MatryoshkaSelectOverview.popup.options.mapMethod ) );
		var keysToFilter = _.compact([
			MatryoshkaSelectOverview.popup.options.fieldToUse,
			MatryoshkaSelectOverview.popup.options.fieldToDisplay,
			MatryoshkaSelectOverview.popup.options.fieldImgPreview
		]);
		return Matryoshka.filter.filterCollection( toReturn, keysToFilter );
	},
	listViewStyle: function () {
		return Session.get('listViewStyle');
	},
	listItemValue: function () {
		return this[ MatryoshkaSelectOverview.popup.options.fieldToUse ];
	},
	listItemValueToDisplay: function () {
		return this[ MatryoshkaSelectOverview.popup.options.fieldToDisplay ];
	},
	listItemImagePreview: function () {
		if ( MatryoshkaSelectOverview.popup.options.fieldImgPreview && Session.equals('listViewStyle', 'grid') )
			return this[ MatryoshkaSelectOverview.popup.options.fieldImgPreview ];
	}
});

Template[tmplName].events({
	'click .set-list-view-style-to-grid': function () {
		Session.set('listViewStyle', 'grid');
	},
	'click .set-list-view-style-to-list': function () {
		Session.set('listViewStyle', 'list');
	},
	'click .close-popup': function () {
		MatryoshkaSelectOverview.popup.deletePopup();
	},
	'click .matryoshka__customField__selectOverview__list__item': function () {
		var value = this[ MatryoshkaSelectOverview.popup.options.fieldToUse ];
		// The focus()/blur() is for "saving" the value to the session.
		MatryoshkaSelectOverview.popup.input.val( value ).focus().blur();
		MatryoshkaSelectOverview.popup.deletePopup();
	}
});