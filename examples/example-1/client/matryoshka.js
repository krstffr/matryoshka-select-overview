Session.set('cats', { Breeds: [{ breedName: 'Bengal' }, { breedName: 'Rag doll' }, { breedName: 'Norsk bondkatt' }] });

Matryoshka.nestables.addType({
	name: 'page',
	createable: true
});

Matryoshka.nestables.add({
	nestableName: 'webPage',
	nestableNameReadable: 'An ordinary web page.',
	type: 'page',
	fields: [{
		name: 'cat',
		type: 'select-overview',
		selectOverviewOptions: {
			buttonName: 'cat.',
			type: 'session',
			sessionName: 'cats',
			sessionKey: 'Breeds',
			fieldToUse: 'breedName'
		}
	}]
});