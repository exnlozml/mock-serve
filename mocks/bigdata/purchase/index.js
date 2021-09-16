import express from 'express'; //引入express模块
import Mock from 'mockjs'; //引入mock模块
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('purchase home page')
})
// define the about route
router.post('/about', function (req, res) {
  console.log(req.body);
  res.json(Mock.mock({
		"status": 200,
		"data|1-9": [{
			"name|5-8": /[a-zA-Z]/,
			"id|+1": 1,
			"value|0-500": 20
		}]
	}))
})

export default router