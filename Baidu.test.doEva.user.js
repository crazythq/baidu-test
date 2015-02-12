// ==UserScript==
// @name         Baidu.test.doEva
// @name:zh-CN   百度众测任务辅助
// @description  Baidu.test.doEva Help
// @description:zh-cn  百度众测任务-答题按数字键提交
// @version      1.1
// @author       Tan Keung
// @match        http://test.baidu.com/crowdtesteva/eva/doEva/eva_id/*
// @grant        none
// ==/UserScript==

var num = '';//key name

//引入jQuery
if(!$){
    var scriptNode = document.createElement('script');
    scriptNode.src = "http://cdn.staticfile.org/jquery/1.10.2/jquery.min.js";
    //scriptNode.src = "file:///E:/lib/javascript/jquery1.10.2.min.js";
    document.head.appendChild(scriptNode);
}

//捕获键盘按键
function keyUp(e) {   
    var currKey=0,e=e||event;   
    currKey=e.keyCode||e.which||e.charCode;
    
    /*
    switch(currKey){
        case 49:
            num = 1;
        case 50:
            num = 2;
        case 51:
            num = 3;
        case 52:
            num = 4;
        case 53:
            num = 5;
        case 54:
            num = 6;
        case 55:
            num = 7;
        case 56:
            num = 8;
        case 57:
            num = 9;
        case 48:
            num = 10;
    }*/
    
    var keyName = String.fromCharCode(currKey);   
    console.log("按键码: " + currKey + " 字符: " + keyName);
    
    if(!isNaN(currKey) && (currKey>48 && currKey<=57)){
        num = currKey - 48;
    }
    if(!isNaN(currKey) && (currKey>96 && currKey<=105)){
        num = currKey - 96;
    }
    if(currKey==48 || currKey==96){
        num = 10;
    }
    //console.log("num="+num);
    
    //选择该选项
    $('.mb5:eq('+ ( num -1 ) +')').find('.checkbox_check_no').click();
    
    //店铺经营内容标注
    $('.multi-item:eq('+ ( num -1 ) +')').click();
    
    var question = $('.question-example a:first').html();
    if(question){
        //图片对对碰(旅游)
        if( question.indexOf('旅')>0 || question.indexOf('游')>0 ){
            $('.mb5:eq(1)').find('.checkbox_check_no').click();//选2
        }
        //图片对对碰(加盟)
        if( question.indexOf('加盟')>0 ){
            $('.mb5:eq(2)').find('.checkbox_check_no').click();//选3
        }
    }
    
    //提交
    if(currKey==13){
        $('#next_eva').click();
    }
}

document.onkeyup = keyUp;//注册按键事件


//添加序号
$('.checkbox_check_no').each(function(k,v){
    $(this).parent().before(k+1);
});
$('.multi-item').each(function(k,v){
    //店铺经营内容标注
    //$('.multi-item').attr('item_id', k);
    $(this).children('label').html((k+1)+" "+$(this).children('label').html());
});

$('iframe').height($('iframe').height()+100);//增加iframe高度

$('.mb5:eq(0)').find('.checkbox_check_no').click();//默认选择第一项

//滚动到底部
$('body').scrollTop($('.pro-content').offset().top);

//-----------------------------------------------------------------------------

//症状题
var answer = $('.question-example font:eq(1)').html();
if(answer){
    answer = answer.substr(1, answer.length-2);
    var ckly = $('.question-example font:eq(2)');
    if(ckly){
        ckly.html(ckly.html().replace(answer, "<strong><font color='blue'>"+answer+"</font></strong>"));
    }
}
//症状题 end

//网页搜索或浏览行为
var keyword = $('.question_title font:eq(1)').html();
if(keyword){
    $('.pro-do-eva .question:first').before('<font color="red">'+keyword+'</font>')
}
//网页搜索或浏览行为 end

//用户行为题
var keyword = $('.question_title > div font:eq(1) > b').html();
if(keyword){
    var arr_keyword = keyword.substr(1, keyword.length-2).split('');
    if(arr_keyword.length>0){
        var flag = false;
        //console.log(arr_keyword);
        for(var i in arr_keyword){
            flag = true;
            console.log(i+" "+arr_keyword[i]);
            //$('.question-example > textarea').html($('.question-example > textarea').html().replace(new RegExp(arr_keyword[i], "g"), "<strong><font color='blue'>"+ arr_keyword[i] +"</font></strong>"));
        }
        if(flag){
            //$('.question-example').before("<strong><font color='blue'>有</font></strong>");
        }
    }
}
//用户行为题 end
