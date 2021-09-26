# 采购经理-个人画像
#### 1.采购经理画像排名

![RUNOOB 图标](https://github.com/exnlozml/mock-serve/blob/master/mocks/bigdata/filedDesc/purchase/image/no1.jpg "采购经理画像排名")

<http:192.168.3.54:8090/purchase/portraitPerson/no1>
```
{
    "status": 200,
    "data": {
      "rank": 3,   // 排名
      "unit": "陕西省公司",   // 单位
      "data": [
        {
          "name": '综合得分',    // 类型
          "value": 8.2      // 得分
        },
        {
          "name": '基本业务能力',
          "value": 8.3
        },
        {
          "name": '专业胜任能力',
          "value": 9.2
        }
      ]
    }
  }
```

#### 2.采购经理画像

![RUNOOB 图标](https://github.com/exnlozml/mock-serve/blob/master/mocks/bigdata/filedDesc/purchase/image/no2.jpg "采购经理画像")

<http:192.168.3.54:8090/purchase/portraitPerson/no2>
```
{
    "status":200,
    "data":[
      {
        "name":"成长水平",   // 类型
        "value":89    // 得分
      },
      {
        "name":"专业水平",
        "value":78
      },
      {
        "name":"价值水平",
        "value":90
      },
      {
        "name":"偏好水平",
        "value":77
      },
      {
        "name":"信用水平",
        "value":87
      }
    ]
  }
```

#### 3.项目承担分析

![RUNOOB 图标](https://github.com/exnlozml/mock-serve/blob/master/mocks/bigdata/filedDesc/purchase/image/no3.jpg "项目承担分析")

<http:192.168.3.54:8090/purchase/portraitPerson/no3>
```
{
    "status":200,
    "data":[{
      "quater":"1季度",    // 季度(共四个季度)
      "province":89,     // 本省
      "department":74,     // 本部门
      "group":90,       // 本组
      "person":99        // 本人
    },
    {
      "quater":"2季度",
      "province":89,
      "department":74,
      "group":90,
      "person":99
    },
    {
      "quater":"3季度",
      "province":89,
      "department":74,
      "group":90,
      "person":99
    },
    {
      "quater":"4季度",
      "province":89,
      "department":74,
      "group":90,
      "person":99
    }]
  }
```

#### 4.采购经理基本信息

![RUNOOB 图标](https://github.com/exnlozml/mock-serve/blob/master/mocks/bigdata/filedDesc/purchase/image/no4.jpg "采购经理基本信息")

<http:192.168.3.54:8090/purchase/portraitPerson/no4>
```
{
    "status":200,
    "data":{
      "name":"李元祥",     // 名字
      "education":"硕士",   // 学历
      "department":"区公司",  // 所属单位
      "age":35,     // 年龄
      "major":"网路工程"     // 专业
    }
  }
```

#### 5.画像下钻纬度分析

![RUNOOB 图标](https://github.com/exnlozml/mock-serve/blob/master/mocks/bigdata/filedDesc/purchase/image/no5.jpg "画像下钻纬度分析")

<http:192.168.3.54:8090/purchase/portraitPerson/no5>
```
{
    "status":200,
    "data":{
      "compositeScore":8.8,  // 综合得分
      // 成长水平
      "growthLevel":{  
        "check":9.1,  // 考核分数
        "frequency":8.9,  // 参加频次
        "increase":9.9  // 提高率
      },
      // 专业水平
      "majorLevel":{   
        "professionalism":9.2,  // 专业能力
        "theReviewOf":8.9,   // 评审年限
        "capacities":8.3   // 考核情况
      },
      // 信用水平
      "creditLevel":{   
        "violationDegree":9.3,   // 违规次数
        "reviewDegree":9.9,  // 评审次数
        "scoreSimilarity":8.8   // 评分相似度
      },
      // 偏好水平
      "preferenceLevel":{   
        "scorePreference":9.1,   // 分值偏好
        "supplierPreference":8.3,   // 供应商偏好
        "objectivityPreference":9.3   // 客观性偏好
      },
      // 价值水平
      "valueLevel":{   
        "shenpingDegree":8.9,   // 参评次数
        "bdScale":9.2,   // 标的规模
        "bid":8.7  // 打分中标率
      }
    }
  }
```

#### 6.其他信息

![RUNOOB 图标](https://github.com/exnlozml/mock-serve/blob/master/mocks/bigdata/filedDesc/purchase/image/no6.jpg "其他信息")

<http:192.168.3.54:8090/purchase/portraitPerson/no6>
```
{
    "status":200,
    "data":[
      {
        "name":"评审认证积分",   // 类型
        "value":89      // 分数
      },
      {
        "name":"岗位认证得分",
        "value":70
      }
    ]
  }
```

#### 7.采购经理历年画像水平趋势分析

![RUNOOB 图标](https://github.com/exnlozml/mock-serve/blob/master/mocks/bigdata/filedDesc/purchase/image/no7.jpg "采购经理历年画像水平趋势分析")

<http:192.168.3.54:8090/purchase/portraitPerson/no6>
```
{
    "status":200,
    "data":[
      {
        "year":2012,   // 年份
        "value":30    // 数据
      },
      {
        "year":2013,
        "value":30
      },
      {
        "year":2014,
        "value":30
      },
      {
        "year":2015,
        "value":30
      },
      {
        "year":2016,
        "value":30
      }
    ]
  }
```

#### 8.继续教育学习能力

![RUNOOB 图标](https://github.com/exnlozml/mock-serve/blob/master/mocks/bigdata/filedDesc/purchase/image/no8.jpg "继续教育学习能力")

<http:192.168.3.54:8090/purchase/portraitPerson/no7>
```
{
    "status":200,
    "data":[
      {
        "year":2020,  // 年份
        "trainDegree":80,  // 培训次数
        "trainHours":90,  // 培训时长
        "examResult":89  // 考试成绩
      },
      {
        "year":2021,  // 年份
        "trainDegree":80, 
        "trainHours":90,  
        "examResult":89  
      },
      {
        "year":2022,  // 年份
        "trainDegree":80,  
        "trainHours":90,  
        "examResult":89 
      }
    ]
  }
```