(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var l=n(1),a=n.n(l),i=(n(3),n(5)),c=(n(15),n(16),n(0)),h=n.n(c),r=n(2),d=n(6);function o(){var t=Object(l.useState)(),e=Object(r.a)(t,2),n=e[0],i=e[1];return fetch("NEWschedule.csv").then(function(t){return t.text()}).then(function(t){!function(t){var e=t.split("\n");e.forEach(function(t,n){e[n]=t.split(",")}),e.pop();var n=document.createElement("table"),l=document.createElement("tbody");e.forEach(function(t){var e=document.createElement("tr");t.forEach(function(t){var n=document.createElement("td");n.appendChild(document.createTextNode(t)),e.appendChild(n)}),l.appendChild(e)}),n.appendChild(l),h()(n).find("tr:first-child td").each(function(){h()(this).replaceWith("<th>"+h()(this).text()+"</th>")}),i(n.outerHTML)}(t)}),a.a.createElement("div",{id:"timetable",dangerouslySetInnerHTML:{__html:d.sanitize(n)}})}function u(){var t=(new Date).toLocaleString([],{hour12:!1,timeStyle:"medium"}),e=Object(l.useState)(t),n=Object(r.a)(e,2),i=n[0],c=n[1];return setInterval(function(){c((new Date).toLocaleString([],{hour12:!1,timeStyle:"medium"}))},1e3),a.a.createElement("h1",null,i)}function m(){return h()(document).ready(function(){h()(document).on("click","#setting",function(){h()("section").toggle(),console.log(h()("#setting"))})}),a.a.createElement("section",null,a.a.createElement("div",{className:"twotoggles"}," Visibility",a.a.createElement("div",null,"Public"),a.a.createElement("div",null,"Private")))}setInterval(function(){var t=new Date,e=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t.getDay()];t.getDay()>0&&t.getDay()<6&&h()("#timetable td:nth-child(2),#timetable td:nth-child(5)").css("color","darkgrey"),6==t.getDay()&&h()("#timetable td:nth-child(1),#timetable td:nth-child(4)").css("color","darkgrey"),0==t.getDay&&h()("#timetable td:nth-child(1),#timetable td:nth-child(2),#timetable td:nth-child(4)").css("color","darkgrey");var n,l=new Date,a=new Date(l-9e5).toLocaleString([],{hour12:!1,timeStyle:"medium"}),i=new Date(l-3e5).toLocaleString([],{hour12:!1,timeStyle:"medium"}),c=new Date(l-6e5).toLocaleString([],{hour12:!1,timeStyle:"medium"});["Mon","Tue","Wed","Thu","Fri"].includes(e)&&(h()("#timetable td:nth-child(1)").each(function(){n=h()(this).html(),4==h()(this).html().length&&(n="0"+h()(this).html()),n<a&&h()(this).addClass("grey")}),h()("#timetable td:nth-child(4)").each(function(){n=h()(this).html(),4==h()(this).html().length&&(n="0"+h()(this).html()),n<c&&h()(this).addClass("grey")})),["Sat"].includes(e)&&h()("#timetable td:nth-child(2)").each(function(){n=h()(this).html(),4==h()(this).html().length&&(n="0"+h()(this).html()),n<a&&h()(this).addClass("grey")}),h()("#timetable td:nth-child(3)").each(function(){n=h()(this).html(),4==h()(this).html().length&&(n="0"+h()(this).html()),n<i&&h()(this).addClass("grey")}),["Sat","Sun"].includes(e)&&h()("#timetable td:nth-child(5)").each(function(){n=h()(this).html(),4==h()(this).html().length&&(n="0"+h()(this).html()),n<c&&h()(this).addClass("grey")})},1e3),Object(i.createRoot)(h()("#root")[0]).render(a.a.createElement(a.a.Fragment,null,a.a.createElement(m,null),a.a.createElement("header",null,a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(u,null)),a.a.createElement("td",null,a.a.createElement("button",{id:"setting"},"\u2699")))))),a.a.createElement(o,null)))},7:function(t,e,n){t.exports=n(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.22706830.chunk.js.map