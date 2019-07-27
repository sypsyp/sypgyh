/**
 * banner数据
 */ 
function getBannerData(){
    var arr = ['../../images/banner_01.png', '../../images/banner_02.png', '../../images/banner_03.png', '../../images/banner_04.png']
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
                title:"新手礼"
            },
            {
                id:3,
                icon:"../../images/nav_icon_03.png",
                title:"回归礼"
            },
            {
                id:4,
                icon:"../../images/nav_icon_04.png",
                title:"名人堂"
            },
            {
                id:5,
                icon:"../../images/nav_icon_05.png",
                title:"防沉迷"
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
                        
                        subject:"新手大礼包",
                        coverpath:"../../images/recommend_img_01.png",
                        price:'¥198',
                        message:'价值198元大礼包免费送！'
                    },
                    {
                        
                        subject:"防沉迷系统上线",
                        coverpath:"../../images/recommend_img_02.png",
                        price:'¥0',
                        message:'自2007年7月15日防沉迷系统正式推出后，根据政府相关规定，未满18周岁的玩家将被纳入防沉迷范围。届时被纳入防沉迷的玩家在游戏中的收益将会受损。！'
                    },
                    {
                        
                        subject:"回归大礼包乐享版",
                        coverpath:"../../images/recommend_img_03.png",
                        price:'¥288',
                        message:'回归七天即可领取！'
                    },
                    {
                        
                        subject:"名人堂",
                        coverpath:"../../images/recommend_img_05.png",
                        price:'VIP7',
                        message:'VIP7玩家永久保留'
                    },
                    {
                        
                        subject:" 回归大礼包至尊版",
                        coverpath:"../../images/recommend_img_06.png",
                        price:'¥388',
                        message:'回归三十天即可领取终极大礼包'
                    }
                ],
                [
                    {
                        artype:'nails',
                        subject:"新手大礼包",
                        coverpath:"../../images/recommend_img_01.png",
                        price:'¥198',
                        message:'价值198元大礼包免费送！'
                    }
                ],
                [
                    {
                        artype:'beauty',
                        subject:"回归大礼包乐享版",
                        coverpath:"../../images/recommend_img_03.png",
                        price:'¥288',
                        message:'回归七天即可领取！'
                    },
                    {
                        artype:'beauty',
                        subject:" 回归大礼包至尊版",
                        coverpath:"../../images/recommend_img_06.png",
                        price:'¥198',
                        message:'回归三十天即可领取终极大礼包'
                    }
                ],
                [
                    
                    {
                        artype:'hair',
                        subject:"名人堂",
                        coverpath:"../../images/recommend_img_05.png",
                        price:'VIP7',
                        message:'VIP7玩家永久保留'
                    }
                ],
                [
                    {
                        artype:'eyelash',
                        subject:"防沉迷系统上线",
                        coverpath:"../../images/recommend_img_02.png",
                        price:'¥0',
                        message:'自2007年7月15日防沉迷系统正式推出后，根据政府相关规定，未满18周岁的玩家将被纳入防沉迷范围。届时被纳入防沉迷的玩家在游戏中的收益将会受损。！'
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
                        company:"新手推荐",
                        avatar:"../../images/skilledt_img_01.png",
                        nickname:'新手性价比礼包',
                        price:'¥30',
                        message:'新玩家值得拥有'
                    },
                    {
                        company:"回归推荐",
                        avatar:"../../images/skilledt_img_02.png",
                        nickname:'回归性价比礼包',
                        price:'¥66',
                        message:'回归玩家超高性价比'
                    },
                    {
                        company:"乐享版月卡",
                        avatar:"../../images/skilledt_img_03.png",
                        nickname:'普通版月卡',
                        price:'¥30',
                        message:'仅需三十元'
                    },
                    {
                        company:"至尊版月卡",
                        avatar:"../../images/skilledt_img_04.png",
                        nickname:'豪华版月卡',
                        price:'¥800',
                        message:'仅需一百二十八元'
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
            name:'张三',
            phone:'13386870328',
            province:'新三国杀',
            city:'新服',
            addr:'十周年大区'
        },
        {
            name:'李四',
            phone:'13812314563',
            province:'新三国杀',
            city:'老服',
            addr:'9区'
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
                phone:'13386870328',
                avatar:'../../images/avatar.png',
                addrs:[
                   {
                        addrid:'1',
                        name:'张三',
                        phone:'13812314563',
                        province:'新三国杀',
                        city:'新服',
                        addr:'十周年大区'
                    },
                    {
                        addrid:'2',
                        name:'李四',
                        phone:'13812314563',
                        province:'新三国杀',
                        city:'老服',
                        addr:'9区'
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
        // {pid:1,pzip:'110000',pname:'北京市'},
        // {pid:2,pzip:'120000',pname:'天津市'}
        '请选择大区','新三国杀'
    ]
    return arr
}
/**
 * 市
 * */ 
function cityData(){
    var arr = [
        // {cid:1,czip:'110100',cname:'市辖区',pzip:'110000'},
        // {cid:2,czip:'120100',cname:'市辖区',pzip:'120000'}
        '请选择区服','1-5区','6-9区','十周年大区'
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