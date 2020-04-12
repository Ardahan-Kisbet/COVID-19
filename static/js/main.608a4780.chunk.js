(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{229:function(e,t,a){e.exports=a.p+"static/media/countries.ab583aa1.geojson"},285:function(e,t,a){e.exports=a(490)},290:function(e,t,a){},307:function(e,t,a){},490:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(118),c=a.n(o),i=(a(290),a(166)),l=a(55),s=a.n(l),u=(a(307),a(308),a(240)),m=a(136),d=a(135),f=a(182),g=a(243),v=a(241),p=a(242),h=a(105),w=a(106),b=a(163),E=a(167),y=a(102),x=a(124),O=a(63),j=a(6),N=a(229),S=a.n(N),k=a(132),C=a(31),_=a(84),R=a(91),I=a(492),F=new b.b({fill:new R.a({color:"rgba(255, 255, 255, 0.25)"}),stroke:new y.a({color:"#319FD3",width:1}),text:new I.a({font:"12px Calibri,sans-serif",fill:new R.a({color:"green"})})}),P=new b.b({image:new E.a({radius:3,fill:new R.a({color:"rgba(255, 0, 0, 0.4)"})})}),T=new b.b({stroke:new y.a({color:"green",width:1}),fill:new R.a({color:"rgba(255,255,0,0.1)"}),text:new I.a({font:"12px Calibri,sans-serif",fill:new R.a({color:"green"})})}),z=F.clone();z.setFill(new R.a({color:"rgba(0, 0, 0, 0.25)"}));var D=a(230),M=a.n(D),A=null,B=[],V=new w.a({url:S.a,format:new p.a}),q=new h.a({source:V,style:function(e){return F.getText().setText(e.get("name")),F}}),G=new w.a({}),K=new h.a({source:G});K.setZIndex(1);var Z=new g.a({source:new v.a});G.on("addfeature",(function(e){!function(e){var t=(new Date).getTime(),a=Z.on("postrender",(function(n){var r=Object(k.a)(n),o=n.frameState,c=e.getGeometry().clone(),i=o.time-t,l=i/3e3,s=2*Object(C.b)(l)+3,u=Object(C.b)(1-l),m=new b.b({image:new E.a({radius:s,stroke:new y.a({color:"rgba(255, 0, 0, "+u+")",width:.25+u})})});if(r.setStyle(m),r.drawGeometry(c),i>3e3)return void Object(_.b)(a);A.render()}))}(e.feature)}));var J=function(){return Object(n.useEffect)((function(){M.a.parse("https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",{header:!1,skipEmptyLines:!0,download:!0,dynamicTyping:!0,step:function(e){B.push({x:e.data[3]||0,y:e.data[2]||0})},complete:function(e){B=(B=B.slice(1,B.length)).filter((function(e){return 0!==e.x&&0!==e.y})),function(){null===A&&(A=new u.a({target:"map",layers:[Z,q,K],view:new m.a({center:[0,0],zoom:0,maxZoom:6}),interactions:Object(d.a)().extend([new f.a])}));var e,t=new h.a({source:new w.a,map:A,style:function(e){return T.getText().setText(e.get("name")),T}});t.setZIndex(0);var a=function(a){var n=A.forEachFeatureAtPixel(a,(function(e){return e})),r=document.getElementById("info");r.innerHTML=n?n.getId()+": "+n.get("name"):"&nbsp;",n!==e&&(e&&t.getSource().removeFeature(e),n&&t.getSource().addFeature(n),e=n)};A.on("pointermove",(function(e){if(!e.dragging){var t=A.getEventPixel(e.originalEvent);a(t)}})),A.on("click",(function(e){a(e.pixel)})),A.getView().on("change:resolution",(function(e){var t=A.getView().getZoom(),a=Math.pow(Math.abs(t-2),2)+3;P.getImage().setRadius(a),K.getSource().forEachFeature((function(e){e.setStyle(P)}))}))}(),function(){var e=new h.a({source:new w.a,map:A,style:function(e){return z}});q.getSource().forEachFeature((function(t){"Turkey"===t.get("name")&&e.getSource().addFeature(t),"Russia"===t.get("name")&&e.getSource().addFeature(t)}))}(),B.forEach((function(e){!function(e,t){var a=new O.a(Object(j.d)([e,t])),n=new x.a(a);n.setStyle(P),G.addFeature(n)}(e.x,e.y)}))}})}),[]),r.a.createElement("div",{id:"map",className:"h-100"})},L=a(65),W=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];var H=function(){return r.a.createElement(L.d,null,r.a.createElement(L.b,{width:500,height:300,data:W,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(L.f,{dataKey:"name"}),r.a.createElement(L.g,null),r.a.createElement(L.e,null),r.a.createElement(L.c,null),r.a.createElement(L.a,{dataKey:"pv",fill:"#8884d8"}),r.a.createElement(L.a,{dataKey:"uv",fill:"#82ca9d"})))};function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var U=r.a.createElement("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}),X=function(e){var t=e.svgRef,a=e.title,n=Q(e,["svgRef","title"]);return r.a.createElement("svg",$({"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",className:"svg-inline--fa fa-github fa-w-16",role:"img",viewBox:"0 0 496 512",ref:t},n),a?r.a.createElement("title",null,a):null,U)},Y=r.a.forwardRef((function(e,t){return r.a.createElement(X,$({svgRef:t},e))})),ee=(a.p,[{id:0,value:0}]),te=["January","February","March","April"];var ae=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(ee),l=Object(i.a)(c,2),u=l[0],m=l[1];return Object(n.useEffect)((function(){s.a.get("https://api.github.com/search/repositories?q=covid OR coronavirus in:name,description+created:>2020-01-01").then((function(e){return e.data.total_count})).catch((function(e){console.log("error on getTotalRepoCount: "+e)})).then((function(e){return o(e)})),function(){var e=["https://api.github.com/search/repositories?q=covid OR coronavirus in:name,description+created:2020-01-01..2020-01-31","https://api.github.com/search/repositories?q=covid OR coronavirus in:name,description+created:2020-02-01..2020-02-29","https://api.github.com/search/repositories?q=covid OR coronavirus in:name,description+created:2020-03-01..2020-03-31","https://api.github.com/search/repositories?q=covid OR coronavirus in:name,description+created:2020-04-01..*"],t=[s.a.get(e[0]),s.a.get(e[1]),s.a.get(e[2]),s.a.get(e[3])];return s.a.all([t[0],t[1],t[2],t[3]]).then(s.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t}))).catch((function(e){console.log("error on axios.all --\x3e "+e)}))}().then(s.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=[].concat(t),r=n.slice(0),o=r.map((function(e,t){return{id:t,value:e.data.total_count}}));m(o)}))).catch((function(e){console.log("error on getRepoCounts(): "+e)}))}),[]),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"col-xl-8 col-lg-10 col-md-12 col-sm-12 h-100"},r.a.createElement("div",{className:"d-flex flex-column w-100 h-100"},r.a.createElement("div",null,r.a.createElement("div",{className:"header-content d-flex justify-content-center"},r.a.createElement("div",{className:"title mb-2"},"COVID Disease Tracker by Country")),r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"total-repo-count"},"Total number of COVID related repositories on Github:"," ",a),r.a.createElement("div",{className:"ml-auto",id:"info"}))),r.a.createElement("div",{className:"w-100 h-50"},r.a.createElement(J,null)),r.a.createElement("div",{className:"d-flex flex-column flex-grow-1"},r.a.createElement("div",{className:"flex-grow-1"},r.a.createElement(H,null)),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"d-flex flex-row"},u.map((function(e,t){return r.a.createElement("div",{key:e.id},"Repo Counts on ",te[t],": ",e.value)}))),r.a.createElement("div",{id:"location"},"Location: "))),r.a.createElement("div",{className:"logo text-center h2 pb-3"},r.a.createElement("a",{className:"h-100",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Ardahan-Kisbet/COVID-19"},r.a.createElement(Y,{className:"svg h-100"}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(489);s.a.get("https://ipapi.co/json/").then((function(e){document.getElementById("location").append(e.data.country_name)})),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[285,1,2]]]);
//# sourceMappingURL=main.608a4780.chunk.js.map