(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{195:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),c=a.n(i),o=a(79),l=a.n(o),m=a(17),s=a(80),u=a.n(s),g=a(81),d=a.n(g),h=a(16),E=a.n(h),f=a(82),S=a.n(f),p=a(83),v=a.n(p),b=a(25),w=a.n(b),O=a(5),R=a.n(O),y=a(38),j=a(22),x=a.n(j),k=a(73),C=a.n(k),T=function(e,t,a,n){return function(r){"number"===typeof e?a(function(t){return 10*t+e}):"string"===typeof e&&("CLR"===e?a(0):n&&"OK"===e&&a(function(e){var a=t.gameRounds[t.currentGameRound];return t.lastRoundStarted&&n(a,e,t.lastRoundStarted),e}))}};var P=Object(m.withStyles)({numButton:{margin:"1rem",fontSize:"2rem"},textArea:{margin:"1rem",fontSize:"2rem"},inputArea:{margin:"1rem",fontSize:"2rem",padding:"0.5rem"}})(function(e){var t=e.classes,a=e.gameState,i=e.onChange,c=e.onSnackbarOk,o=e.message,l=Object(n.useState)(0),m=Object(y.a)(l,2),s=m[0],u=m[1],g=a.gameRounds[a.currentGameRound];return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:!!o,message:r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"h4",style:{color:"white"}},o),r.a.createElement(E.a,null,r.a.createElement(w.a,{onClick:function(){u(0),c&&c()},variant:"contained"},r.a.createElement(E.a,{variant:"h4"},"OK"))))}),r.a.createElement(R.a,{container:!0,spacing:32},r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(E.a,{variant:"h4",align:"center"},r.a.createElement("b",null,"\u554f\u984c".concat(a.currentGameRound+1," ")),"(",a.currentGameRound+1," / ",a.gameRounds.length,")"))),r.a.createElement(R.a,{container:!0,spacing:32,style:{padding:"0.1em"}},r.a.createElement(R.a,{item:!0,xs:12,sm:6},r.a.createElement(E.a,{variant:"h4"},"".concat(g.question))),r.a.createElement(R.a,{item:!0,xs:12,sm:6},r.a.createElement(x.a,null,r.a.createElement(E.a,{variant:"h3",align:"right"},s)))),r.a.createElement(x.a,{style:{margin:"0.1em",padding:"0.1em"}},r.a.createElement(R.a,{container:!0,justify:"space-between"},[1,2,3,4,5,6,7,8,9,0,"CLR","OK"].map(function(e){return r.a.createElement(R.a,{item:!0,xs:4,key:e,style:{textAlign:"center"}},r.a.createElement(w.a,{variant:"raised",className:t.numButton,onClick:T(e,a,u,i)},e))}))))}),N=a(75),G=a.n(N),I=a(77),A=a.n(I),F=a(19),L=a.n(F),M=a(76),z=a.n(M),B=a(48),D=a.n(B),H=Object(m.createStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700}}});var K=Object(m.withStyles)(H)(function(e){var t=e.classes,a=e.gameState,n=(a.gameRounds,a.results);return r.a.createElement(x.a,{className:t.root},r.a.createElement(G.a,{className:t.table},r.a.createElement(z.a,null,r.a.createElement(D.a,null,r.a.createElement(L.a,null,"Dessert (100g serving)"),r.a.createElement(L.a,{align:"right"},"Calories"),r.a.createElement(L.a,{align:"right"},"Fat (g)"),r.a.createElement(L.a,{align:"right"},"Carbs (g)"),r.a.createElement(L.a,{align:"right"},"Protein (g)"))),r.a.createElement(A.a,null,Array(n.length).fill(0).map(function(e,t){return r.a.createElement(D.a,{key:t},r.a.createElement(L.a,{component:"th",scope:"row"},a.startTimeInString),r.a.createElement(L.a,{component:"th",scope:"row"},a.finishTimeInString))}))))}),q=a(84),J=a(20),W=a(78),X=function e(t,a,n,r){Object(W.a)(this,e),this.leftHandSide=void 0,this.rightHandSide=void 0,this.operationName=void 0,this.operation=void 0,this.answer=void 0,this.question=void 0,this.leftHandSide=t,this.rightHandSide=a,this.operation=r,this.answer=this.operation(t,a),this.operationName=n,this.question="\u300c".concat(t," ").concat(this.operationName," ").concat(a,"\u300d\u306e\u7b54\u3048\u306f\uff1f")};function Q(e){return Array(e).fill(0).map(function(e,t){return new X(Math.floor(99*Math.random())+1,Math.floor(99*Math.random())+1,"\uff0b",function(e,t){return e+t})})}var U=Object(m.withStyles)({button:{margin:"3rem",fontSize:"2rem",width:"70%"}})(function(e){var t=e.classes,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=Object(n.useState)({gamePhase:"initial",currentGameRound:0,gameRounds:Q(e),results:[],message:void 0}),a=Object(y.a)(t,2),r=a[0],i=a[1];return{gameState:r,setPhase:function(e,t){i(function(a){return Object(J.a)({},a,{gamePhase:e,message:t})})},setCurrentRound:function(e){i(function(t){return Object(J.a)({},t,{currentGameRound:e})})},setPlayerName:function(e){i(function(t){return Object(J.a)({},t,{playerName:e})})},setStartTimeInString:function(e){i(function(t){return Object(J.a)({},t,{startTimeInString:e})})},setFinishTimeInString:function(e){i(function(t){return Object(J.a)({},t,{finishTimeInString:e})})},setLastRoundStarted:function(e){i(function(t){return Object(J.a)({},t,{lastRoundStarted:e})})},addResult:function(e){i(function(t){return Object(J.a)({},t,{results:[].concat(Object(q.a)(t.results),[e])})})}}}(),i=a.gameState,c=a.setPhase,o=a.setCurrentRound,l=(a.setPlayerName,a.setStartTimeInString),m=a.setFinishTimeInString,s=a.setLastRoundStarted,u=a.addResult,g=Object(n.useCallback)(function(){c("running");var e=new Date;s(e.getTime()),l(e.toLocaleString())},[]),d=function(e,t,a){e.answer===t?c("answered","\u6b63\u89e3\u3067\u3059"):c("answered","".concat(t,"\u306f\u4e0d\u6b63\u89e3\u3067\u3059\u3002\u6b63\u89e3\u306f").concat(e.answer)),u({elapsedTimeInMilliSec:Date.now()-a,correct:e.answer===t})},h=function(){c("running"),i.currentGameRound===i.gameRounds.length-1?(m((new Date).toString()),c("finished")):o(i.currentGameRound+1)},f=Object(n.useCallback)(function(){c("initial")},[]);return r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:1}),function(e){return"initial"===e.gamePhase?(c("splash"),r.a.createElement("div",null)):"splash"===e.gamePhase?(setTimeout(function(){c("ready")},1e3),r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(E.a,{align:"center",variant:"h1"},"\u7b97\u6570\u30b2\u30fc\u30e0")),r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(E.a,{align:"center",variant:"h4"},"\u3055\u3093\u3059\u3046\u30b2\u30fc\u30e0\u304c\u306f\u3058\u307e\u308a\u307e\u3059\u3002")))):"ready"===e.gamePhase?r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(w.a,{variant:"contained",className:t.button,color:"secondary",onClick:g,"data-testid":"start"},"START"))):"running"===e.gamePhase?r.a.createElement(R.a,{item:!0,xs:10},r.a.createElement(P,{gameState:e,onChange:d})):"answered"===e.gamePhase?r.a.createElement(R.a,{item:!0,xs:10},r.a.createElement(P,{gameState:e,message:e.message,onSnackbarOk:h})):"finished"===e.gamePhase?r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0},r.a.createElement(K,{gameState:e})),r.a.createElement(R.a,{item:!0,xs:10},r.a.createElement(w.a,{variant:"contained",className:t.button,color:"secondary",onClick:f,"data-testid":"start"},"OK"))," "):r.a.createElement("div",null,"Error")}(i))});var V=Object(m.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null),r.a.createElement(u.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement(S.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(v.a,null)),r.a.createElement(E.a,{variant:"h4",color:"inherit"},"\u3055\u3093\u3059\u3046\u30b2\u30fc\u30e0"))),r.a.createElement(U,null))});c.a.render(r.a.createElement(V,null),document.getElementById("root"))},85:function(e,t,a){e.exports=a(195)}},[[85,1,2]]]);
//# sourceMappingURL=main.104b8820.chunk.js.map