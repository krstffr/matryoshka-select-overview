// Just to make code a bit more readable/not long
var tmplName = 'matryoshka__customField__selectOverview';

Template[tmplName].helpers({

});

Template[tmplName].events({
	'click .matryoshka__nestable__container__button': function ( e, tmpl ) {
		var input = tmpl.find('.matryoshka__customField__selectOverview__locked-input');
		MatryoshkaSelectOverview.popup.show( tmpl.data, $(input) );
	}
});