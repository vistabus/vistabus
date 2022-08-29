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



}if(d.getDay()==6){//sat
casenum=2
$('#timetable td:nth-child(1),#timetable td:nth-child(4)').css('color','darkgrey')
}if(d.getDay==0){//sun
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
var temp
if(['Mon','Tue','Wed','Thu','Fri'].includes(today)){
$('#timetable td:nth-child(1)').each(function(){
temp=$(this).html()
if($(this).html().length==4) temp='0'+$(this).html()
if(temp<diamondhill) {$(this).addClass('grey')}
})
$('#timetable td:nth-child(4)').each(function(){
temp=$(this).html()
if($(this).html().length==4) temp='0'+$(this).html()
if(temp<university) {$(this).addClass('grey')}
})
}
if(['Sat'].includes(today)){
$('#timetable td:nth-child(2)').each(function(){
temp=$(this).html()
if($(this).html().length==4) temp='0'+$(this).html()
if(temp<diamondhill) {$(this).addClass('grey')}
})}

$('#timetable td:nth-child(3)').each(function(){
temp=$(this).html()
if($(this).html().length==4) temp='0'+$(this).html()
if(temp<maonshan) {$(this).addClass('grey')}
})

if(['Sat','Sun'].includes(today)){
$('#timetable td:nth-child(5)').each(function(){
temp=$(this).html()
if($(this).html().length==4) temp='0'+$(this).html()
if(temp<university) {$(this).addClass('grey')}
})
}

},1000)//setinterval

}