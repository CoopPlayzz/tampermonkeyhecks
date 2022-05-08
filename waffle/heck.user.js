// ==UserScript==
// @name Waffle Heck
// @version 1.0.0
// @description A Waffle Hack that enters the solution for u
// @author CoopPlayzz
// @homepage https://github.com/CoopPlayzz/tampermonkeyhecks
// @icon https://www.google.com/s2/favicons?domain=https://wafflegame.net
// @updateURL https://raw.githubusercontent.com/CoopPlayzz/tampermonkeyhecks/main/waffle/heck.user.js
// @downloadURL https://raw.githubusercontent.com/CoopPlayzz/tampermonkeyhecks/main/waffle/heck.user.js
// @match https://*.wafflegame.net/*

// ==/UserScript==

(async function ()  {


    
    var yeee = JSON.parse(localStorage.getItem("state"));
    var scripttoinsert = "async function dohacks() {var yeee = JSON.parse(localStorage.getItem(\"state\"));  "+ JSON.stringify(yeee.solution) +" =yeee.puzzle;yeee.swapsRemaining = 5;localStorage.setItem(\"state\", JSON.stringify(yeee));location.reload();}"
    var scriptele = document.createElement("script")
    scriptele.text = scripttoinsert
    async function wwdiw() {await document.head.appendChild(scriptele);document.getElementsByTagName("header")[0].innerHTML = document.getElementsByTagName("header")[0].innerHTML + "<button tabindex=\"-1\" class=\"icon-button\"onclick=\"if(confirm('Do you want to do hecks?')){dohacks()}\">do awsnwer</button>"}
    setTimeout(()=> {wwdiw();}, 3000);
    })();