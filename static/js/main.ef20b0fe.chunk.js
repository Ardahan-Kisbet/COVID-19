(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{218:function(a,e,t){a.exports=t.p+"static/media/countries.ab583aa1.geojson"},243:function(a,e,t){a.exports=t(525)},247:function(a,e,t){},248:function(a,e,t){},250:function(a,e,t){a.exports=t.p+"static/media/rawDataBackup.ba45d2a8.csv"},525:function(a,e,t){"use strict";t.r(e);var n=t(8),r=t.n(n),o=t(66),i=t.n(o),c=(t(247),t(76)),u=(t(248),t(50)),l=t.n(u),s=t(74),d=(t(249),t(225)),m=t(133),h=t(132),f=t(169),p=t(227),g=t(224),b=t(226),y=t(99),v=t(100),w=t(160),C=t(165),E=t(110),S=t(123),x=t(69),k=t(5),N=t(218),O=t.n(N),B=t(131),R=t(27),j=t(93),A=t(228),T=t(96),z=t(526),I=new w.b({fill:new T.a({color:"rgba(255, 255, 255, 0.25)"}),stroke:new E.a({color:"#319FD3",width:1}),text:new z.a({font:"12px Calibri,sans-serif",fill:new T.a({color:"green"})})}),M=new w.b({image:new C.a({radius:3,fill:new T.a({color:"rgba(255, 0, 0, 0.4)"})})}),G=new w.b({stroke:new E.a({color:"green",width:1}),fill:new T.a({color:"rgba(255,255,0,0.1)"}),text:new z.a({font:"12px Calibri,sans-serif",fill:new T.a({color:"green"})})}),D=I.clone();D.setFill(new T.a({color:"rgba(0, 0, 0, 0.25)"}));var L,P=t(161),F=t.n(P),U=t(250),K=null,_=function(){var a=Object(s.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise((function(a){new Promise((function(a){null===K?F.a.parse("https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",{header:!1,skipEmptyLines:!0,download:!0,dynamicTyping:!0,complete:function(e){a(K=e)},error:function(e){F.a.parse(U,{header:!1,skipEmptyLines:!0,download:!0,dynamicTyping:!0,complete:function(e){a(K=e)},error:function(e){a(K=null)}})}}):a(K)})).then((function(e){for(var t=[],n=e.data[0].length,r=function(a){var n=new Date(e.data[0][a]).getMonth(),r=t.findIndex((function(a){return a.month===n}));-1===r?t.push({month:n,daysCount:1}):t[r].daysCount++},o=4;o<n;++o)r(o);e.data=e.data.slice(1,e.data.length);var i=[];e.data.forEach((function(a){var e=[],n=4,r=0;t.forEach((function(t){var o;o=a[n+t.daysCount-1],e.push({month:t.month,days:t.daysCount,count:o-r}),r=o,n+=t.daysCount}));var o=e.reduce((function(a,e){return a+e.count}),0);i.push({countryName:a[1]||"Undefined",stateName:a[0]||null,totalCase:o,detailedCase:e,x:a[3]||0,y:a[2]||0})})),i=i.filter((function(a){return 0!==a.x&&0!==a.y})),a(i)}))})));case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),J=null,q=[],V=new v.a({url:O.a,format:new b.a}),H=new y.a({name:"country",source:V,style:function(a){return I.getText().setText(a.get("name")),I}}),Z=new v.a({}),W=new y.a({name:"data",source:Z,zIndex:1}),Q=new p.a({source:new g.a}),Y=null,$=null,X=new v.a({}),aa=new y.a({name:"diseased",source:X,style:function(a){return D}});function ea(){null===J&&(J=new d.a({target:"map",layers:[Q,H,aa,W],view:new m.a({center:[0,0],zoom:0,maxZoom:6}),interactions:Object(h.a)().extend([new f.a])}),Y=document.getElementById("tooltip"),$=new A.a({element:Y,offset:[10,0],positioning:"bottom-left"}),J.addOverlay($));var a,e,t=new y.a({source:new v.a,map:J,style:function(a){return G.getText().setText(a.get("name")),G},zIndex:0}),n=new y.a({source:new v.a,map:J,style:function(a){return M},zIndex:1}),r=function(r){var o=document.getElementById("info");J.forEachFeatureAtPixel(r,(function(r,i){if(i)switch(i.get("name")){case"country":o.innerHTML=r?r.getId()+": "+r.get("name"):"&nbsp;",r!==a&&(a&&t.getSource().removeFeature(a),r&&t.getSource().addFeature(r),a=r);break;case"data":r!==e&&(e&&n.getSource().removeFeature(e),r&&n.getSource().addFeature(r),e=r)}}))};J.on("pointermove",(function(a){if(!a.dragging){var e=J.getEventPixel(a.originalEvent);r(e)}})),J.on("click",(function(a){r(a.pixel),function(a){var e=!1;J.forEachFeatureAtPixel(a.pixel,(function(t,n){if(n&&"data"===n.get("name")&&t){Y.style.display="",$.setPosition(a.coordinate);var r="";r=null!=t.get("stateName")?"Total Disease (".concat(t.get("stateName"),"): ").concat(t.get("totalCase")):"Total Disease: ".concat(t.get("totalCase")),Y.innerHTML=r,e=!0}})),e||(Y.style.display="none")}(a),function(a){J.forEachFeatureAtPixel(a.pixel,(function(a,e){if(e&&"country"===e.get("name")&&a){var t=a.get("name");L(t)}}))}(a)})),J.getView().on("change:resolution",(function(a){var e=J.getView().getZoom(),t=Math.pow(Math.abs(e-2),2)+3;M.getImage().setRadius(t),W.getSource().forEachFeature((function(a){a.setStyle(M)}))}))}function ta(a){var e=new x.a(Object(k.d)([a.x,a.y])),t=new S.a(e);t.setProperties(a),t.setStyle(M),Z.addFeature(t)}Z.on("addfeature",(function(a){!function(a){var e=(new Date).getTime(),t=Q.on("postrender",(function(n){var r=Object(B.a)(n),o=n.frameState,i=a.getGeometry().clone(),c=o.time-e,u=c/3e3,l=2*Object(R.b)(u)+3,s=Object(R.b)(1-u),d=new w.b({image:new C.a({radius:l,stroke:new E.a({color:"rgba(255, 0, 0, "+s+")",width:.25+s})})});if(r.setStyle(d),r.drawGeometry(i),c>3e3)return void Object(j.b)(t);J.render()}))}(a.feature)}));var na=function(a){function e(){return(e=Object(s.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_().then((function(a){q=a})).catch((function(a){console.log(a)}));case 2:ea(),q.forEach((function(a){ta(a)}));case 5:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return L=a.SetCountryName,Object(n.useEffect)((function(){!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{id:"map",className:"h-100"},r.a.createElement("div",{id:"tooltip",className:"customTooltip"}))},ra=t(219),oa=t.n(ra),ia={Afghanistan:"Afghanistan",Angola:"Angola",Albania:"Albania","United Arab Emirates":"United Arab Emirates",Argentina:"Argentina",Armenia:"Armenia",Antarctica:"","French Southern and Antarctic Lands":"",Australia:"Australia",Austria:"Austria",Azerbaijan:"Azerbaijan",Burundi:"Burundi",Belgium:"Belgium",Benin:"Benin","Burkina Faso":"Burkina Faso",Bangladesh:"Bangladesh",Bulgaria:"Bulgaria","The Bahamas":"Bahamas","Bosnia and Herzegovina":"Bosnia and Herzegovina",Belarus:"Belarus",Belize:"Belize",Bermuda:"United Kingdom",Bolivia:"Bolivia",Brazil:"Brazil",Brunei:"Brunei",Bhutan:"Bhutan",Botswana:"Botswana","Central African Republic":"Central African Republic",Canada:"Canada",Switzerland:"Switzerland",Chile:"Chile",China:"China","Ivory Coast":"",Cameroon:"Cameroon","Democratic Republic of the Congo":"Congo (Kinshasa)","Republic of the Congo":"Congo (Brazzaville)",Colombia:"Colombia","Costa Rica":"Costa Rica",Cuba:"Cuba","Northern Cyprus":"Cyprus",Cyprus:"Cyprus","Czech Republic":"Czechia",Germany:"Germany",Djibouti:"Djibouti",Denmark:"Denmark","Dominican Republic":"Dominican Republic",Algeria:"Algeria",Ecuador:"Ecuador",Egypt:"Egypt",Eritrea:"Eritrea",Spain:"Spain",Estonia:"Estonia",Ethiopia:"Ethiopia",Finland:"Finland",Fiji:"Fiji","Falkland Islands":"United Kingdom",France:"France",Gabon:"Gabon","United Kingdom":"United Kingdom",Georgia:"Georgia",Ghana:"Ghana",Guinea:"Guinea",Gambia:"Gambia","Guinea Bissau":"Guinea-Bissau","Equatorial Guinea":"Equatorial Guinea",Greece:"Greece",Greenland:"Denmark",Guatemala:"Guatemala","French Guiana":"France",Guyana:"Guyana",Honduras:"Honduras",Croatia:"Croatia",Haiti:"Haiti",Hungary:"Hungary",Indonesia:"Indonesia",India:"India",Ireland:"Ireland",Iran:"Iran",Iraq:"Iraq",Iceland:"Iceland",Israel:"Israel",Italy:"Italy",Jamaica:"Jamaica",Jordan:"Jordan",Japan:"Japan",Kazakhstan:"Kazakhstan",Kenya:"Kenya",Kyrgyzstan:"Kyrgyzstan",Cambodia:"Cambodia","South Korea":"Korea, South",Kosovo:"Kosovo",Kuwait:"Kuwait",Laos:"Laos",Lebanon:"Lebanon",Liberia:"Liberia",Libya:"Libya","Sri Lanka":"Sri Lanka",Lesotho:"Lesotho",Lithuania:"Lithuania",Luxembourg:"Luxembourg",Latvia:"Latvia",Morocco:"Morocco",Moldova:"Moldova",Madagascar:"Madagascar",Mexico:"Mexico",Macedonia:"North Macedonia",Mali:"Mali",Myanmar:"Burma",Montenegro:"Montenegro",Mongolia:"Mongolia",Mozambique:"Mozambique",Mauritania:"Mauritania",Malawi:"Malawi",Malaysia:"Malaysia",Namibia:"Namibia","New Caledonia":"France",Niger:"Niger",Nigeria:"Nigeria",Nicaragua:"Nicaragua",Netherlands:"Netherlands",Norway:"Norway",Nepal:"Nepal","New Zealand":"New Zealand",Oman:"Oman",Pakistan:"Pakistan",Panama:"Panama",Peru:"Peru",Philippines:"Philippines","Papua New Guinea":"Papua New Guinea",Poland:"Poland","Puerto Rico":"","North Korea":"",Portugal:"Portugal",Paraguay:"Paraguay",Qatar:"Qatar",Romania:"Romania",Russia:"Russia",Rwanda:"Rwanda","Western Sahara":"Western Sahara","Saudi Arabia":"Saudi Arabia",Sudan:"Sudan","South Sudan":"South Sudan",Senegal:"Senegal","Solomon Islands":"","Sierra Leone":"Sierra Leone","El Salvador":"El Salvador",Somaliland:"",Somalia:"Somalia","Republic of Serbia":"Serbia",Suriname:"Suriname",Slovakia:"Slovakia",Slovenia:"Slovenia",Sweden:"Sweden",Swaziland:"Eswatini",Syria:"Syria",Chad:"Chad",Togo:"Togo",Thailand:"Thailand",Tajikistan:"Tajikistan",Turkmenistan:"","East Timor":"Timor-Leste","Trinidad and Tobago":"Trinidad and Tobago",Tunisia:"Tunisia",Turkey:"Turkey",Taiwan:"Taiwan*","United Republic of Tanzania":"Tanzania",Uganda:"Uganda",Ukraine:"Ukraine",Uruguay:"Uruguay","United States of America":"US",Uzbekistan:"Uzbekistan",Venezuela:"Venezuela",Vietnam:"Vietnam",Vanuatu:"","West Bank":"West Bank and Gaza",Yemen:"Yemen","South Africa":"South Africa",Zambia:"Zambia",Zimbabwe:"Zimbabwe"},ca=(t(253),null),ua={chart:null,backupData:null,Init:function(){!function(a){sa.apply(this,arguments)}("Turkey")},Update:function(a,e,t,n){ua.chart.clear(),ua.chart.data.labels=e,ua.chart.data.datasets.forEach((function(a){a.label="",a.data=t})),ua.chart.options.title.text=["Monthly Disease Count of ".concat(a),"(Total: ".concat(n,")")],ua.chart.update()},Lookup:function(a,e){var t=a.filter((function(a){return a.countryName===ia[e]}));return t.length<1&&(t=null),t}},la=["January","February","March","April","May","June","July","August","September","October","November","December"];function sa(){return(sa=Object(s.a)(l.a.mark((function a(e){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_().then((function(a){ua.backupData=a;var t=a.find((function(a){return a.countryName===e})),n=[],r=[];t.detailedCase.forEach((function(a){a.month<la.length&&(n.push(la[a.month]),r.push(a.count))})),ca=document.getElementById("myChart").getContext("2d"),ua.chart=new oa.a(ca,{type:"line",data:{labels:n,datasets:[{label:"",backgroundColor:"rgb(255, 255, 255, 0)",borderColor:"rgb(240, 94, 35)",data:r}]},options:{title:{display:!0,text:["Monthly Disease Count of ".concat(t.countryName),"(Total: ".concat(t.totalCase,")")]},responsive:!0,maintainAspectRatio:!1}})})).catch((function(a){console.log(a)}));case 2:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function da(a){return ma.apply(this,arguments)}function ma(){return(ma=Object(s.a)(l.a.mark((function a(e){var t,n,r,o;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(null!==(t=ua.Lookup(ua.backupData,e))){a.next=5;break}return a.abrupt("return",!1);case 5:n=[],r=[],t[0].detailedCase.forEach((function(a){a.month<la.length&&(n.push(la[a.month]),r.push(0))})),o=0,t.forEach((function(a){o+=a.totalCase;var e=0;a.detailedCase.forEach((function(a){r[e]+=a.count,++e}))})),ua.Update(e,n,r,o);case 11:return a.abrupt("return",!0);case 12:case"end":return a.stop()}}),a)})))).apply(this,arguments)}var ha=function(a){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),o=t[0],i=t[1];return Object(n.useEffect)((function(){ua.Init()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ua.chart){e.next=6;break}return e.t0=i,e.next=4,da(a.CountryName);case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a.CountryName]),r.a.createElement("div",{className:"h-100"},r.a.createElement("canvas",{id:"myChart",style:{display:!1===o?"none":"block"}}),r.a.createElement("div",{style:{background:"lightblue",height:"100%",alignItems:"center",justifyContent:"center",display:!1===o?"flex":"none"}},r.a.createElement("strong",null,"No Data Found for This Country")))},fa=t(58),pa=t.n(fa),ga=t(527),ba=[{id:0,value:0},{id:1,value:0},{id:2,value:0},{id:3,value:0}],ya=["January","February","March","April"];var va=function(){var a=Object(ga.a)(["totalRepoCount","monthlyRepoCount"]),e=Object(c.a)(a,3),t=e[0],o=e[1],i=e[2],u=Object(n.useState)(0),l=Object(c.a)(u,2),s=l[0],d=l[1],m=Object(n.useState)(ba),h=Object(c.a)(m,2),f=h[0],p=h[1];return Object(n.useEffect)((function(){t.totalRepoCount?d(t.totalRepoCount):pa.a.get("https://api.github.com/search/repositories?q=covid OR coronavirus in:name,description+created:>2020-01-01").then((function(a){return a.data.total_count})).catch((function(a){return 0})).then((function(a){d(a),o("totalRepoCount",JSON.stringify(a),{path:"/",maxAge:300})})),t.monthlyRepoCount?t.monthlyRepoCount.monthlyData?p(t.monthlyRepoCount.monthlyData):i("monthlyRepoCount"):function(){var a=["https://api.github.com/search/repositories?q=covid OR coronavirus in:name,description+created:2020-01-01..2020-01-31","https://api.github.com/search/repositories?q=covid OR coronavirus in:name,description+created:2020-02-01..2020-02-29","https://api.github.com/search/repositories?q=covid OR coronavirus in:name,description+created:2020-03-01..2020-03-31","https://api.github.com/search/repositories?q=covid OR coronavirus in:name,description+created:2020-04-01..*"],e=[pa.a.get(a[0]),pa.a.get(a[1]),pa.a.get(a[2]),pa.a.get(a[3])];return pa.a.all([e[0],e[1],e[2],e[3]]).then(pa.a.spread((function(){for(var a=arguments.length,e=new Array(a),t=0;t<a;t++)e[t]=arguments[t];return e}))).catch((function(a){return 0}))}().then(pa.a.spread((function(){for(var a=arguments.length,e=new Array(a),t=0;t<a;t++)e[t]=arguments[t];var n=[].concat(e),r=n.slice(0),i=r.map((function(a,e){return{id:e,value:a.data.total_count}}));p(i);var c={monthlyData:i};o("monthlyRepoCount",JSON.stringify(c),{path:"/",maxAge:300})}))).catch((function(a){console.log("error on getRepoCounts(): "+a)}))}),[t.totalRepoCount,t.monthlyRepoCount,o,i]),r.a.createElement("table",{className:"table table-secondary table-hover"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Total number of COVID related repositories on Github"),r.a.createElement("td",null,s)),f&&f.map((function(a,e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,"Repo Counts on ",ya[e]),r.a.createElement("td",null,a.value))}))))};function wa(){return(wa=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a}).apply(this,arguments)}function Ca(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},o=Object.keys(a);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var Ea=r.a.createElement("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}),Sa=function(a){var e=a.svgRef,t=a.title,n=Ca(a,["svgRef","title"]);return r.a.createElement("svg",wa({"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",className:"svg-inline--fa fa-github fa-w-16",role:"img",viewBox:"0 0 496 512",ref:e},n),t?r.a.createElement("title",null,t):null,Ea)},xa=r.a.forwardRef((function(a,e){return r.a.createElement(Sa,wa({svgRef:e},a))}));t.p;var ka=function(){var a=Object(n.useState)("Turkey"),e=Object(c.a)(a,2),t=e[0],o=e[1];return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"col-xl-8 col-lg-10 col-md-12 col-sm-12 h-100"},r.a.createElement("div",{className:"d-flex flex-column w-100 h-100"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("div",{className:"title text-center"},"COVID Disease Tracker by Country"),r.a.createElement("div",{className:"ml-auto",id:"info"})),r.a.createElement("div",{className:"mb-1",style:{height:"400px"}},r.a.createElement(na,{SetCountryName:o})),r.a.createElement("div",{className:"bg-light",style:{height:"250px"}},r.a.createElement(ha,{CountryName:t})),r.a.createElement("div",{className:"mt-1"},r.a.createElement(va,null)),r.a.createElement("div",{className:"d-flex flex-column mt-auto"},r.a.createElement("div",{id:"location"},"Location: "),r.a.createElement("hr",{className:"w-100",style:{border:"1px solid white",borderRadius:"5px"}}),r.a.createElement("div",{className:"logo text-center h2 pb-3"},r.a.createElement("a",{className:"h-100",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Ardahan-Kisbet/COVID-19"},r.a.createElement(xa,{className:"svg h-100"})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(524);pa.a.get("https://ipapi.co/json/").then((function(a){document.getElementById("location").append(a.data.country_name)}));var Na=t(528);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Na.a,null,r.a.createElement(ka,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}},[[243,1,2]]]);
//# sourceMappingURL=main.ef20b0fe.chunk.js.map