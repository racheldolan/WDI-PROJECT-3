function bulmaCard() {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: './views/directives/bulmaCard.html',
    scope: {
      image: '=',
      title: '=',
      subtitle: '='
    }
  };
}

export default bulmaCard;
