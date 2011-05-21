/*
 * jQuery YQL plugin
 *
 * Copyright (c) 2011 Alexey Zakharov
 * licensed under MIT license.
 *
 * https://github.com/lexer/jquery-yql/raw/master/license.txt
 *
 * Version: 1.0
 */

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
