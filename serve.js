import express from 'express'; //引入express模块
import bodyParser from 'body-parser'; // 引入body-parser模块
import fs from 'fs'

let app = express(); //实例化express
let date = new Date()
console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' MockServe Start!');
/**
 * 配置路由
 * @param  {[type]} req  [客户端发过来的请求所带数据]
 * @param  {[type]} res  [服务端的相应对象，可使用res.send返回数据，res.json返回json数据，res.down返回下载文件]
 */

/*为app添加中间件处理跨域请求*/
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});
/**
 *  设置body解析中间件
 */
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // to support URL-encoded bodies
/**
 * 监听8090端口
 */
app.listen('8090');

// /*readdir读取目录下所有文件*/
// fs.readdir('./mock_data/bigData/', function (err, files) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		/*成功读取文件，取得文件名，拼接生成对应action，监听对应接口并返回对应文件数据*/
// 		files.forEach(function (v, i) {
// 			fs.readdir('./mock_data/bigData/' + v, function (err, files) {
// 				if (err) {
// 					console.log(err);
// 				} else {
// 					files.forEach(function (u, i) {
// 						app.all(`/` + v + `/${u.replace(/.json/, '')}`, function (req, res) {
// 							console.log(req.body);
// 							fs.readFile(`./mock_data/bigData/` + v + `/${u}`, 'utf-8', function (err, data) {
// 								if (err) {
// 									console.log(err);
// 								} else {
// 									res.json(Mock.mock(JSON.parse(data)));
// 								}
// 							})
// 						})
// 					})
// 				}
// 			})
// 		})
// 	}
// })

import agency from './mocks/bigdata/agency/index.js';
import purchase from './mocks/bigdata/purchase/index.js';

app.use('/agency', agency);
app.use('/purchase', purchase)