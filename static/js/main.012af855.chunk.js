(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(21),o=n(95),i=n.n(o),l=n(55),s=n.n(l),u=n(93),m=n.n(u),g=n(94),d=n.n(g),f=n(91),h=n.n(f),E=n(92),v=n.n(E),b=n(18),p=n.n(b),S=n(15),w=Object(S.createStyles)({appBar:{marginBottom:"0.5rem"},menuButton:{marginLeft:-12,marginRight:20}});var O=Object(S.withStyles)(w)(function(e){var t=e.classes,n=e.gameStateOperators,o=e.setGameLog,l=Object(a.useState)(null),u=Object(c.a)(l,2),g=u[0],f=u[1],E=(n.gameState,n.setPhase);return n.addCurrentRound,n.setPlayerName,n.setStartTimeInString,n.setFinishTimeInString,n.setLastRoundStarted,n.clear,n.addResult,r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{position:"static",className:t.appBar},r.a.createElement(v.a,null,r.a.createElement(m.a,{className:t.menuButton,color:"inherit",onClick:function(e){f(e.currentTarget)}},r.a.createElement(d.a,null)),r.a.createElement(p.a,{variant:"h4",color:"inherit"},"\u3055\u3093\u3059\u3046\u30b2\u30fc\u30e0"))),r.a.createElement("div",null,r.a.createElement(i.a,{id:"simple-menu",anchorEl:g,open:Boolean(g),onClose:function(e){f(null)}},r.a.createElement(s.a,{onClick:function(e){f(null),E("finished")}},"\u4e2d\u6b62"),r.a.createElement(s.a,{onClick:function(e){f(null),localStorage.setItem("log",JSON.stringify([])),o([]),E("finished")}},"\u5c65\u6b74\u3092\u6d88\u53bb"))))});t.a=function(e){var t=e.gameStateOperators,n=e.children,a=e.setGameLog;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{gameStateOperators:t,setGameLog:a}),n)}},101:function(e,t,n){e.exports=n(246)},246:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),i=n(15),l=n(98),s=n.n(l),u=n(84),m=Object(i.createStyles)({});var g=Object(i.withStyles)(m)(function(e){e.classes;var t=e.log;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null),r.a.createElement(u.a,{log:t}))}),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var h=localStorage.getItem("log");console.log(h);var E=[];E=null===h?[]:JSON.parse(h),console.log("load=",E),o.a.render(r.a.createElement(g,{log:E}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sansuu-game",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/sansuu-game","/service-worker.js");d?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):f(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):f(t,e)})}}()},84:function(e,t,n){"use strict";(function(e){var a=n(46),r=n(21),c=n(0),o=n.n(c),i=n(15),l=n(18),s=n.n(l),u=n(22),m=n.n(u),g=n(9),d=n.n(g),f=n(99),h=n(87),E=n(100),v=n(96),b=Object(i.createStyles)({button:{margin:"1rem",fontSize:"2rem",width:"20rem"}});t.a=Object(i.withStyles)(b)(function(t){var n=t.classes,i=t.log,l=Object(v.a)(),u=l.gameState,g=l.setPhase,b=l.addCurrentRound,p=l.setPlayerName,S=l.setStartTimeInString,w=l.setFinishTimeInString,O=l.setLastRoundStarted,j=l.clear,y=l.addResult,k=Object(c.useState)(i),N=Object(r.a)(k,2),R=N[0],C=N[1],x=Object(c.useRef)(u);x.current=u;var P=Object(c.useCallback)(function(){g("running");var e=new Date;O(e.getTime()),S(e.toLocaleString()),j(),p("unknown")},[]),T=Object(c.useCallback)(function(t){var n=x.current;if(n.lastRoundStarted){var r=n.questions[n.currentQuestion];console.log("[1]",n),n.lastRoundStarted&&y({elapsedTimeInMilliSec:Date.now()-n.lastRoundStarted,correct:r.answer===t}),console.log("[2]",n)}n.currentQuestion===n.questions.length-1?e(function(){w((new Date).toString()),n=x.current,C(function(e){var t=function(e){console.log(e);var t=[e.startTimeInString,e.playerName,"".concat(e.results.reduce(function(e,t){return e+(t.correct?1:0)},0)," / ").concat(e.results.length),e.results.reduce(function(e,t){return e+t.elapsedTimeInMilliSec},0)/1e3/e.questions.length];return console.log("gameResult=",t),t}(n),r=[].concat(Object(a.a)(e),[t]);return console.log(r),localStorage.setItem("log",JSON.stringify(r)),r}),g("finished")}):b()},[]);return o.a.createElement(E.a,{gameStateOperators:l,setGameLog:C},o.a.createElement(d.a,{container:!0},o.a.createElement(d.a,{item:!0,xs:1}),"initial"===u.gamePhase?(g("splash"),o.a.createElement("div",null)):"splash"===u.gamePhase?(setTimeout(function(){g("ready")},1e3),o.a.createElement(d.a,{container:!0},o.a.createElement(d.a,{item:!0,xs:12},o.a.createElement(s.a,{align:"center",variant:"h1"},"\u7b97\u6570\u30b2\u30fc\u30e0")),o.a.createElement(d.a,{item:!0,xs:12},o.a.createElement(s.a,{align:"center",variant:"h4"},"\u3055\u3093\u3059\u3046\u30b2\u30fc\u30e0\u304c\u306f\u3058\u307e\u308a\u307e\u3059\u3002")))):"ready"===u.gamePhase?o.a.createElement(d.a,{container:!0,style:{flexDirection:"column"}},o.a.createElement(d.a,{item:!0,sm:1}),o.a.createElement(d.a,{item:!0,sm:10,style:{textAlign:"center"}},o.a.createElement(m.a,{variant:"contained",className:n.button,color:"secondary",onClick:P,"data-testid":"start"},"START")),o.a.createElement(d.a,{item:!0,xs:1})):"running"===u.gamePhase?(console.log("gameState==",u),o.a.createElement(d.a,{item:!0,xs:10},o.a.createElement(f.a,{gameState:u,setPhase:g,onAnswered:T}))):"finished"===u.gamePhase?o.a.createElement(d.a,{container:!0},o.a.createElement(d.a,{item:!0,xs:12},o.a.createElement(h.a,{componentProps:{width:"100%"},gameLog:R})),o.a.createElement(d.a,{item:!0,xs:12,style:{textAlign:"center"}},o.a.createElement(m.a,{variant:"contained",className:n.button,color:"secondary",onClick:function(){g("initial")},"data-testid":"finished-ok"},"OK"))):o.a.createElement("div",null,"Error: ",u.gamePhase)))})}).call(this,n(106).setImmediate)},87:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(15),o=n(88),i=n.n(o),l=n(90),s=n.n(l),u=n(23),m=n.n(u),g=n(89),d=n.n(g),f=n(54),h=n.n(f),E=n(25),v=n.n(E),b=Object(c.createStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700}}});t.a=Object(c.withStyles)(b)(function(e){var t=e.classes,n=e.componentProps,a=e.gameLog;return r.a.createElement(v.a,Object.assign({className:t.root},n),r.a.createElement(i.a,{className:t.table},r.a.createElement(d.a,null,r.a.createElement(h.a,null,r.a.createElement(m.a,null,"\u65e5\u4ed8"),r.a.createElement(m.a,null,"\u540d\u524d"),r.a.createElement(m.a,null,"\u6b63\u89e3\u7387"),r.a.createElement(m.a,null,"\u5e73\u5747\u6642\u9593"))),r.a.createElement(s.a,null,a.map(function(e,t){return r.a.createElement(h.a,{key:t},r.a.createElement(m.a,{component:"th",scope:"row"},e[0]),r.a.createElement(m.a,{component:"th",scope:"row"},e[1]),r.a.createElement(m.a,{component:"th",scope:"row"},e[2]),r.a.createElement(m.a,{component:"th",scope:"row"},Math.round(10*e[3])/10))}))))})},96:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(46),r=n(24),c=n(21),o=n(97),i=n(0),l=function e(t,n,a,r){Object(o.a)(this,e),this.leftHandSide=void 0,this.rightHandSide=void 0,this.operationName=void 0,this.operation=void 0,this.answer=void 0,this.question=void 0,this.leftHandSide=t,this.rightHandSide=n,this.operation=r,this.answer=this.operation(t,n),this.operationName=a,this.question="\u300c".concat(t," ").concat(this.operationName," ").concat(n,"\u300d\u306e\u7b54\u3048\u306f\uff1f")};function s(e){return Array(e).fill(0).map(function(e,t){return new l(Math.floor(99*Math.random())+1,Math.floor(99*Math.random())+1,"\uff0b",function(e,t){return e+t})})}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=Object(i.useState)({gamePhase:"initial",currentQuestion:0,questions:s(e),results:[]}),n=Object(c.a)(t,2),o=n[0],l=n[1];return{gameState:o,setPhase:function(e){l(function(t){return Object(r.a)({},t,{gamePhase:e})})},addCurrentRound:function(){l(function(e){return Object(r.a)({},e,{currentQuestion:e.currentQuestion+1})})},setPlayerName:function(e){l(function(t){return Object(r.a)({},t,{playerName:e})})},setStartTimeInString:function(e){l(function(t){return Object(r.a)({},t,{startTimeInString:e})})},setFinishTimeInString:function(e){l(function(t){return Object(r.a)({},t,{finishTimeInString:e})})},setLastRoundStarted:function(e){l(function(t){return Object(r.a)({},t,{lastRoundStarted:e})})},clear:function(){l(function(e){return Object(r.a)({},e,{results:[],currentQuestion:0})})},addResult:function(e){l(function(t){return Object(r.a)({},t,{results:[].concat(Object(a.a)(t.results),[e])})})}}}},99:function(e,t,n){"use strict";var a=n(21),r=n(0),c=n.n(r),o=n(15),i=n(18),l=n.n(i),s=n(22),u=n.n(s),m=n(9),g=n.n(m),d=n(25),f=n.n(d),h=n(86),E=n.n(h),v=Object(o.createStyles)({});var b=Object(o.withStyles)(v)(function(e){var t=e.message,n=e.onOk,a=e.answerShowing;return c.a.createElement(E.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:a,message:c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{variant:"h4",style:{color:"white"}},t),c.a.createElement(l.a,null,c.a.createElement(u.a,{onClick:function(){n&&n()},variant:"contained"},c.a.createElement(l.a,{variant:"h4"},"OK"))))})}),p=Object(o.createStyles)({buttonWrapper:{textAlign:"center"},button:{margin:"0.5rem",fontSize:"1.2rem"}});function S(e,t){return null===t?"":e.answer===t?"\u6b63\u89e3\u3067\u3059":"".concat(t,"\u306f\u4e0d\u6b63\u89e3\u3067\u3059\u3002\u6b63\u89e3\u306f").concat(e.answer)}var w=function(e,t){return Object(r.useCallback)(function(n){t(function(t){return 10*t+e})},[e,t])},O=function(e){return Object(r.useCallback)(function(t){e(0)},[])},j=function(e,t){return Object(r.useCallback)(function(n){e(function(e){return t(e),e})},[])};t.a=Object(o.withStyles)(p)(function(e){var t=e.classes,n=e.gameState,o=e.onAnswered,i=e.setPhase,s=Object(r.useState)(0),m=Object(a.a)(s,2),d=m[0],h=m[1],E=Object(r.useState)(null),v=Object(a.a)(E,2),p=v[0],y=v[1],k=Object(r.useRef)();Object(r.useEffect)(function(){k&&k.current&&k.current.focus()});var N=Object(r.useRef)(n);N.current=n;var R=n.questions[n.currentQuestion];return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{message:S(R,p),answerShowing:null!==p,onOk:function(){h(0);var e=N.current;e.currentQuestion===e.questions.length-1&&i("finished"),null!==p&&(o(p),y(null))}}),c.a.createElement(g.a,{container:!0,spacing:32},c.a.createElement(g.a,{item:!0,xs:12},c.a.createElement(l.a,{variant:"h4",align:"center"},c.a.createElement("b",null,"\u554f\u984c".concat(n.currentQuestion+1," ")),"/"," ",n.questions.length))),c.a.createElement(g.a,{container:!0,spacing:32,style:{marginBottom:"0.5rem",padding:"0.1fem"}},c.a.createElement(g.a,{item:!0,xs:12,sm:6},c.a.createElement(l.a,{variant:"h4"},"".concat(R.question))),c.a.createElement(g.a,{item:!0,xs:12,sm:6},c.a.createElement(f.a,null,c.a.createElement(l.a,{variant:"h3",align:"right"},d)))),c.a.createElement(f.a,{style:{margin:"0.1em",padding:"0.1em"}},c.a.createElement(g.a,{container:!0,justify:"space-between"},[1,2,3,4,5,6,7,8,9,0].map(function(e){return c.a.createElement(g.a,{item:!0,xs:4,key:e,style:{textAlign:"center"}},c.a.createElement(u.a,{variant:"contained",className:t.button,onClick:w(e,h)},e))}),c.a.createElement(g.a,{item:!0,xs:4,className:t.buttonWrapper},c.a.createElement(u.a,{variant:"contained",className:t.button,onClick:O(h)},"CLR")),c.a.createElement(g.a,{item:!0,xs:4,className:t.buttonWrapper},c.a.createElement(u.a,{variant:"contained",className:t.button,onClick:j(h,y),buttonRef:k},"OK")))))})}},[[101,1,2]]]);
//# sourceMappingURL=main.012af855.chunk.js.map