angular.module('characters-app', [
  'character-header-component',
  'characters-list-component',
  'character-detail-component',
  'character-editor-component'
])
.component('charactersApp', {
  templateUrl: 'app/characters-app.html',
});
