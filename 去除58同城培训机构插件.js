// ==UserScript==
// @name          删除58的培训机构
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://cd.58.com/tech/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';
//此处是本人收集的培训机构名称
var px=new Array(
   '成都华育信息技术职业技能培训学校',
    '四川天纵科技有限公司',
    '四川新华电脑学校',
    '博创华宇（北京）科技有限公司',
    '成都五月花劳动职业技能培训学校',
    '北京中青中关村软件人才基地',
    '北京数通国软信息技术有限公司成都分公司',
    '博创华宇',
    '蜗牛创想',
    '新华集团',
    '北京千锋互联科技有限公司',
    '成都博为峰软件技术有限公司',
    '中软开创',
    '成都达内科技有限公司青羊分公司',
    '华为高科（北京）软件有限公司',
    '北京荣新广育科技有限公司',
    '成都汇智动力信息技术有限公司',
    '成都糖果时代科技有限公司',
    '华信智原教育技术有限公司',
    '中关村大学生就业实训基地',
    '成都尚学堂科技有限公司',
     '成都微银众筹数据信息技术服务有限公司',
     '四川众信互联科技有限公司',
     '北京瞻前科技发展中心（瞻前科技）',
     '上海华杰职业技能培训有限公司',
    '成都达内科技',
    '成都国信安信息产业基地有限公司'
);
function q(){
    var all=$('.w271 a');
    var i=0,len=all.length;
    for(i=0;i<len;i++){
        var title=$(all[i]).attr('title');
        //此处通过和收集的培训机构名称对比，若相同，则删除该招聘信息。
        if(isPeixunString(title)){
             $(all[i]).parent().parent().remove();
        }
        //此处通过培训机构相关的关键字进行移除
        for(var y=0;y<px.length;y++){
            if(title==px[y]){
                 $(all[i]).parent().parent().remove();
            }
        }

    }
    return false;
}

var gjz=new Array('培训','教育','大学生','职业','人才基地');//默认设置的关键字

function isPeixunString(str){
    for(var z=0;z<gjz.length;z++)
    {
        if(str.indexOf(gjz[z])!=-1){
           return true;
        }
    }
    return false;
}
$(document).ready(function(){
    setTimeout(function(){
        $(".gSuggest a").text("去除培训机构");//替换掉原本的按钮文本。
        $(".gSuggest a").click(q);
    }, 2000);
});

/*这是本人闲来写的小插件，可在油猴中使用，有任何问题，欢迎指正讨论。
我的邮箱：yuruke@qq.com
QQ:1240703085
*/