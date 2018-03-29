// ==UserScript==
// @name         html video
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  在视频上方增加一个输入框显示视频地址
// @author       You
// @match        http://*/*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    selectInputContent();

    var v=document.getElementById("player_html5_api");
    if(v && v.childElementCount > 0){
        var source = v.children[0];
        var link = source.src;
        console.log(link);
        var text = document.createElement("input");
        text.id='link-url';
        text.setAttribute("type","text");
        text.setAttribute("class","form-control");
        text.value=link;
        text.addEventListener("mouseover",selectInputContent);
        var player = document.getElementById("player");
        var player_ctr = document.getElementById("player-container");
        player_ctr.insertAfter(text, player);
    }
})();

function selectInputContent(){
    var linkUrl = document.getElementById('link-url');
    if(linkUrl){
        linkUrl.focus();
        linkUrl.select();
    }
}
