# matryoshka-select-overview

**Currently only supports data which is set as a Session.**

Add this package to your Meteor.js/Matryoshka project, and then add the field you want to use the select-overview for like this:

```javascript

{
	name: 'imageUrl',
	description: 'What is the URL of the photo?',
	type: 'select-overview',
	imagePreview: true,
	selectOverviewOptions: {
		// This will be displayed on the button: "Select image" in this case
		buttonName: 'image',
		// This is the only supported data source currently. So set type to Session
		type: 'session',
		// What is the name of the Session you want to use?
		sessionName: 'simple-s3__bucket-items',
		// OPTIONAL. What is the key of the object inside the Session you want to use?
		// If not set, the whole session will be used.
		sessionKey: 'Contents',
		// What Key of the listed object do you want to be used for setting the value of the field?
		fieldToUse: 'WholeUrl',
		// OPTIONAL: What Key do you want the user to see? Maybe its not the same as the Key you
		// want to use for setting the value.
		fieldToDisplay: 'Key',
		// OPTIONAL: If there is a Key containing an image src, set it here and the image will 
		// displayed for the user!
		fieldImgPreview: 'WholeUrl',
		// You'll probably need to format your data before returning the list?
		// For example, setting some Keys, or filtering some elements.
		// Else just return the listItem as is in the mapMethod!
		mapMethod: function ( listItem ) {
			// Only return images which are not in the thrash!
			if( !(/\.(gif|jpg|jpeg|png)$/i).test(listItem.Key) || (/thrash/i).test( listItem.Key ) )
				return false;
			listItem.WholeUrl = 'http://some-bucket.s3.amazonaws.com/'+listItem.Key;
			return listItem;
		}
	}
}

```