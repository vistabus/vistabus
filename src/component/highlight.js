import $ from 'jquery'
export default function Highlighter(){
setInterval(function(){ 
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
if (d.getDay()>0 && d.getDay()<6){//mon to fri
$('aside table td').css('color','white')
$('aside table td:nth-child(2),aside table td:nth-child(5)').css('color','darkgrey')
}else if(d.getDay()==6){//sat
$('aside table td').css('color','white')
$('aside table td:nth-child(1),aside table td:nth-child(4)').css('color','darkgrey')
}else if(d.getDay==0){//sun
$('aside table td').css('color','white')
$('aside table td:nth-child(1),aside table td:nth-child(2),aside table td:nth-child(4)').css('color','darkgrey')
}







},1000)

}