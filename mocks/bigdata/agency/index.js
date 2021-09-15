import express from 'express';
import Mock from 'mockjs'; //引入mock模块
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
	let date = new Date();
  console.log('Time: ', date.getHours()+":"+date.getMinutes()+":"+date.getSeconds())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('agency home page')
})
// define the about route
router.post('/about', function (req, res) {
  console.log('Body: ',req.body);
  res.json(Mock.mock({
		"status": 200,
		"data|5": [{
			"name": "@cname()",
			"type|5": "@cword()",
			"rank|+1": 1,
			"value|100-300": 100
		}]
	}))
})

export default router