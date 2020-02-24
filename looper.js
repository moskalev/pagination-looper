const Nightmare = require('nightmare');
var vo = require('vo')
const pages = 628
const login_form_url = 'https://yoursiteurlhere.com/login'
const pagination_url = 'https://yoursiteurlhere.com/pagination?page='

vo(run)(function(err, result) {
  if (err) throw err

  result.forEach(function (text) {
    console.log('#result > h3: ', text)
  })
})

function *run() {
  var nightmare = Nightmare({show: true, gotoTimeout: 120000, loadTimeout: 120000, waitTimeout: 120000});
  yield nightmare
    .cookies.clearAll()
    .viewport(1600, 868)
    .useragent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.122 Safari/537.36')
    .goto(login_form_url)
    .wait(60000)

  for (var i = 0; i < pages; i++) {
    yield nightmare
      .goto(pagination_url+i)
      .wait(3000)
      .html('pages/' + i + '.html')
  }

  yield nightmare.end()
}
