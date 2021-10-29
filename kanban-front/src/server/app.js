const bodyParser = require('body-parser')
const boardMock = require('./boardMock')
const port = 8080

module.exports = app => {
  app.use(bodyParser.json())
  app.listen(port, () => console.log(`Listening at http://localhost:${port}`))

  // for test
  app.get('/test', (req, res) => {
    res.send({
      message: 'testMessage'
    })
  })
  boardMock.addApi(app)
}

