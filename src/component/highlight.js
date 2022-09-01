import $ from 'jquery'
export default function Highlighter(){
setInterval(function(){ 
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const d = new Date();
let today = weekday[d.getDay()];
var casenum=0;
if (d.getDay()>0 && d.getDay()<6){//mon to fri
casenum=1
$('#timetable td:nth-child(2),#timetable td:nth-child(5)').css('color','darkgrey')



}if(d.getDay()===6){//sat
casenum=2
$('#timetable td:nth-child(1),#timetable td:nth-child(4)').css('color','darkgrey')
}if(d.getDay===0){//sun
casenum=3
$('#timetable td:nth-child(1),#timetable td:nth-child(2),#timetable td:nth-child(4)').css('color','darkgrey')
}



function minusMinutes(time, min) {
function D(J){ return (J<10? '0':'') + J;};
var piece = time.split(':');
var mins = piece[0]*60 + +piece[1] + +min;
return D(mins%(24*60)/60 | 0) + ':' + D(mins%60);  
}  
var now=new Date()
var diamondhill=new Date(now-15*60*1000).toLocaleString([],{hour12:false,timeStyle:'medium'})
var maonshan=new Date(now-5*60*1000).toLocaleString([],{hour12:false,timeStyle:'medium'})
var university=new Date(now-10*60*1000).toLocaleString([],{hour12:false,timeStyle:'medium'})
now=now.toLocaleString([],{hour12:false,timeStyle:'medium'})
var temp
if(['Mon','Tue','Wed','Thu','Fri'].includes(today)){
var first=$('#timetable td:nth-child(1)')
first.each(function(i){
temp=$(this).html()
if($(this).html().length===4) temp='0'+$(this).html()
if(temp<diamondhill&&temp!='') {
    window.nextdiamondhill=$(first[i+1]).html()
    $(this).addClass('grey')};
if(temp<now&&temp!='')window.diamondhill=$(first[i+1]).html()
})
var forth=$('#timetable td:nth-child(4)')
forth.each(function(i){
temp=$(this).html()
if($(this).html().length===4) temp='0'+$(this).html()
if(temp<university&&temp!='') {
    window.nextuniversity=$(forth[i+1]).html()
    $(this).addClass('grey')}
if(temp<now&&temp!='') window.university=$(forth[i+1]).html()

})
}
if(['Sat'].includes(today)){
var second=$('#timetable td:nth-child(2)')
second.each(function(i){
temp=$(this).html()
if($(this).html().length===4) temp='0'+$(this).html()
if(temp<diamondhill&&temp!='') {
    window.nextdiamondhill=$(second[i+1]).html()
    $(this).addClass('grey')}
    if(temp<now&&temp!='') window.diamondhill=$(second[i+1]).html()

})}
var third=$('#timetable td:nth-child(3)')
third.each(function(i){
temp=$(this).html()
if($(this).html().length===4) temp='0'+$(this).html()
if(temp<maonshan&&temp!='') {
    window.nextmaonshan=$(third[i+1]).html()
    $(this).addClass('grey')}
    if(temp<now&&temp!='') window.maonshan=$(third[i+1]).html()

})

if(['Sat','Sun'].includes(today)){
var fifth=$('#timetable td:nth-child(5)')
fifth.each(function(i){
temp=$(this).html()
if($(this).html().length===4) temp='0'+$(this).html()
if(temp<university&&temp!='') {
    window.nextuniversity=$(fifth[i+1]).html()
    $(this).addClass('grey')}
    if(temp<now&&temp!='') window.university=$(fifth[i+1]).html()

})
}
//new7
},1000)//setinterval

}