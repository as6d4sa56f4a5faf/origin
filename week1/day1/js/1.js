// var time = '2017-10-24';

// 1、replace
// time=time.replace(/'-'/g,'/');

//2、split
// time.split('-').join('/');

//正则
// var reg=//g

//4、Date
// time=new Date(time);
// console.log(time.getFullYear()+'/'+(time.getMonth()+1)+'/'+time.getDate());
function queryURLParameter(url) {//获取当前URL地址中问号传递参数的值（项目必用）
    //=>在这里实现你的代码
    var inAsk = url.indexOf('?'),
        inWell = url.indexOf('#');
//    2、截取到我们需要的内容
    var resAsk=url.substring(inAsk+1,inWell),
        resWill=url.substring(inWell+1);
//    "name=zxt&age=28&sex=0" "teacher"
    //->获取想要的
    var obj={HASH:resWill},
        aryAsk=resAsk.split('&');
    for (var i = 0; i < aryAsk.length; i++) {
        var item=aryAsk[i],
            itemAry=item.split('='),
            key=itemAry[0],
            value=itemAry[1];
        obj[key]=value;

    }

}
var str = 'http://www.zhufengpeixun.com/stu/?name=zxt&age=28&sex=0#teacher';
var result = queryURLParameter(str);
//=>result的结果为：
/*

 */
//如果我加一段话
//https://www.baidu.com/s?wd=JavaScript&rsv_spt=1&rsv_iqid=0xb47fc54c00022c8c&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=98012088_5_dg&ch=12&rsv_enter=1&rsv_sug3=7&rsv_sug1=6&rsv_sug7=100&rsv_t=083brCA5MNTXEjXn4OsNUOF%2FrivBYMIADUrCBjMuRC7J%2ForhPlNVsV8SSJv7%2B76qQfE8iA&rsv_sug2=0&inputT=4129&rsv_sug4=4994