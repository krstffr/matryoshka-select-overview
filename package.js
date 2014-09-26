Package.describe({
  summary: "\"Select-field-data-from-a-list-or-grid-overview\" support for Matryoshka.",
  name: 'krstffr:matryoshka-select-overview',
  version: "0.0.2",
  git: "https://github.com/krstffr/meteor-matryoshka-select-overview.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@0.9.0");

  // Matryoshka Pen stuff
  // The HTML, JS and CSS.
  var filesToInclude = [
  'matroyshka-select-overview.js',
  'views/matryoshka__customField__selectOverview.html',
  'views/matryoshka__customField__selectOverview.js',
  'views/matryoshka__customField__selectOverview__popup.html',
  'views/matryoshka__customField__selectOverview__popup.js',
  'css/stylesheets/matroyshka-select-overview.css'
  ];
  api.add_files( filesToInclude, 'client');

  // We need to use Matryoshka and Template-stuff on the client
  api.use(['krstffr:matryoshka', 'templating'], 'client');

});