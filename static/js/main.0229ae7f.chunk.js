(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=(n(3),n(5)),c=(n(15),n(16),n(1)),r=n.n(c),d=n(2),h=n(6);function m(){var e=Object(a.useState)(),t=Object(d.a)(e,2),n=t[0],i=t[1];return fetch("NEWschedule.csv").then(function(e){return e.text()}).then(function(e){!function(e){var t=e.split("\n");t.forEach(function(e,n){t[n]=e.split(",")}),t.pop();var n=document.createElement("table"),a=document.createElement("tbody");t.forEach(function(e){var t=document.createElement("tr");e.forEach(function(e){var n=document.createElement("td");n.appendChild(document.createTextNode(e)),t.appendChild(n)}),a.appendChild(t)}),n.appendChild(a),r()(n).find("tr:first-child td").each(function(){r()(this).replaceWith("<th>"+r()(this).text()+"</th>")}),i(n.outerHTML)}(e)}),l.a.createElement("div",{id:"timetable",dangerouslySetInnerHTML:{__html:h.sanitize(n)}})}function o(){var e=(new Date).toLocaleString([],{hour12:!1,timeStyle:"medium"}),t=Object(a.useState)(e),n=Object(d.a)(t,2),i=n[0],c=n[1];return setInterval(function(){c((new Date).toLocaleString([],{hour12:!1,timeStyle:"medium"}))},1e3),l.a.createElement("h1",null,i)}function u(){var e=Object(a.useState)(),t=Object(d.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(),r=Object(d.a)(c,2),h=r[0],m=r[1],o=Object(a.useState)(),u=Object(d.a)(o,2),s=u[0],E=u[1],w=Object(a.useState)(),b=Object(d.a)(w,2),f=b[0],g=b[1],v=Object(a.useState)(),y=Object(d.a)(v,2),S=y[0],p=y[1],O=Object(a.useState)(),D=Object(d.a)(O,2),j=D[0],x=D[1];function L(e,t){function n(e){return(e<10?"0":"")+e}var a=e.split(":"),l=60*a[0]+ +a[1]+ +t;return n(l%1440/60|0)+":"+n(l%60)}return setInterval(function(){g(window.diamondhill),p(window.maonshan),x(window.university),i(L(window.nextdiamondhill+":00","15")),m(L(window.nextmaonshan+":00","5")),E(L(window.nextuniversity+":00","10"))},1e3),l.a.createElement("div",{id:"nextdiv"},l.a.createElement("aside",{id:"dia"},l.a.createElement("h2",null,"DIAMOND HILL"),l.a.createElement("a",null,f),"DEP.",l.a.createElement("span",null,n),l.a.createElement("a",null,f),"DEP.",l.a.createElement("span",null,n),l.a.createElement("h3",null,"Vista Paradiso")),l.a.createElement("aside",{id:"uni"},l.a.createElement("h2",null,"UNIVERSITY"),l.a.createElement("a",null,j),"DEP.",l.a.createElement("span",null,s),l.a.createElement("h3",null,"Vista Paradiso")),l.a.createElement("aside",{id:"ma"},l.a.createElement("h2",null,"MA ON SHAN"),l.a.createElement("a",null,S),"DEP.",l.a.createElement("span",null,h),l.a.createElement("h3",null,"Vista Paradiso")))}function s(){return r()(document).ready(function(){r()(document).on("click","#setting",function(){r()("section").toggle()}),r()(document).on("click","#next",function(){r()("#nextdiv").toggle()})}),l.a.createElement("section",null,l.a.createElement("div",{className:"twotoggles"}," Visibility",l.a.createElement("div",null,"Public"),l.a.createElement("div",null,"Private")))}setInterval(function(){var e=new Date,t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()];e.getDay()>0&&e.getDay()<6&&r()("#timetable td:nth-child(2),#timetable td:nth-child(5)").css("color","darkgrey"),6===e.getDay()&&r()("#timetable td:nth-child(1),#timetable td:nth-child(4)").css("color","darkgrey"),0===e.getDay&&r()("#timetable td:nth-child(1),#timetable td:nth-child(2),#timetable td:nth-child(4)").css("color","darkgrey");var n,a=new Date,l=new Date(a-9e5).toLocaleString([],{hour12:!1,timeStyle:"medium"}),i=new Date(a-3e5).toLocaleString([],{hour12:!1,timeStyle:"medium"}),c=new Date(a-6e5).toLocaleString([],{hour12:!1,timeStyle:"medium"});if(a=a.toLocaleString([],{hour12:!1,timeStyle:"medium"}),["Mon","Tue","Wed","Thu","Fri"].includes(t)){var d=r()("#timetable td:nth-child(1)");d.each(function(e){n=r()(this).html(),4===r()(this).html().length&&(n="0"+r()(this).html()),n<l&&""!=n&&(window.nextdiamondhill=r()(d[e+1]).html(),r()(this).addClass("grey")),n<a&&""!=n&&(window.diamondhill=r()(d[e+1]).html())});var h=r()("#timetable td:nth-child(4)");h.each(function(e){n=r()(this).html(),4===r()(this).html().length&&(n="0"+r()(this).html()),n<c&&""!=n&&(window.nextuniversity=r()(h[e+1]).html(),r()(this).addClass("grey")),n<a&&""!=n&&(window.university=r()(h[e+1]).html())})}if(["Sat"].includes(t)){var m=r()("#timetable td:nth-child(2)");m.each(function(e){n=r()(this).html(),4===r()(this).html().length&&(n="0"+r()(this).html()),n<l&&""!=n&&(window.nextdiamondhill=r()(m[e+1]).html(),r()(this).addClass("grey")),n<a&&""!=n&&(window.diamondhill=r()(m[e+1]).html())})}var o=r()("#timetable td:nth-child(3)");if(o.each(function(e){n=r()(this).html(),4===r()(this).html().length&&(n="0"+r()(this).html()),n<i&&""!=n&&(window.nextmaonshan=r()(o[e+1]).html(),r()(this).addClass("grey")),n<a&&""!=n&&(window.maonshan=r()(o[e+1]).html())}),["Sat","Sun"].includes(t)){var u=r()("#timetable td:nth-child(5)");u.each(function(e){n=r()(this).html(),4===r()(this).html().length&&(n="0"+r()(this).html()),n<c&&""!=n&&(window.nextuniversity=r()(u[e+1]).html(),r()(this).addClass("grey")),n<a&&""!=n&&(window.university=r()(u[e+1]).html())})}},1e3),Object(i.createRoot)(r()("#root")[0]).render(l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement(s,null),l.a.createElement("header",null,l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{id:"next"},"\u24d8")),l.a.createElement("td",null,l.a.createElement(o,null)),l.a.createElement("td",null,l.a.createElement("button",{id:"setting"},"\u2699")))))),l.a.createElement(m,null)))},7:function(e,t,n){e.exports=n(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.0229ae7f.chunk.js.map