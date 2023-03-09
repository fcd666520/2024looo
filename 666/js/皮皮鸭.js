var rule = {
    title: '皮皮鸭',
    host: 'https://www.pipiya.cc/',
    class_name:'电影&电视剧&美剧&日韩剧&动漫',
    class_url:'20&26&21&28&25',
    homeUrl: '',
    searchUrl: '/index.php/ajax/suggest?mid=1&wd=**',
    searchable: 2,
    quickSearch: 0,
    headers:{'User-Agent':'MOBILE_UA'},
    // 分类链接fypage参数支持1个()表达式
    // url: '/index.php/api/vod#type=fyclass&page=fypage',
	url: '/index.php/api/vod#type=fyfilter&page=fypage',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}',
	filter: {"20":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"20"},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"恐怖","v":"恐怖"},{"n":"动作","v":"动作"},{"n":"科幻","v":"科幻"},{"n":"剧情","v":"剧情"},{"n":"战争","v":"战争"},{"n":"警匪","v":"警匪"},{"n":"犯罪","v":"犯罪"},{"n":"动画","v":"动画"},{"n":"奇幻","v":"奇幻"},{"n":"冒险","v":"冒险"},{"n":"武侠片","v":"33"},{"n":"奇幻片","v":"34"},{"n":"纪录片","v":"35"},{"n":"其他片","v":"36"}]}],"37":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"全部"},{"n":"国产剧","v":"国产剧"},{"n":"港台剧","v":"39"},{"n":"欧美剧","v":"40"},{"n":"日韩剧","v":"41"},{"n":"其他剧","v":"42"}]}]},
	filter_def:{
		20:{cateId:'20'},
		26:{cateId:'26'},
		21:{cateId:'21'},
		28:{cateId:'28'},
        25:{cateId:'25'}

	},
    detailUrl:'/index.php/vod/detail/id/fyid.html',
    图片来源:'@Referer=https://www.pipiya.cc/',
    推荐:'.list-vod.flex .public-list-box;a&&title;.lazy&&data-original;.public-list-prb&&Text;a&&href',
    一级:'',
    一级:'js:let body=input.split("#")[1];let t=Math.round(new Date/1e3).toString();let key=md5("DS"+t+"DCC147D11943AF75");let url=input.split("#")[0];body=body+"&time="+t+"&key="+key;print(body);fetch_params.body=body;let html=post(url,fetch_params);let data=JSON.parse(html);VODS=data.list.map(function(it){it.vod_pic=it.vod_pic.replace("mac:","https:");return it});',
    二级:{
		"title":".slide-info-title&&Text;.slide-info:eq(3)--strong&&Text",
		"img":".detail-pic&&data-original",
		"desc":".fraction&&Text;.slide-info-remarks:eq(1)&&Text;.slide-info-remarks:eq(2)&&Text;.slide-info:eq(2)--strong&&Text;.slide-info:eq(1)--strong&&Text",
		"content":"#height_limit&&Text",
		"tabs":".anthology&&.swiper-slide",
		"tab_text":".swiper-slide--i&&Text",
		"lists":".anthology-list-box:eq(#id) li"
	},
    搜索:'json:list;name;pic;;id',
}