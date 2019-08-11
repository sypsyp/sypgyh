/**
 * banner数据
 */ 
function getBannerData(){
    var arr = ['../../images/banner_01.jpg', '../../images/banner_02.jpg', '../../images/banner_03.jpg', '../../images/banner_04.jpg']
    return arr
}
/*
 * 首页 navnav 数据
 */ 
function getIndexNavData(){
    var arr = [
            {
                id:1,
                icon:"../../images/nav_icon_01.png",
                title:"快捷导航"
            },
            {
                id:2,
                icon:"../../images/nav_icon_02.png",
                title:"里脊类"
            },
            {
                id:3,
                icon:"../../images/nav_icon_03.png",
                title:"肉禽类"
            },
            {
                id:4,
                icon:"../../images/nav_icon_04.png",
                title:"牛肉类"
            },
            {
                id:5,
                icon:"../../images/nav_icon_05.png",
                title:"海鲜类"
            }
        ]
    return arr
}
/*
 * 首页 对应 标签 数据项
 */ 
function getIndexNavSectionData(){
    var arr = [
                [
        {

          subject: "干炸里脊",
          coverpath: "../../images/banner_01.jpg",
          message: '色泽金黄、外皮酥焦、里脊鲜嫩、制作简捷的干炸里脊，除了解解馋貌似还可以作为宴请朋友的小菜，虽比不了繁琐的大菜，但是那种信手拈来的闲情总让人愿意为之酌上一小杯。'
        },
        {

          subject: "可乐鸡翅",
          coverpath: "../../images/banner_02.jpg",
          message: '可乐鸡翅色泽艳丽、鸡翅嫩滑、咸甜适中，而且它的制作也很简单，因此受到很多人的欢迎。'
        },
        {

          subject: "酱牛肉",
          coverpath: "../../images/banner_03.jpg",
          message: '这道酱牛肉用了黄豆酱来煮，因此有着淡淡的酱香味，如果想要酱香更浓郁，可以加大黄酱的用量，而且煮好的牛肉要泡在汤中几个小时，这样能将汤中的味道更好地吸入到肉中。牛肉的部位随自己的喜好来挑选吧。'
        },
        {

          subject: "芝士山药焗扇贝",
          coverpath: "../../images/banner_04.jpg",
          message: '最常见的做法，通常都是粉丝蒸扇贝。粉丝吸收了鲜美的扇贝汁，那份滋味的美妙，不言而喻。但其实，用奶酪搭配扇贝，以西式的手法来进行烹饪，也是相当的好吃呢！'
        },
        {
          artype: 'beauty',
          subject: " 奥尔良炸鸡翅",
          coverpath: "../../images/banner_05.jpg",
          message: '酥到掉渣'
        }
                ],
                [
                    {
                    subject: "干炸里脊",
                    coverpath: "../../images/banner_01.jpg",
                    message: '色泽金黄、外皮酥焦、里脊鲜嫩、制作简捷的干炸里脊，除了解解馋貌似还可以作为宴请朋友的小菜，虽比不了繁琐的大菜，但是那种信手拈来的闲情总让人愿意为之酌上一小杯。'
                    }
                ],
                [
                  {
                    subject: "可乐鸡翅",
                    coverpath: "../../images/banner_02.jpg",
                    message: '可乐鸡翅色泽艳丽、鸡翅嫩滑、咸甜适中，而且它的制作也很简单，因此受到很多人的欢迎。'
                    },
                    {
                        artype:'beauty',
                        subject:" 奥尔良炸鸡翅",
                        coverpath:"../../images/banner_05.jpg",
                         message:'酥到掉渣'
                    }
                ],
                [
                    
                    {
                        artype:'hair',
                    subject: "酱牛肉",
                    coverpath: "../../images/banner_03.jpg",
                    message: '这道酱牛肉用了黄豆酱来煮，因此有着淡淡的酱香味，如果想要酱香更浓郁，可以加大黄酱的用量，而且煮好的牛肉要泡在汤中几个小时，这样能将汤中的味道更好地吸入到肉中。牛肉的部位随自己的喜好来挑选吧。'
                    }
                ],
                [
                    {
                        artype:'eyelash',
                    subject: "芝士山药焗扇贝",
                    coverpath: "../../images/banner_04.jpg",
                    message: '最常见的做法，通常都是粉丝蒸扇贝。粉丝吸收了鲜美的扇贝汁，那份滋味的美妙，不言而喻。但其实，用奶酪搭配扇贝，以西式的手法来进行烹饪，也是相当的好吃呢！'
                    }
                ] 
            ]
    return arr
}
/**
 * 
 * */ 
function getSkilledData(){
    var arr = [
                {
                        company:"糖醋排骨",
                        avatar:"../../images/skilledt_img_01.jpg",
                        message:'今天这道糖醋排骨就是没有炒糖色、没有过油， 非常省事又不费油。 只需用少许油翻炒排骨，而在排骨炒干炒香的时候加入冰糖一同翻炒， 再加入少许酱油上色，这样颜色和味道都特别正点。醋的比例按口味随意，一般是白糖：醋是2:1，因为先已经加入冰糖了。'
                    },
                    {
                        company:"酥炸生蚝",
                        avatar:"../../images/skilledt_img_02.jpg",
                        message:'这款葡萄酒是干红，拿到没舍得打开，直到今天过节才打开品尝，味道很不错，用了一点来搭配生蚝做菜，炸好我就吃了一个就没啦，我家孩子最爱吃啦'
                    },
                    {
                        company:"蟹粉小笼包",
                        avatar:"../../images/skilledt_img_03.jpg",
                        message:'蟹粉小笼是一道非常美味的传统小吃，用蟹肉和猪肉一起做成的馅料，皮薄馅大，满口留香。螃蟹有清热解毒，补骨添髓，养筋活血等食疗功效，和猪肉末搭配一起不仅味道更加鲜美，而且营养也更加丰富。一年一季不容错过的美味。'
                    },
                    {
                        company:"麻辣小龙虾",
                        avatar:"../../images/skilledt_img_04.jpg",
                        message:'小龙虾体内的蛋白质含量很高，且肉质松软，易消化，对身体虚弱以及病后需要调养的人是极好的食物；虾肉内还富含镁、锌、碘、硒等，镁对心脏活动具有重要的调节作用，能保护心血管系统，它可减少血液中胆固醇含量，防止动脉硬化，同时还能扩张冠状动脉，有利于预防高血压及心肌梗塞。'
                    }
            ]
    return arr
}

/**
 * 选择器 数据
 */ 
function getPickerData(){
    var arr =[
        {
            phone:'6666666666',
            province:'川菜',
            city:'辣系',
            addr:'香辣'
        },
        {
            phone:'888888888',
            province:'川菜',
            city:'辣系',
            addr:'麻辣'
        }
    ]
    return  arr
}
/**
 * 查询 地址
 * */ 
var user_data = userData()
function searchAddrFromAddrs(addrid){
    var result
    for(let i=0;i<user_data.addrs.length;i++){
        var addr = user_data.addrs[i]
        console.log(addr)
        if(addr.addrid == addrid){
            result = addr
        }
    }
    return result || {}
}
/**
 * 用户数据
 * */ 
function userData(){
    var arr = {
                uid:'1',
                nickname:'沙沙',
                name:'张三',
                phone:'66666666',
                avatar:'../../images/avatar.png',
                addrs:[
                   {
                        addrid:'1',
                        name:'张三',
                        phone:'66666666',
                        province:'川菜',
                        city:'辣系',
                        addr:'麻辣'
                    },
                    {
                        addrid:'2',
                        name:'李四',
                        phone:'88888888',
                        province:'川菜',
                        city:'辣系',
                        addr:'香辣'
                    } 
                ]
            }
    return arr
}
/**
 * 区
 * */ 
function provinceData(){
    var arr = [
        '请选择菜系','川菜','鲁菜','粤菜']
    return arr
}
/**
 * 市
 * */ 
function cityData(){
    var arr = [
        '请选择口味','咸口','甜口','辣系'
    ]
    return arr
}
/*
 * 对外暴露接口
 */ 
module.exports = {
  getBannerData : getBannerData,
  getIndexNavData : getIndexNavData,
  getIndexNavSectionData : getIndexNavSectionData,
  getPickerData : getPickerData,
  getSkilledData :getSkilledData,
  userData : userData,
  provinceData : provinceData,
  cityData : cityData,
  searchAddrFromAddrs : searchAddrFromAddrs

}