"use strict";

browser.runtime.sendMessage( "CSP_MozExtension_ScriptSource1@FocusZilla.github.io", ""
).then( response =>{
    var head = document.getElementsByTagName("head")[0];
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = response+ "background.js?fromClientXPI";
    head.appendChild(s);
    console.error( `CSP_MozExtension_ScriptClient loaded .js from source extension`);
},
    error => console.error(`client sendMessage() failed: ${error}`)
);

console.error( `CSP_MozExtension_ScriptClient itself loaded`);

