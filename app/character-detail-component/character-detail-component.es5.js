angular
  .module('character-detail-component', ['ngRoute', 'characters-service', 'zippy-component'])
  .config(function ($routeProvider) {
    $routeProvider.when('/character/:id', {
      template: '<character-detail-component><character-detail-component>'
    });
  })
  .component('characterDetailComponent', {
    templateUrl: 'app/character-detail-component/character-detail-component.html',
    controller: function (charactersService, $routeParams) {

      this.$onInit = function () {
        this.character = charactersService.getcharacter($routeParams.id);
        this.toggleCaption(false);
      };

      this.toggleCaption = function (closed) {
        this.zippyCaption = closed ? 'Show Appereances' : 'Hide Appereances';
      };

    }
});
