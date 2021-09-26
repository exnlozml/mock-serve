import express from 'express'; //引入express模块
import Mock from 'mockjs'; //引入mock模块
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('purchase home page')
})
// define the about route

// 1.采购经理画像排名
router.all('/no1', function (req, res) {
  res.json(Mock.mock({
    "status": 200,
    "data": {
      "rank|1-20": 3,
      "unit": "@ctitle()",
      "data": [
        {
          "name": '综合得分',
          "value|1-9.1-1": 8
        },
        {
          "name": '基本业务能力',
          "value|1-9.1-1": 8
        },
        {
          "name": '专业胜任能力',
          "value|1-9.1-1": 8
        }
      ]
    }
  }))
});


// 2.采购经理画像
router.all('/no2',function (req,res) {
  res.json(Mock.mock({
    "status":200,
    "data":[
      {
        "name":"成长水平",
        "value|1-100":10
      },
      {
        "name":"专业水平",
        "value|1-100":10
      },
      {
        "name":"价值水平",
        "value|1-100":10
      },
      {
        "name":"偏好水平",
        "value|1-100":10
      },
      {
        "name":"信用水平",
        "value|1-100":10
      }
    ]
  }))
});

//3.项目承担分析
router.all('/no3',function(req,res) {
  res.json(Mock.mock({
    "status":200,
    "data|4":[{
      "quater":"季度",
      "province|1-100":10,
      "department|1-100":10,
      "group|1-100":10,
      "person|1-100":10
    }]
  }))
})

//4.采购经理基本信息
router.all('/no4',function(req,res) {
  res.json(Mock.mock({
    "status":200,
    "data":{
      "name":"@cname()",
      "education|1":[
        "大专",
        "本科",
        "硕士",
        "博士"
      ],
      "department|1":[
        "总公司",
        "省公司",
        "市公司",
        "区公司"
      ],
      "age|25-60":10,
      "major|4-8":"@cword()"
    }
  }))
});

//5.画像下钻纬度分析
router.all('/no5',function(req,res) {
  res.json(Mock.mock({
    "status":200,
    "data":{
      "compositeScore|1-9.1-1":1,  // 综合得分
      // 成长水平
      "growthLevel":{  
        "check|1-9.1-1":3,  // 考核分数
        "frequency|1-9.1-1":3,  // 参加频次
        "increase|1-9.1-1":4  // 提高率
      },
      // 专业水平
      "majorLevel":{   
        "professionalism|1-9.1-1":3,  // 专业能力
        "theReviewOf|1-9.1-1":3,   // 评审年限
        "capacities|1-9.1-1":3   // 考核情况
      },
      // 信用水平
      "creditLevel":{   
        "violationDegree|1-9.1-1":3,   // 违规次数
        "reviewDegree|1-9.1-1":3,  // 评审次数
        "scoreSimilarity|1-9.1-1":3   // 评分相似度
      },
      // 偏好水平
      "preferenceLevel":{   
        "scorePreference|1-9.1-1":3,   // 分值偏好
        "supplierPreference|1-9.1-1":3,   // 供应商偏好
        "objectivityPreference|1-9.1-1":3   // 客观性偏好
      },
      // 价值水平
      "valueLevel":{   
        "shenpingDegree|1-9.1-1":3,   // 参评次数
        "bdScale|1-9.1-1":3,   // 标的规模
        "bid|1-9.1-1":3  // 打分中标率
      }
    }
  }))
});

//6.其他信息
router.all('/no6',function(req,res) {
  res.json(Mock.mock({
    "status":200,
    "data":[
      {
        "name":"评审认证积分",
        "value|1-100":40
      },
      {
        "name":"岗位认证得分",
        "value|1-100":40
      }
    ]
  }))
})

//7.采购经理历年画像水平趋势分析
router.all('/no7',function (req,res) {
  res.json(Mock.mock({
    "status":200,
    "data|8":[
      {
        "year|+1":2012,
        "value|1-100":30
      }
    ]
  }))
})

//8.继续教育学习能力
router.all('/no8',function(req,res) {
  res.json(Mock.mock({
    "status":200,
    "data|4":[
      {
        "year|+1":2020,  // 年份
        "trainDegree|1-100":80,  // 培训次数
        "trainHours|1-100":90,  // 培训时长
        "examResult|1-100":89  // 考试成绩
      }
    ]
  }))
})

export default router