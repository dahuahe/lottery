/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: -1,
    count: 1,
    title: "",
    text: "特别奖",
    img: ""
  },
  {
    type: 654,
    count: 1,
    title: "",
    text: "IPHONE 14 PRO MAX",
    img: "../img/111.jpg"
  },
  {
    type: 1,
    count: 1,
    title:"",
    text: "戴森吸尘器V10",
    img: "../img/戴森吸尘器.png"
  },
  {
    type: 2,
    count: 1,
    title:"",
    text: "考勤补补卡",
    img: "../img/考勤补补卡1.jpg"
  },
  {
    type: 3,
    count: 1,
    title:"",
    text: "雅马哈吉他FS100C",
    img: "../img/雅马哈吉他FS100C.jpg"
  },
  {
    type: 4,
    count: 1,
    title:"",
    text: "微软游戏机Xbox Series S",
    img: "../img/微软游戏机Xbox Series S.jpg"
  },
  {
    type: 5,
    count: 1,
    title:"",
    text: "星特朗天文望远镜80DX",
    img: "../img/星特朗天文望远镜80DX.jpg"
  },
  {
    type: 6,
    count: 1,
    title:"",
    text: "MAC口红31#316",
    img: "../img/MAC口红31.jpg"
  },
  {
    type: 7,
    count: 1,
    title:"",
    text: "华为智能手表",
    img: "../img/华为智能手表.jpg"
  },
  {
    type: 8,
    count: 1,
    title: "",
    text: "考勤补补卡",
    img: "../img/考勤补补卡1.jpg"
  },
  {
    type: 9,
    count: 1,
    title:"",
    text: "柏翠咖啡机",
    img: "../img/柏翠咖啡机.jpg"
  },
  {
    type: 10,
    count: 1,
    title:"",
    text: "阿迪达斯足球2022卡塔尔世界杯",
    img: "../img/阿迪达斯足球2022卡塔尔世界杯.jpg"
  },
  {
    type: 11,
    count: 1,
    title:"",
    text: "富安娜长绒棉四件套",
    img: "../img/富安娜长绒棉四件套.jpg"
  },
  {
    type: 12,
    count: 1,
    title:"",
    text: "索密斯多功能早餐机",
    img: "../img/索密斯多功能早餐机.png"
  },
  {
    type: 13,
    count: 1,
    title:"",
    text: "索尼蓝牙音响SRS-XB23",
    img: "../img/索尼蓝牙音响SRS-XB23.png"
  },
  {
    type: 14,
    count: 1,
    title:"",
    text: "COCO-MAT乳胶枕护颈枕",
    img: "../img/COCO-MAT乳胶枕护颈枕.jpg"
  },
  {
    type: 15,
    count: 1,
    text: "奖品考勤补补卡",
    title: "",
    img: "../img/考勤补补卡1.jpg"
  },
  {
    type: 16,
    count: 1,
    text: "奖品索密斯多功能早餐机",
    title: "",
    img: "../img/索密斯多功能早餐机.png"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "贵州多彩新媒体";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
