(this.webpackJsonpdadjokes=this.webpackJsonpdadjokes||[]).push([[0],{39:function(e,t,a){e.exports=a(68)},64:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(29),r=a.n(c),s=a(14),l=(a(19),a(36)),i=a(30),u=a(31),d=a(37),m=a(32),k=a(11),f=a(38),p=a(10),v=a.n(p),h=a(15),E=a(33),J=a.n(E),b="https://icanhazdadjoke.com/";function w(){return(w=Object(h.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Getting a joke ..... "),e.next=3,J.a.get(b,{headers:{Accept:"text/plain"}});case 3:return t=e.sent,console.log(t.data),e.next=7,t.data;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=a(70),N=a(71),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={currentJoke:"",allJokes:[],isLoaded:!1},a.newJoke=a.newJoke.bind(Object(k.a)(a)),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadJoke()}},{key:"newJoke",value:function(){this.setState((function(){return{isLoaded:!1}})),this.loadJoke()}},{key:"loadJoke",value:function(){var e=this;(function(){return w.apply(this,arguments)})().then((function(t){e.setState((function(){return{allJokes:[].concat(Object(l.a)(e.state.allJokes),[t]),currentJoke:t,isLoaded:!0}}))})),console.log(this.state.allJokes)}},{key:"render",value:function(){return this.state.isLoaded?o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-auto "},o.a.createElement("button",{onClick:this.newJoke,className:"buttonSubmit btn btn-primary"},"New Dad Joke")),o.a.createElement("div",{className:"col-md-auto stopoverflow"},o.a.createElement("div",{className:"row joketext"}," ",this.state.currentJoke))),o.a.createElement("div",{className:"row"},this.state.allJokes.sort((function(e,t){return e.index-t.index})).reverse().map((function(e,t){return o.a.createElement("div",{className:"col col-md-3 col-sm-6  mx-auto ",key:t},o.a.createElement(j.a,{className:"cardBody"},o.a.createElement(N.a,{className:"conditions "},e)))})))):o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row joketext"},o.a.createElement("div",{className:"col-md-auto mr-auto"},"Just wait, we are loading a joke ...")))}}]),t}(n.Component),y=a(8);a(64);var O=function(){return o.a.createElement("div",{className:"container-fluid"},o.a.createElement(y.c,null,o.a.createElement(y.a,{exact:!0,path:"/",component:x})))};r.a.render(o.a.createElement(s.a,null,o.a.createElement(O,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.df5b2b29.chunk.js.map