// ==UserScript==
// @name Wordle Heck
// @version 0.0.2
// @description A  Wordle Hack that enters the solution for u
// @author CoopPlayzz
// @homepage https://github.com/CoopPlayzz/tampermonkeyhecks
// @icon https://www.google.com/s2/favicons?domain=https://www.nytimes.com/games/wordle/index.html
// @updateURL https://raw.githubusercontent.com/CoopPlayzz/tampermonkeyhecks/main/wordle/heck.tampermonkey.js
// @downloadURL https://raw.githubusercontent.com/CoopPlayzz/tampermonkeyhecks/main/wordle/heck.tampermonkey.js
// @match https://www.nytimes.com/games/wordle*
// ==/UserScript==
var wordleLetters = {
    lettersRow: {
        q:0,
        w:0,
        e:0,
        r:0,
        t:0,
        y:0,
        u:0,
        i:0,
        o:0,
        p:0,
        a:1,
        s:1,
        d:1,
        f:1,
        g:1,
        h:1,
        j:1,
        k:1,
        l:1,
        z:2,
        x:2,
        c:2,
        v:2,
        b:2,
        n:2,
        m:2
    }
}
var arrayrowkeys = document.getElementsByTagName("game-app")[0].$keyboard.$keyboard.getElementsByClassName("row")

for (let eeeee = 0; eeeee <= 3; eeeee++) {
    const rowe = arrayrowkeys[eeeee].getElementsByTagName("button")
    for (let lop = 0; lop = rowe.length; lop++) {
        const element = rowe[lop];
        element.setAttribute("class", "letter_" + rowe.getAttribute("data-key"))
    }
}
