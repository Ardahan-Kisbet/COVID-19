(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{113:function(a,e,t){a.exports=t.p+"static/media/countries.ab583aa1.geojson"},133:function(a,e,t){a.exports=t(167)},138:function(a,e,t){},139:function(a,e,t){},142:function(a,e,t){a.exports=t.p+"static/media/rawDataBackup.795ce5b0.csv"},143:function(a,e,t){a.exports=t.p+"static/media/rawDeathsDataBackup.9f0d6bbb.csv"},144:function(a,e,t){a.exports=t.p+"static/media/rawRecoveredDataBackup.897b8c3b.csv"},167:function(a,e,t){"use strict";t.r(e);var n=t(3),r=t.n(n),o=t(112),i=t.n(o),c=(t(138),t(59)),u=(t(139),t(23)),s=t.n(u),l=t(40),d=(t(141),t(114)),m=t(94),f=t(93),h=t(103),p=t(117),g=t(115),b=t(116),y=t(73),v=t(74),w=t(100),C=t(101),E=t(77),k=t(83),x=t(55),S=t(5),N=t(113),O=t.n(N),R=t(91),D=t(27),j=t(67),B=t(118),I=t(70),T=t(168),A=new w.b({fill:new I.a({color:"rgba(255, 255, 255, 0.25)"}),stroke:new E.a({color:"#319FD3",width:1}),text:new T.a({font:"12px Calibri,sans-serif",fill:new I.a({color:"green"})})}),M=new w.b({image:new C.a({radius:3,fill:new I.a({color:"rgba(255, 0, 0, 0.4)"})})}),z=new w.b({stroke:new E.a({color:"green",width:1}),fill:new I.a({color:"rgba(255,255,0,0.1)"}),text:new T.a({font:"12px Calibri,sans-serif",fill:new I.a({color:"green"})})}),_=A.clone();_.setFill(new I.a({color:"rgba(0, 0, 0, 0.25)"}));var L,P=t(66),F=t.n(P),G=t(142),U=t(143),K=t(144),J=null,V=null,q=null,H=[],Z=function(){var a=Object(l.a)(s.a.mark((function a(){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise((function(a){new Promise((function(a){null===J?F.a.parse("https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",{header:!1,skipEmptyLines:!0,download:!0,dynamicTyping:!0,complete:function(e){a(J=e)},error:function(e){F.a.parse(G,{header:!1,skipEmptyLines:!0,download:!0,dynamicTyping:!0,complete:function(e){a(J=e)},error:function(e){a(J=null)}})}}):a(J)})).then((function(e){if(void 0===H||0===H.length){for(var t=[],n=e.data[0].length,r=function(a){var n=new Date(e.data[0][a]),r=n.getMonth(),o=n.getFullYear(),i=t.findIndex((function(a){return a.key===r+"("+o+")"}));-1===i?t.push({key:r+"("+o+")",daysCount:1,month:r,year:o}):t[i].daysCount++},o=4;o<n;++o)r(o);e.data=e.data.slice(1,e.data.length),e.data.forEach((function(a){var e=[],n=4,r=0;t.forEach((function(t){var o;o=a[n+t.daysCount-1],e.push({key:t.key,days:t.daysCount,count:o-r,month:t.month,year:t.year}),r=o,n+=t.daysCount}));var o=e.reduce((function(a,e){return a+e.count}),0);H.push({countryName:a[1]||"Undefined",stateName:a[0]||null,totalCase:o,detailedCase:e,x:a[3]||0,y:a[2]||0})})),H=H.filter((function(a){return 0!==a.x&&0!==a.y})),a(H)}else a(H)}))})));case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),W=function(){var a=Object(l.a)(s.a.mark((function a(){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise((function(a){new Promise((function(a){null===V?F.a.parse("https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv",{header:!1,skipEmptyLines:!0,download:!0,dynamicTyping:!0,complete:function(e){a(V=e)},error:function(e){F.a.parse(U,{header:!1,skipEmptyLines:!0,download:!0,dynamicTyping:!0,complete:function(e){a(V=e)},error:function(e){a(V=null)}})}}):a(V)})).then((function(e){for(var t=[],n=e.data[0].length,r=function(a){var n=new Date(e.data[0][a]).getMonth(),r=t.findIndex((function(a){return a.month===n}));-1===r?t.push({month:n,daysCount:1}):t[r].daysCount++},o=4;o<n;++o)r(o);e.data=e.data.slice(1,e.data.length);var i=[];e.data.forEach((function(a){var e=[],n=4,r=0;t.forEach((function(t){var o;o=a[n+t.daysCount-1],e.push({month:t.month,days:t.daysCount,count:o-r}),r=o,n+=t.daysCount}));var o=e.reduce((function(a,e){return a+e.count}),0);i.push({countryName:a[1]||"Undefined",stateName:a[0]||null,totalCase:o,detailedCase:e})})),a(i)}))})));case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),Y=function(){var a=Object(l.a)(s.a.mark((function a(){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise((function(a){new Promise((function(a){null===q?F.a.parse("https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv",{header:!1,skipEmptyLines:!0,download:!0,dynamicTyping:!0,complete:function(e){a(q=e)},error:function(e){F.a.parse(K,{header:!1,skipEmptyLines:!0,download:!0,dynamicTyping:!0,complete:function(e){a(q=e)},error:function(e){a(q=null)}})}}):a(q)})).then((function(e){for(var t=[],n=e.data[0].length,r=function(a){var n=new Date(e.data[0][a]).getMonth(),r=t.findIndex((function(a){return a.month===n}));-1===r?t.push({month:n,daysCount:1}):t[r].daysCount++},o=4;o<n;++o)r(o);e.data=e.data.slice(1,e.data.length);var i=[];e.data.forEach((function(a){var e=[],n=4,r=0;t.forEach((function(t){var o;o=a[n+t.daysCount-1],e.push({month:t.month,days:t.daysCount,count:o-r}),r=o,n+=t.daysCount}));var o=e.reduce((function(a,e){return a+e.count}),0);i.push({countryName:a[1]||"Undefined",stateName:a[0]||null,totalCase:o,detailedCase:e})})),a(i)}))})));case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),Q=null,$=[],X=new v.a({url:O.a,format:new b.a}),aa=new y.a({name:"country",source:X,style:function(a){return A.getText().setText(a.get("name")),A}}),ea=new v.a({}),ta=new y.a({name:"data",source:ea,zIndex:1}),na=new p.a({source:new g.a}),ra=null,oa=null,ia=new v.a({}),ca=new y.a({name:"diseased",source:ia,style:function(a){return _}});function ua(){null===Q&&(Q=new d.a({target:"map",layers:[na,aa,ca,ta],view:new m.a({center:[0,0],zoom:0,maxZoom:6}),interactions:Object(f.a)().extend([new h.a])}),ra=document.getElementById("tooltip"),oa=new B.a({element:ra,offset:[10,0],positioning:"bottom-left"}),Q.addOverlay(oa));var a,e,t=new y.a({source:new v.a,map:Q,style:function(a){return z.getText().setText(a.get("name")),z},zIndex:0}),n=new y.a({source:new v.a,map:Q,style:function(a){return M},zIndex:1}),r=function(r){var o=document.getElementById("info");Q.forEachFeatureAtPixel(r,(function(r,i){if(i)switch(i.get("name")){case"country":o.innerHTML=r?r.getId()+": "+r.get("name"):"&nbsp;",r!==a&&(a&&t.getSource().removeFeature(a),r&&t.getSource().addFeature(r),a=r);break;case"data":r!==e&&(e&&n.getSource().removeFeature(e),r&&n.getSource().addFeature(r),e=r)}}))};Q.on("pointermove",(function(a){if(!a.dragging){var e=Q.getEventPixel(a.originalEvent);r(e)}})),Q.on("click",(function(a){r(a.pixel),function(a){var e=!1;Q.forEachFeatureAtPixel(a.pixel,(function(t,n){if(n&&"data"===n.get("name")&&t){ra.style.display="",oa.setPosition(a.coordinate);var r="";r=null!=t.get("stateName")?"Total Disease (".concat(t.get("stateName"),"): ").concat(t.get("totalCase")):"Total Disease: ".concat(t.get("totalCase")),ra.innerHTML=r,e=!0}})),e||(ra.style.display="none")}(a),function(a){Q.forEachFeatureAtPixel(a.pixel,(function(a,e){if(e&&"country"===e.get("name")&&a){var t=a.get("name");L(t)}}))}(a)})),Q.getView().on("change:resolution",(function(a){var e=Q.getView().getZoom(),t=Math.pow(Math.abs(e-2),2)+3;M.getImage().setRadius(t),ta.getSource().forEachFeature((function(a){a.setStyle(M)}))}))}function sa(a){var e=new x.a(Object(S.d)([a.x,a.y])),t=new k.a(e);t.setProperties(a),t.setStyle(M),ea.addFeature(t)}ea.on("addfeature",(function(a){!function(a){var e=(new Date).getTime(),t=na.on("postrender",(function(n){var r=Object(R.a)(n),o=n.frameState,i=a.getGeometry().clone(),c=o.time-e,u=c/3e3,s=2*Object(D.b)(u)+3,l=Object(D.b)(1-u),d=new w.b({image:new C.a({radius:s,stroke:new E.a({color:"rgba(255, 0, 0, "+l+")",width:.25+l})})});if(r.setStyle(d),r.drawGeometry(i),c>3e3)return void Object(j.b)(t);Q.render()}))}(a.feature)}));var la=function(a){function e(){return(e=Object(l.a)(s.a.mark((function a(){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Z().then((function(a){$=a})).catch((function(a){console.log(a)}));case 2:$.forEach((function(a){sa(a)}));case 4:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return L=a.SetCountryName,Object(n.useEffect)((function(){ua(),function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{id:"map",className:"h-100"},r.a.createElement("div",{id:"tooltip",className:"customTooltip"}))},da=t(92),ma=t.n(da),fa={Afghanistan:"Afghanistan",Angola:"Angola",Albania:"Albania","United Arab Emirates":"United Arab Emirates",Argentina:"Argentina",Armenia:"Armenia",Antarctica:"","French Southern and Antarctic Lands":"",Australia:"Australia",Austria:"Austria",Azerbaijan:"Azerbaijan",Burundi:"Burundi",Belgium:"Belgium",Benin:"Benin","Burkina Faso":"Burkina Faso",Bangladesh:"Bangladesh",Bulgaria:"Bulgaria","The Bahamas":"Bahamas","Bosnia and Herzegovina":"Bosnia and Herzegovina",Belarus:"Belarus",Belize:"Belize",Bermuda:"United Kingdom",Bolivia:"Bolivia",Brazil:"Brazil",Brunei:"Brunei",Bhutan:"Bhutan",Botswana:"Botswana","Central African Republic":"Central African Republic",Canada:"Canada",Switzerland:"Switzerland",Chile:"Chile",China:"China","Ivory Coast":"",Cameroon:"Cameroon","Democratic Republic of the Congo":"Congo (Kinshasa)","Republic of the Congo":"Congo (Brazzaville)",Colombia:"Colombia","Costa Rica":"Costa Rica",Cuba:"Cuba","Northern Cyprus":"Cyprus",Cyprus:"Cyprus","Czech Republic":"Czechia",Germany:"Germany",Djibouti:"Djibouti",Denmark:"Denmark","Dominican Republic":"Dominican Republic",Algeria:"Algeria",Ecuador:"Ecuador",Egypt:"Egypt",Eritrea:"Eritrea",Spain:"Spain",Estonia:"Estonia",Ethiopia:"Ethiopia",Finland:"Finland",Fiji:"Fiji","Falkland Islands":"United Kingdom",France:"France",Gabon:"Gabon","United Kingdom":"United Kingdom",Georgia:"Georgia",Ghana:"Ghana",Guinea:"Guinea",Gambia:"Gambia","Guinea Bissau":"Guinea-Bissau","Equatorial Guinea":"Equatorial Guinea",Greece:"Greece",Greenland:"Denmark",Guatemala:"Guatemala","French Guiana":"France",Guyana:"Guyana",Honduras:"Honduras",Croatia:"Croatia",Haiti:"Haiti",Hungary:"Hungary",Indonesia:"Indonesia",India:"India",Ireland:"Ireland",Iran:"Iran",Iraq:"Iraq",Iceland:"Iceland",Israel:"Israel",Italy:"Italy",Jamaica:"Jamaica",Jordan:"Jordan",Japan:"Japan",Kazakhstan:"Kazakhstan",Kenya:"Kenya",Kyrgyzstan:"Kyrgyzstan",Cambodia:"Cambodia","South Korea":"Korea, South",Kosovo:"Kosovo",Kuwait:"Kuwait",Laos:"Laos",Lebanon:"Lebanon",Liberia:"Liberia",Libya:"Libya","Sri Lanka":"Sri Lanka",Lesotho:"Lesotho",Lithuania:"Lithuania",Luxembourg:"Luxembourg",Latvia:"Latvia",Morocco:"Morocco",Moldova:"Moldova",Madagascar:"Madagascar",Mexico:"Mexico",Macedonia:"North Macedonia",Mali:"Mali",Myanmar:"Burma",Montenegro:"Montenegro",Mongolia:"Mongolia",Mozambique:"Mozambique",Mauritania:"Mauritania",Malawi:"Malawi",Malaysia:"Malaysia",Namibia:"Namibia","New Caledonia":"France",Niger:"Niger",Nigeria:"Nigeria",Nicaragua:"Nicaragua",Netherlands:"Netherlands",Norway:"Norway",Nepal:"Nepal","New Zealand":"New Zealand",Oman:"Oman",Pakistan:"Pakistan",Panama:"Panama",Peru:"Peru",Philippines:"Philippines","Papua New Guinea":"Papua New Guinea",Poland:"Poland","Puerto Rico":"","North Korea":"",Portugal:"Portugal",Paraguay:"Paraguay",Qatar:"Qatar",Romania:"Romania",Russia:"Russia",Rwanda:"Rwanda","Western Sahara":"Western Sahara","Saudi Arabia":"Saudi Arabia",Sudan:"Sudan","South Sudan":"South Sudan",Senegal:"Senegal","Solomon Islands":"","Sierra Leone":"Sierra Leone","El Salvador":"El Salvador",Somaliland:"",Somalia:"Somalia","Republic of Serbia":"Serbia",Suriname:"Suriname",Slovakia:"Slovakia",Slovenia:"Slovenia",Sweden:"Sweden",Swaziland:"Eswatini",Syria:"Syria",Chad:"Chad",Togo:"Togo",Thailand:"Thailand",Tajikistan:"Tajikistan",Turkmenistan:"","East Timor":"Timor-Leste","Trinidad and Tobago":"Trinidad and Tobago",Tunisia:"Tunisia",Turkey:"Turkey",Taiwan:"Taiwan*","United Republic of Tanzania":"Tanzania",Uganda:"Uganda",Ukraine:"Ukraine",Uruguay:"Uruguay","United States of America":"US",Uzbekistan:"Uzbekistan",Venezuela:"Venezuela",Vietnam:"Vietnam",Vanuatu:"","West Bank":"West Bank and Gaza",Yemen:"Yemen","South Africa":"South Africa",Zambia:"Zambia",Zimbabwe:"Zimbabwe"},ha="one_year",pa=null,ga={chart:null,backupData:null,chartRange:ha,Init:function(){!function(a){ya.apply(this,arguments)}("Turkey")},Update:function(a,e,t,n){ga.chart.clear(),ga.chart.data.labels=e,ga.chart.data.datasets.forEach((function(a){a.label="",a.data=t})),ga.chart.options.title.text=["Monthly Disease Count of ".concat(a),"(Total: ".concat(n,")")],ga.chart.update()},Lookup:function(a,e){var t=a.filter((function(a){return a.countryName===fa[e]}));return t.length<1&&(t=null),t},FilterChartRange:function(a){switch(ga.chartRange){case ha:var e=new Date,t=new Date(e.valueOf());return t.setFullYear(e.getFullYear()-1),t.setDate(1),a.filter((function(a){var n=new Date(a.year,a.month);return t<=n&&n<=e}))}}},ba=["January","February","March","April","May","June","July","August","September","October","November","December"];function ya(){return(ya=Object(l.a)(s.a.mark((function a(e){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Z().then((function(a){ga.backupData=a;var t=a.find((function(a){return a.countryName===e})),n=[],r=[];ga.FilterChartRange(t.detailedCase).forEach((function(a){a.month<ba.length&&(n.push(ba[a.month]+"("+a.year+")"),r.push(a.count))})),pa=document.getElementById("myChart").getContext("2d"),ga.chart=new ma.a(pa,{type:"line",data:{labels:n,datasets:[{label:"",backgroundColor:"rgb(255, 255, 255, 0)",borderColor:"rgb(240, 94, 35)",data:r}]},options:{title:{display:!0,text:["Monthly Disease Count of ".concat(t.countryName),"(Total: ".concat(t.totalCase,")")]},responsive:!0,maintainAspectRatio:!1}})})).catch((function(a){console.log(a)}));case 2:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function va(a){return wa.apply(this,arguments)}function wa(){return(wa=Object(l.a)(s.a.mark((function a(e){var t,n,r,o;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(null!==(t=ga.Lookup(ga.backupData,e))){a.next=5;break}return a.abrupt("return",!1);case 5:n=[],r=[],ga.FilterChartRange(t[0].detailedCase).forEach((function(a){a.month<ba.length&&(n.push(ba[a.month]+"("+a.year+")"),r.push(0))})),o=0,t.forEach((function(a){o+=a.totalCase;var e=0;ga.FilterChartRange(a.detailedCase).forEach((function(a){r[e]+=a.count,++e}))})),ga.Update(e,n,r,o);case 11:return a.abrupt("return",!0);case 12:case"end":return a.stop()}}),a)})))).apply(this,arguments)}var Ca=function(a){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),o=t[0],i=t[1];return Object(n.useEffect)((function(){ga.Init()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ga.chart){e.next=6;break}return e.t0=i,e.next=4,va(a.CountryName);case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a.CountryName]),r.a.createElement("div",{className:"h-100"},r.a.createElement("canvas",{id:"myChart",style:{display:!1===o?"none":"block"}}),r.a.createElement("div",{style:{background:"lightblue",height:"100%",alignItems:"center",justifyContent:"center",display:!1===o?"flex":"none"}},r.a.createElement("strong",null,"No Data Found for This Country")))},Ea=null,ka={chart:null,backupDataDeaths:null,backupDataRecovered:null,labels:["Deaths","Recoveries"],Init:function(){!function(a){xa.apply(this,arguments)}("Turkey")},Update:function(a){ka.chart.clear(),ka.chart.data.labels=ka.labels,ka.chart.data.datasets.forEach((function(e){e.data=a})),ka.chart.update()},Lookup:function(a,e){var t=a.filter((function(a){return a.countryName===fa[e]}));return t.length<1&&(t=null),t}};function xa(){return(xa=Object(l.a)(s.a.mark((function a(e){var t,n;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=0,n=0,a.next=4,W().then((function(a){ka.backupDataDeaths=a;var n=a.find((function(a){return a.countryName===e}));t=n.totalCase}));case 4:return a.next=6,Y().then((function(a){ka.backupDataRecovered=a;var t=a.find((function(a){return a.countryName===e}));n=t.totalCase}));case 6:Ea=document.getElementById("myPieChart").getContext("2d"),ka.chart=new ma.a(Ea,{type:"doughnut",data:{datasets:[{backgroundColor:["rgb(211, 211, 211)","rgb(144,238,144)"],borderColor:"rgb(255,255,255)",data:[t,n]}],labels:ka.labels}});case 8:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function Sa(a){return Na.apply(this,arguments)}function Na(){return(Na=Object(l.a)(s.a.mark((function a(e){var t,n,r,o,i;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=ka.Lookup(ka.backupDataDeaths,e),n=ka.Lookup(ka.backupDataRecovered,e),null!==t&&null!==n){a.next=6;break}return a.abrupt("return",!1);case 6:o=0,i=0,t.forEach((function(a){o+=a.totalCase})),n.forEach((function(a){i+=a.totalCase})),r=[o,i],ka.Update(r);case 11:return a.abrupt("return",!0);case 12:case"end":return a.stop()}}),a)})))).apply(this,arguments)}var Oa=function(a){return Object(n.useEffect)((function(){ka.Init()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ka.chart){e.next=3;break}return e.next=3,Sa(a.CountryName);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a.CountryName]),r.a.createElement("div",null,r.a.createElement("canvas",{id:"myPieChart"}))},Ra=t(50),Da=t.n(Ra),ja=t(169),Ba=[{id:0,value:0},{id:1,value:0},{id:2,value:0},{id:3,value:0}],Ia=["January","February","March","April"];var Ta=function(){var a=Object(ja.a)(["totalRepoCount","monthlyRepoCount"]),e=Object(c.a)(a,3),t=e[0],o=e[1],i=e[2],u=Object(n.useState)(0),s=Object(c.a)(u,2),l=s[0],d=s[1],m=Object(n.useState)(Ba),f=Object(c.a)(m,2),h=f[0],p=f[1];return Object(n.useEffect)((function(){t.totalRepoCount?d(t.totalRepoCount):Da.a.get("https://api.github.com/search/repositories?q=covid OR coronavirus in:name,description+created:>2020-01-01").then((function(a){return a.data.total_count})).catch((function(a){return 0})).then((function(a){d(a),o("totalRepoCount",JSON.stringify(a),{path:"/",maxAge:300})})),t.monthlyRepoCount?t.monthlyRepoCount.monthlyData?p(t.monthlyRepoCount.monthlyData):i("monthlyRepoCount"):function(){var a=["https://api.github.com/search/repositories?q=covid OR coronavirus in:name,description+created:2020-01-01..2020-01-31","https://api.github.com/search/repositories?q=covid OR coronavirus in:name,description+created:2020-02-01..2020-02-29","https://api.github.com/search/repositories?q=covid OR coronavirus in:name,description+created:2020-03-01..2020-03-31","https://api.github.com/search/repositories?q=covid OR coronavirus in:name,description+created:2020-04-01..*"],e=[Da.a.get(a[0]),Da.a.get(a[1]),Da.a.get(a[2]),Da.a.get(a[3])];return Da.a.all([e[0],e[1],e[2],e[3]]).then(Da.a.spread((function(){for(var a=arguments.length,e=new Array(a),t=0;t<a;t++)e[t]=arguments[t];return e}))).catch((function(a){return 0}))}().then(Da.a.spread((function(){for(var a=arguments.length,e=new Array(a),t=0;t<a;t++)e[t]=arguments[t];var n=[].concat(e),r=n.slice(0),i=r.map((function(a,e){return{id:e,value:a.data.total_count}}));p(i);var c={monthlyData:i};o("monthlyRepoCount",JSON.stringify(c),{path:"/",maxAge:300})}))).catch((function(a){console.log("error on getRepoCounts(): "+a)}))}),[t.totalRepoCount,t.monthlyRepoCount,o,i]),r.a.createElement("table",{className:"table table-hover"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Total number of COVID related repositories on Github"),r.a.createElement("td",null,l)),h&&h.map((function(a,e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,"Repo Counts on ",Ia[e]),r.a.createElement("td",null,a.value))}))))};function Aa(){return(Aa=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a}).apply(this,arguments)}function Ma(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},o=Object.keys(a);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var za=r.a.createElement("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}),_a=function(a){var e=a.svgRef,t=a.title,n=Ma(a,["svgRef","title"]);return r.a.createElement("svg",Aa({"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",className:"svg-inline--fa fa-github fa-w-16",role:"img",viewBox:"0 0 496 512",ref:e},n),t?r.a.createElement("title",null,t):null,za)},La=r.a.forwardRef((function(a,e){return r.a.createElement(_a,Aa({svgRef:e},a))}));t.p;var Pa=function(){var a=Object(n.useState)("Turkey"),e=Object(c.a)(a,2),t=e[0],o=e[1];return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"col-xl-8 col-lg-10 col-md-12 col-sm-12 h-100"},r.a.createElement("div",{className:"d-flex flex-column w-100 h-100"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("div",{className:"title text-center"},"COVID Disease Tracker By Country"),r.a.createElement("div",{className:"d-flex flex-row"},r.a.createElement("div",{className:"badges"},r.a.createElement("span",{className:"badge badge-warning"},"React.js"),r.a.createElement("span",{className:"badge badge-info"},"OpenLayers"),r.a.createElement("span",{className:"badge badge-success"},"Chart.js"),r.a.createElement("span",{className:"badge badge-dark"},"Github API")),r.a.createElement("div",{className:"ml-auto",id:"info"}))),r.a.createElement("div",{className:"mb-1",style:{height:"400px"}},r.a.createElement(la,{SetCountryName:o})),r.a.createElement("div",{className:"bg-light",style:{height:"250px"}},r.a.createElement(Ca,{CountryName:t})),r.a.createElement("div",{className:"mt-1 flexWrap bg-light"},r.a.createElement("div",{className:"col-md-6 col-sm-12"},r.a.createElement(Oa,{CountryName:t})),r.a.createElement("div",{className:"col-md-6 col-sm-12"},r.a.createElement(Ta,null))),r.a.createElement("div",{className:"d-flex flex-column mt-auto"},r.a.createElement("div",{id:"location"},"Location: "),r.a.createElement("hr",{className:"w-100",style:{border:"1px solid white",borderRadius:"5px"}}),r.a.createElement("div",{className:"logo text-center h2 pb-3"},r.a.createElement("a",{className:"h-100",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Ardahan-Kisbet/COVID-19"},r.a.createElement(La,{className:"svg h-100"})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(166);Da.a.get("https://ipapi.co/json/").then((function(a){document.getElementById("location").append(a.data.country_name)}));var Fa=t(170);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Fa.a,null,r.a.createElement(Pa,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}},[[133,1,2]]]);
//# sourceMappingURL=main.bbf90700.chunk.js.map