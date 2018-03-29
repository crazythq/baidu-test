// ==UserScript==
// @name         Google Search Open In New Window
// @version      0.1
// @description  Google搜索结果点击在新标签页打开
// @author       thq
// @match        https://*.google.com*/*
// @grant        none
// ==/UserScript==

var r = document.getElementsByClassName("r");
for(var i=0; i< r.length; i++){
    var a = r[i].children[0];
    a.target = "_blank";
}
