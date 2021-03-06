/**
 *<Example>
 *import AimiliIcons from './src/com/amili/app/mixins/icons';
 * <AimiliIcons name='aml-nail' size={60} />
 */

import {
	createIconSet
} from 'react-native-vector-icons';

const glyphMap = {
	"boniaosuanzhushe":0xe609,
	"bushuihuanfu":0xe61c,
	"chuzhoukangshuai":0xe61d,
	"dianmeigou":0xe61e,
	"fengwocan":0xe61f,
	"jiaoyuandanbaitianchong":0xe620,
	"kaiyanjiao":0xe621,
	"meimaojiemao3":0xe64e,
	"meibainenfu":0xe64f,
	"dazaoxiaovlian":0xe658,
	"pifu":0xe659,
	"quba":0xe66c,
	"quhongxiesi":0xe66d,
	"quheiyanquan":0xe66e,
	"quyandai":0xe66f,
	"roudusuzhushe":0xe670,
	"mianbu":0xe671,
	"quban":0xe672,
	"shoulian":0xe673,
	"shoushensuxing":0xe674,
	"shuangyanpi":0xe675,
	"taiyangxue":0xe676,
	"xiaba":0xe677,
	"yanmei":0xe678,
	"qudou":0xe679,
	"tianleigou":0xe67a,
	"zitizhifangtianchong":0xe67b,
	"weizheng":0xe67c,
	"chunbu":0xe67d,
	"hanshiyongjiuzhuang":0xe67e,
	"mianjia":0xe67f,
	"shangyanlian":0xe680,
	"xuancaishuangmou":0xe681,
	"erbi":0xe682,
	"remenxiangmu":0xe683,
	"etou":0xe684,
	"tiezi-riji":0xe663,
	"tiezi-huati":0xe661,
	"tiezi-wenda":0xe665,
	"tiezi-tongzhi":0xe664,
	"tiezi-huodong":0xe662,
	"tiezi-zhibo":0xe666,
	"riji":0xe694,
	"huati":0xe692,
	"wenda":0xe68f,
	"tongzhi":0xe693,
	"huodong":0xe691,
	"zhibo":0xe690,
	"vip-v0":0xe641,
	"vip-v1":0xe650,
	"vip-v2":0xe651,
	"vip-v3":0xe652,
	"vip-v4":0xe655,
	"vip-v5":0xe640,
	"vip-v6":0xe656,
	"vip-v7":0xe653,
	"vip-v8":0xe654,
	"zhengzhuang-manyidu":0xe646,
	"zhengzhuang-manyidu-pressed":0xe611,
	"zhengzhuang-bahengan":0xe65a,
	"zhengzhuang-bahengan-pressed":0xe65f,
	"zhengzhuang-zhongzhanggan":0xe647,
	"zhengzhuang-zhongzhanggan-pressed":0xe639,
	"zhengzhuang-tengtonggan":0xe649,
	"zhengzhuang-tengtonggan-pressed":0xe648,
	"dianzan":0xe6bf,
	"dianzanp":0xe6c0,
	"jubaop":0xe6c1,
	"jubao":0xe6c2,
	"lahei":0xe6c5,
	"laheip":0xe6c6,
	"lahei1":0xe6d0,
	"laheip1":0xe6cf,
	"pingbi":0xe6c7,
	"pingbip":0xe6c9,
	"shoucang":0xe6c8,
	"shoucangp":0xe6cb,
	"shezhichenggong":0xe6ca,
	"tongji-guankan":0xe60b,
	"tongji-guankan1":0xe695,
	"guankan":0xe689,
	"pinglun":0xe68a,
	"xihuan":0xe68b,
	"hudong-xihuan-pressed":0xe63e,
	"tongji-pinglun":0xe610,
	"tongji-pinglun1":0xe696,
	"hudong-dianzan":0xe660,
	"tongji-xihuan":0xe604,
	"hudong-dianzan-pressed":0xe601,
	"hudong-xihuan":0xe600,
	"my-caogao":0xe622,
	"tools-riji":0xe60a,
	"my-huati":0xe625,
	"common-zixun":0xe63a,
	"my-dianping":0xe623,
	"my-huodong":0xe626,
	"my-zhibo":0xe627,
	"my-jiarudequanzi":0xe628,
	"my-guanzhudequanzi":0xe64d,
	"my-canyude":0xe61a,
	"my-fankui":0xe624,
	"common-jifenbi":0xe60f,
	"huodongjieshu":0xe6c3,
	"huodongweikaishi":0xe6c4,
	"huodongminge":0xe68d,
	"huodong-jiangli":0xe60c,
	"common-rili":0xe60e,
	"huodong-minge":0xe602,
	"zhibopaipian":0xe6be,
	"shoushixiangyouqingping":0xe6bd,
	"common-zhiboshijian":0xe638,
	"common-daojishi":0xe64a,
	"bofang":0xe6ac,
	"quxiaoquanpingguankan":0xe6ad,
	"quanpingguankan":0xe6ae,
	"zanting":0xe6af,
	"wenhao":0xe6b0,
	"zhuiwen":0xe6b1,
	"navig-tuijian":0xe619,
	"navig-tuijian-pressed":0xe63f,
	"navig-quanzi":0xe615,
	"navig-quanzi-pressed":0xe642,
	"navig-dongtai":0xe644,
	"navig-dongtai-pressed":0xe643,
	"navig-wode":0xe61b,
	"navig-wode-pressed":0xe645,
	"navig-fabiao":0xe64c,
	"navig-fabiao1":0xe62c,
	"common-close":0xe66a,
	"editor-xiangji":0xe629,
	"common-shezhi":0xe65d,
	"editor-jianpan":0xe62a,
	"common-fenxiang":0xe66b,
	"editor-biaoqing":0xe62b,
	"editor-xiepinglun":0xe65b,
	"editor-zhaopian":0xe62e,
	"common-xiangji":0xe65e,
	"editor-xiangce":0xe668,
	"gengduo1":0xe6cd,
	"common-sousuo":0xe617,
	"common-sousuo1":0xe699,
	"common-dingbuxiaoxi":0xe605,
	"common-fanhui":0xe606,
	"common-jinru":0xe607,
	"common-xiangxiazhankai":0xe657,
	"common-xiangxiazhankaixiangshangzhiyin":0xe633,
	"xiangshangshousuo":0xe688,
	"common-guanzhudu":0xe667,
	"common-guanzhudu-pressed":0xe608,
	"common-changjianwenti":0xe603,
	"tools-xiangmubaodian":0xe634,
	"miliriji":0xe687,
	"tools-miliriji":0xe64b,
	"tools-yisheng":0xe613,
	"tools-yiyuan":0xe635,
	"14wifi":0xe685,
	"common-bukaixin":0xe630,
	"common-zairushuju":0xe636,
	"jinggao":0xe686,
	"daoxu":0xe6bb,
	"zhengxu":0xe6cc,
	"gengduo":0xe6bc,
	"common-xiangmubiaoqian":0xe669,
	"biaoqian":0xe6ce,
	"common-qianyipianriji":0xe614,
	"common-remenpinglun":0xe616,
	"common-xilieriji":0xe62d,
	"common-xiangguanhuati":0xe62f,
	"common-xiangguanquanzi":0xe631,
	"common-xiangguan":0xe632,
	"common-zhengzhuang":0xe637,
	"common-zixunhuifu":0xe63b,
	"tools-zixunwenti":0xe63c,
	"common-checked":0xe65c,
	"dingdanxiangqing":0xe6b7,
	"yuezhifu":0xe6b8,
	"weixin":0xe6b9,
	"zhifubao":0xe6ba,
	"gouxuan":0xe68c,
	"launcher":0xe68e,
	"ios":0xe6b2,
	"Android":0xe6b3,
	"xiazai":0xe6b4,
	"youxiang":0xe6b5,
	"dianhua":0xe6b6,
	"tools-erji":0xe60d,
	"common-hot":0xe618,
	"tools-shipin":0xe612,
	"mili_launcher":0xe63d,

}

const AimiliIcons = createIconSet(glyphMap, 'iconfont', 'iconfont.ttf');

module.exports = AimiliIcons;
