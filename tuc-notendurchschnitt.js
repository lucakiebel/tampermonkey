// ==UserScript==
// @name         Durschnitt Klausur
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://qis.tuc.hispro.de/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/lucakiebel/tampermonkey/master/tuc-notendurchschnitt.js
// @downloadURL  https://raw.githubusercontent.com/lucakiebel/tampermonkey/master/tuc-notendurchschnitt.js
// ==/UserScript==

(function() {
    'use strict';
    Array.from(document.querySelectorAll("td")).find(t => t.innerHTML.toLowerCase() === "teilnehmer").parentNode.parentNode.innerHTML += `<tr>
    		<td class="tabelleheader">Durchschnitt</td><td class="tabelle1" valign="top" id="durchschnitt333" align="right"></td>
    	</tr>`
    let tableInfo = Array.prototype.map.call(Array.from(document.querySelectorAll("td")).find(t => t.innerHTML.toLowerCase() === "teilnehmer").parentNode.parentNode.querySelectorAll("tr"), function(tr){
  return Array.prototype.map.call(tr.querySelectorAll('td'), function(td){
    return td.innerHTML;
    });
  });
    tableInfo = tableInfo.slice(3,8).map(e => e[1])
    let total = tableInfo.reduce((acc,cv) => {return acc+parseInt(cv)},0)
    let i=1
    let grades = tableInfo.reduce((acc,cv) => {return acc+i++*parseInt(cv)},0)
    document.querySelector("#durchschnitt333").innerHTML = grades/total

    // Your code here...
})();
