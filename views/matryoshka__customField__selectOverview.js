// Just to make code a bit more readable/not long
var tmplName = 'matryoshka__customField__selectOverview';

Template[tmplName].helpers({

});

Template[tmplName].events({
	'click .matryoshka__customField__selectOverview__select-button': function ( e, tmpl ) {
		var input = tmpl.find('.matryoshka__customField__selectOverview__locked-input');
		MatryoshkaSelectOverview.popup.show( tmpl.data, $(input) );
	},
	'click .matryoshka__customField__selectOverview__reset-button': function ( e, tmpl ) {
		// Find the input, reset it's value, blur() it to store it's value in Matryoshka
		var input = tmpl.find('.matryoshka__customField__selectOverview__locked-input');
		$(input).val('').focus().blur();
	}
});