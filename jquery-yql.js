(function($) {   
  $.extend({  
    yql: function(query, callback) {
      var yqlURL = "http://query.yahooapis.com/v1/public/yql";
      var data = {
        q: query,
        format: 'json',
        env: 'store://datatables.org/alltableswithkeys'
      };

      return $.get(yqlURL, data, callback, 'jsonp');
    }
  });
})(jQuery);
