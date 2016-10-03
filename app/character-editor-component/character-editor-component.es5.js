angular
  .module('character-editor-component', ['ngRoute', 'characters-service', 'clone-service'])
  .config(function ($routeProvider) {
    $routeProvider.when('/character/:id/edit', {
      template: '<character-editor-component><character-editor-component>'
    });
  })
  .component('characterEditorComponent', {
    templateUrl: 'app/character-editor-component/character-editor-component.html',
    controller: function (charactersService, cloneService, $location, $routeParams) {

      this.character = cloneService.createClone(charactersService.getcharacter($routeParams.id));


      this.$onInit = function () {
        console.log('running');
      };

      this.cancel = function (character) {
        cloneService.abortChanges();
        goToDetails(character);
      };

      this.save = function (character) {
        cloneService.commitChanges();
        goToDetails(character);
      };

      goToDetails = function (character) {
        $location.url('/character/' + character.id);
      };

    }
});
