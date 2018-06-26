function filePicker(filepickerService) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link($scope, $element, attrs, ngModel) {

      $element.bind('click', (e) => {
        e.preventDefault();

        filepickerService.pick({
          accept: 'image/*',
          maxFiles: 1,
          transformation: { crop: { force: true, aspectRatio: 3/2 } }
        }, data => {
          console.log(data);
          ngModel.$setViewValue(data.url);

        });
      });
    }
  };
}

export default filePicker;
