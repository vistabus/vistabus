(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(27)},24:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=(n(5),n(7)),c=(n(23),n(24),n(1)),r=n.n(c),m=n(2),d=n(8);function h(){var e=Object(a.useState)(),t=Object(m.a)(e,2),n=t[0],i=t[1];return fetch("NEWschedule.csv").then(function(e){return e.text()}).then(function(e){!function(e){var t=e.split("\n");t.forEach(function(e,n){t[n]=e.split(",")}),t.pop();var n=document.createElement("table"),a=document.createElement("tbody");t.forEach(function(e){var t=document.createElement("tr");e.forEach(function(e){var n=document.createElement("td");n.appendChild(document.createTextNode(e)),t.appendChild(n)}),a.appendChild(t)}),n.appendChild(a),r()(n).find("tr:first-child td").each(function(){r()(this).replaceWith("<th>"+r()(this).text()+"</th>")}),i(n.outerHTML)}(e)}),l.a.createElement("div",{id:"timetable",dangerouslySetInnerHTML:{__html:d.sanitize(n)}})}function u(){var e=(new Date).toLocaleString([],{hour12:!1,timeStyle:"medium"}),t=Object(a.useState)(e),n=Object(m.a)(t,2),i=n[0],c=n[1];return setInterval(function(){c((new Date).toLocaleString([],{hour12:!1,timeStyle:"medium"}))},1e3),l.a.createElement("h1",null,i)}var o=n(3),s=n.n(o);function b(){var e,t,n,i=Object(a.useState)(),c=Object(m.a)(i,2),r=c[0],d=c[1],h=Object(a.useState)(),u=Object(m.a)(h,2),o=u[0],b=u[1],E=Object(a.useState)(),w=Object(m.a)(E,2),f=w[0],S=w[1],g=Object(a.useState)(),O=Object(m.a)(g,2),v=O[0],j=O[1],y=Object(a.useState)(),p=Object(m.a)(y,2),D=p[0],x=p[1],C=Object(a.useState)(),I=Object(m.a)(C,2),k=I[0],A=I[1],N=Object(a.useState)(),T=Object(m.a)(N,2),L=T[0],M=T[1],P=Object(a.useState)(),R=Object(m.a)(P,2),H=R[0],V=R[1],W=Object(a.useState)(),F=Object(m.a)(W,2),J=F[0],_=F[1],z=Object(a.useState)(),U=Object(m.a)(z,2),Y=U[0],q=U[1],B=Object(a.useState)(),G=Object(m.a)(B,2),K=G[0],Q=G[1],X=Object(a.useState)(),Z=Object(m.a)(X,2),$=Z[0],ee=Z[1];function te(e,t){function n(e){return(e<10?"0":"")+e}var a=e.split(":"),l=60*a[0]+ +a[1]+ +t;return n(l%1440/60|0)+":"+n(l%60)}return setInterval(function(){j(window.diamondhill),x(window.maonshan),A(window.university),e=te(window.nextdiamondhill+":00","15"),t=te(window.nextmaonshan+":00","5"),n=te(window.nextuniversity+":00","10"),d(e),b(t),S(n),M(s()(window.diamondhill,"h:m").fromNow()),V(s()(window.maonshan,"h:m").fromNow()),_(s()(window.university,"h:m").fromNow()),q(s()(e,"h:m").fromNow()),Q(s()(t,"h:m").fromNow()),ee(s()(n,"h:m").fromNow())},1e3),l.a.createElement("div",{id:"nextdiv"},l.a.createElement("aside",{id:"dia"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("h2",null,"DIAMOND HILL"),l.a.createElement("br",null),v,l.a.createElement("br",null),L),l.a.createElement("td",null,"DEP."),l.a.createElement("td",null,r,l.a.createElement("br",null),Y,l.a.createElement("br",null),l.a.createElement("h3",null,"VISTA PARADISO")))))),l.a.createElement("aside",{id:"uni"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("h2",null,"UNIVERSITY"),l.a.createElement("br",null),k,l.a.createElement("br",null),J),l.a.createElement("td",null,"DEP."),l.a.createElement("td",null,f,l.a.createElement("br",null),$,l.a.createElement("br",null),l.a.createElement("h3",null,"VISTA PARADISO")))))),l.a.createElement("aside",{id:"ma"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("h2",null,"MA ON SHAN"),l.a.createElement("br",null),D,l.a.createElement("br",null),H),l.a.createElement("td",null,"DEP."),l.a.createElement("td",null,o,l.a.createElement("br",null),K,l.a.createElement("br",null),l.a.createElement("h3",null,"VISTA PARADISO")))))))}var E=n(9),w=n(10),f=n(13),S=n(11),g=n(14),O=n(4),v=n(12),j=n.n(v),y=function(e){function t(){var e;return Object(E.a)(this,t),(e=Object(f.a)(this,Object(S.a)(t).call(this))).state={checked:!1},e.handleChange=e.handleChange.bind(Object(O.a)(Object(O.a)(e))),e}return Object(g.a)(t,e),Object(w.a)(t,[{key:"handleChange",value:function(e){this.setState({checked:e})}},{key:"render",value:function(){return l.a.createElement("label",null,l.a.createElement("span",null,"Switch with default style"),l.a.createElement(j.a,{onChange:this.handleChange,checked:this.state.checked}))}}]),t}(a.Component);function p(){return r()(document).ready(function(){r()(document).on("click","#setting",function(){r()("#settingdiv").toggle()}),r()(document).on("click","#next",function(){r()("#timetable").toggle(),r()("#nextdiv").toggle()})}),l.a.createElement("div",{id:"settingdiv"},l.a.createElement(y,null))}setInterval(function(){var e=new Date,t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()];e.getDay()>0&&e.getDay()<6&&r()("#timetable td:nth-child(2),#timetable td:nth-child(5)").css("color","darkgrey"),6===e.getDay()&&r()("#timetable td:nth-child(1),#timetable td:nth-child(4)").css("color","darkgrey"),0===e.getDay&&r()("#timetable td:nth-child(1),#timetable td:nth-child(2),#timetable td:nth-child(4)").css("color","darkgrey");var n,a=new Date,l=new Date(a-9e5).toLocaleString([],{hour12:!1,timeStyle:"medium"}),i=new Date(a-3e5).toLocaleString([],{hour12:!1,timeStyle:"medium"}),c=new Date(a-6e5).toLocaleString([],{hour12:!1,timeStyle:"medium"});if(a=a.toLocaleString([],{hour12:!1,timeStyle:"medium"}),["Mon","Tue","Wed","Thu","Fri"].includes(t)){var m=r()("#timetable td:nth-child(1)");m.each(function(e){n=r()(this).html(),4===r()(this).html().length&&(n="0"+r()(this).html()),n<l&&""!=n&&(window.nextdiamondhill=r()(m[e+1]).html(),r()(this).addClass("grey")),n<a&&""!=n&&(window.diamondhill=r()(m[e+1]).html())});var d=r()("#timetable td:nth-child(4)");d.each(function(e){n=r()(this).html(),4===r()(this).html().length&&(n="0"+r()(this).html()),n<c&&""!=n&&(window.nextuniversity=r()(d[e+1]).html(),r()(this).addClass("grey")),n<a&&""!=n&&(window.university=r()(d[e+1]).html())})}if(["Sat"].includes(t)){var h=r()("#timetable td:nth-child(2)");h.each(function(e){n=r()(this).html(),4===r()(this).html().length&&(n="0"+r()(this).html()),n<l&&""!=n&&(window.nextdiamondhill=r()(h[e+1]).html(),r()(this).addClass("grey")),n<a&&""!=n&&(window.diamondhill=r()(h[e+1]).html())})}var u=r()("#timetable td:nth-child(3)");if(u.each(function(e){n=r()(this).html(),4===r()(this).html().length&&(n="0"+r()(this).html()),n<i&&""!=n&&(window.nextmaonshan=r()(u[e+1]).html(),r()(this).addClass("grey")),n<a&&""!=n&&(window.maonshan=r()(u[e+1]).html())}),["Sat","Sun"].includes(t)){var o=r()("#timetable td:nth-child(5)");o.each(function(e){n=r()(this).html(),4===r()(this).html().length&&(n="0"+r()(this).html()),n<c&&""!=n&&(window.nextuniversity=r()(o[e+1]).html(),r()(this).addClass("grey")),n<a&&""!=n&&(window.university=r()(o[e+1]).html())})}},1e3),Object(i.createRoot)(r()("#root")[0]).render(l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null),l.a.createElement(p,null),l.a.createElement("header",null,l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{id:"next"},"\u24d8")),l.a.createElement("td",null,l.a.createElement(u,null)),l.a.createElement("td",null,l.a.createElement("button",{id:"setting"},"\u2699")))))),l.a.createElement(h,null)))}},[[15,1,2]]]);
//# sourceMappingURL=main.0ba2100c.chunk.js.map