// Start-up helpers, kept in a file of their own so the pages' Content-Security-Policy
// can forbid inline script altogether.
(function () {
  // Web fonts load without holding up the page: the stylesheet starts as media="print"
  // and is switched on once it has arrived (or never, where Google Fonts is blocked).
  var fonts = document.getElementById('fonts');
  if (fonts) {
    var on = function () {
      fonts.media = 'all';
    };
    if (fonts.sheet) on();
    else fonts.addEventListener('load', on);
  }
  // If the desert never gets going, still show the intro after a few seconds.
  if (document.getElementById('intro')) {
    setTimeout(function () {
      document.body.classList.add('ready');
    }, 7000);
  }
})();
