// ==UserScript==
// @name         easyicon check-all
// @namespace    http://www.easyicon.net/
// @version      0.1
// @description  添加easyicon搜索结果全选按钮
// @author       thq
// @match        http://www.easyicon.net/iconsearch/*
// @grant        none
// ==/UserScript==

var btn = document.createElement('button');
btn.id = "check_all";
btn.innerText = "全选";
$('.total_icons').append(btn);
$('#check_all').click(function(){
    $('.add_cart').click();
});
