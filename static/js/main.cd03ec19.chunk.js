(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(14),c=a.n(n),l=a(66),o=a.n(l),r=(a(89),a(70)),i=(a(90),a(91),a(67)),s=a(54),m=a(53),u=a(57),d=a(69),f=a(68),v=null;function E(){null==v&&(v=new i.a({target:"map",layers:[new d.a({source:new f.a})],view:new s.a({center:[0,0],zoom:2}),interactions:Object(m.a)().extend([new u.a])}))}var h=function(){return Object(n.useEffect)(E),c.a.createElement("div",{id:"map",className:"h-100"})},p=a(55),w=a.n(p);w.a.get("https://ipapi.co/json/").then((function(e){document.getElementById("location").append(e.data.country_name)}));var g=function(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){w.a.get("https://api.github.com/search/repositories?q=covid in:name,description+created:>2020-01-01").then((function(e){return e.data.total_count})).then((function(e){return l(e)}))}),[]),c.a.createElement("div",null,c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"col-xl-8 col-lg-10 col-md-12 col-sm-12 h-100"},c.a.createElement("div",{className:"d-flex flex-column w-100 h-100"},c.a.createElement("div",null,c.a.createElement("div",{className:"header-content d-flex justify-content-center"},c.a.createElement("div",{className:""},"Some Explanations - HEADER"),c.a.createElement("span",null," - "),c.a.createElement("div",{className:""},"Github Project Navigator Icon")),c.a.createElement("div",{className:"d-flex flex-column"},c.a.createElement("div",null,"Total count of COVID related repositories: ",a," ",c.a.createElement("span",{className:"small"},"created after 01.01.2020")),c.a.createElement("div",null,"Exp:2"))),c.a.createElement("div",{className:"w-100 h-50"},c.a.createElement(h,null)),c.a.createElement("div",{className:"d-flex flex-column flex-grow-1"},c.a.createElement("div",null,"footer area (maybe for results)"),c.a.createElement("div",{id:"location"},"Location: "))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(110);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},84:function(e,t,a){e.exports=a(111)},89:function(e,t,a){},90:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.cd03ec19.chunk.js.map