/*!
 * VERSION: 0.1
 * DATE: 2014-02-09
 * UPDATES AND DOCS AT: https://github.com/MadebyAe/screensvg
 * Copyright (c) 2014 Angel Estrada
 * Author URL: http://www.angel-estrada.com
 * Author Twitter: @MadebyAe
 * License : The MIT License (MIT)
 * Copyright (c) 2014 Ae╱
*/

(function($) {
  $.fn.screensvg = function(options) {
    var defaultoptions = {
      testmode : false,
      background : false,
      path : '/img/',
      callback : false
    };
    var options = $.extend(defaultoptions, options);
    return this.each(function() {
      var self = $(this);
      if (typeof window.SVGSVGElement === "undefined" || options.testmode) {
        if (options.background === true) {
          var dotsvg = /.*\.svg$/;
          for (var i = 0; i != self.length; ++i) {
            var style = self[i].currentStyle || window.getComputedStyle(self[i], false);
            self[i].style.backgroundImage = style.backgroundImage.replace('/svg/', options.path).replace('.svg', '.png');
          }
        } else {
          var dotsvg = /.*\.svg$/;
          for (var i = 0; i != self.length; ++i) {
            if(self[i].src.match(dotSVG)) {
              self[i].src = self[i].src.replace('/svg/', options.path).replace('.svg', '.png');
            }
          }
        }
      }
    }); 
  };
})(jQuery);