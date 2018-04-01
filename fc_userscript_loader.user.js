// ==UserScript==
// @name           Frozen Cookies
// @version        github-latest
// @description    Userscript to load Frozen Cookies written by Icehawk78, forked by Lordshinjo
// @author         Lordshinjo
// @homepage       https://github.com/Lordshinjo/FrozenCookies
// @include        http://natto0wtr.web.fc2.com/CookieClicker/
// @updateURL      https://rawgit.com/hashira222/FrozenCookies/master/fc_userscript_loader.js
// @downloadURL    https://rawgit.com/hashira222/FrozenCookies/master/fc_userscript_loader.js
// @run-at         document-start
// ==/UserScript==

// Dev:       https://github.com/hashira222/FrozenCookies/development/
// Master:    https://github.com/hashira222/FrozenCookies/master/
// Github.io: http://hashira222.github.io/FrozenCookies/

function LoadFrozenCookies() {
    Game.LoadMod('https://rawgit.com/hashira222/FrozenCookies/master/frozen_cookies.js');
}

window.addEventListener("load", LoadFrozenCookies, false);
