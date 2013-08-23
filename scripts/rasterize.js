// Usage phantom.js rasterize URL filename [qiita]
var page = require('webpage').create(),
    address, output, width, height, paperwidth, paperheight;

if (phantom.args.length < 2) {
  console.log('Usage: rasterize.js URL filename');
  phantom.exit();
}

address = phantom.args[0];
output = phantom.args[1];
type = phantom.args[2] !== undefined ? phantom.args[2] : 'default';
console.log('type: ' + type);
page.customHeaders = {
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36'
};
page.viewportSize = { width: 1280, height: 1024 };
page.paperSize = { width: 21, height: 29.7, border: '0px' };
page.open(address, function (status) {
  if (status !== 'success') {
    console.log('Unable to load the address!');
  } else {
    if(type === 'qiita')
    {
      page.includeJs('http://code.jquery.com/jquery-2.0.3.min.js', function() {
        page.evaluate(function () {
          $('#global-header-nav').remove();
          $('#item-page header section').remove();
          $('#item-page header ul.item-status').remove();
          $('#item-page > div.container > div.row > div.span3').remove();
          $('#item-footer-action-box').remove();
          $('.text-advertisement').remove();
          $('#item-page > div.container > div.row > div.span9').attr('class', 'span12');
          $('#article-footer').remove();
          $('#bottom-introduction').remove();
          $('#footer-content :not(.copyright)').remove();
          $('#main').css('margin-top', '0px');
          $('#main').css('padding-top', '10px');
        });
      });
    }
    window.setTimeout(function () {
      page.render(output);
      phantom.exit();
    }, 200);
  }
});
