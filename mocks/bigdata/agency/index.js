import express from 'express'; //引入express模块
import Mock from 'mockjs'; //引入mock模块
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  next()
})
// define the home page route
router.get('/', function (req, res) {
	setTimeout(() => {
		res.json(Mock.mock({
			"status":200,
			"data":{
				"xdata":[1, 2, 3, 4, 5, 6],
				"ydata":[0, 2, 1, 2, 2, 0]
			}
		}))
	}, 1000);
  
})
// define the about route
router.all('/about', function (req, res) {
	let date = new Date();
  console.log('Time: ', date.getHours()+":"+date.getMinutes()+":"+date.getSeconds())
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