require(['gitbook', 'jquery'], function(gitbook, $) {
  var $list = $('.css-passenger');
  if ($list.length > 0) {
    $.each($list, function(index, elem) {
      var $elem = $(elem);
      var $target = $(elem).next();
      $target.length > 0 && $target.addClass($elem.data('class'));
    });
  }
});