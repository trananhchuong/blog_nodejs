const newsRouter = require('./news');
const siteRouter = require('./site');



function route(app) {

  app.get("/tin-tuc", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ a: 1, b: 2 }));
  });

  app.use('/', siteRouter)
  app.use('/news', newsRouter)

}

module.exports = route;
