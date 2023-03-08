var express = require('express');
var router = express.Router();

const middleware =(req,res,next)=>{
  console.log("Middleware")
  next();
}
const middleware2 =(req,res,next)=>{
  console.log(req+"Middleware2")
  next();
}

/* GET home page. */
router.get('/',(req,res)=>{
  res.send("<h1>Welcome to Home Page</h1><img src='https://png.pngtree.com/thumb_back/fh260/background/20220312/pngtree-home-page-signature-icon-home-page-button-navigation-image_1061910.jpg'></img>");
  res.end();
});
router.get('/about',middleware,(req,res)=>{
  res.send('<h1>This Is Middleware 1</h1>');
  res.end();
});
router.get('/contact',middleware2,(req,res)=>{
  res.send('<h1>This Is Middleware 2</h1>');
  res.end();
});


module.exports = router;
