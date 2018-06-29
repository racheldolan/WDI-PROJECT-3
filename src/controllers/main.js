function MainCtrl($scope, $auth, $state, $rootScope, $timeout, $transitions){
  $scope.isAuthenticated = $auth.isAuthenticated;
  $scope.currentUser = null;
  $scope.navbarOpen = false;
  $scope.navbarHome = false;

  // toggles a class on the navbar to change background color
  $transitions.onSuccess({}, () => {
    $scope.navbarOpen = false;
    window.scrollTo(0,0);
    $scope.navbarHome = true;
    $scope.isHomepage = $state.$current.name === 'home';
    if($scope.isHomepage){
      $scope.navbarHome = !$scope.navbarHome;
    } else {
      $scope.navbarHome;
    }
  });

  $rootScope.$on('loggedIn', (e, data) => {
    $scope.currentUser = data;
  });

  if($auth.isAuthenticated()) $scope.currentUserId = $auth.getPayload().sub;


  $rootScope.$on('flashMessage', (e, data) => {
    $scope.flashMessage = data;

    $timeout(() => $scope.flashMessage = null, 4000);
  });

  $scope.toggleMenu = function() {
    $scope.navbarOpen = !$scope.navbarOpen;
  };
  $scope.logout =function() {
    $auth.logout();
    $scope.currentUser = null;
    $state.go('home');
  };
}

export default MainCtrl;
