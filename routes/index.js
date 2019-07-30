var express = require('express');
var path = require('path');
var router = express.Router();


class customRouter {

  constructor() {
    this.express = express;
    this.path = path;
    this.router = router;
    
    this.app = this.express();
    this.app.use(this.express.static("/../public"));
    this.setup();
  }

  setup() {

    this.router.get('/', function(req, res){
      res.render('status', {
        title: "Status Page",
      });
    });

    this.router.get('/magpie', function(req, res){
      res.render('magpie', {
        title: "The Magpie Inn",
      });
    });

  }

}


module.exports = customRouter;
