import $ from 'jquery'
export default function Highlighter(){
setInterval(function(){ 
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
if (d.getDay()>0 && d.getDay()<6){//mon to fri
$('table td').css('color','white')
$('table td:nth-child(2),table td:nth-child(5)').css('color','darkgrey')
}else if(d.getDay()==6){//sat
$('table td').css('color','white')
$('table td:nth-child(1),table td:nth-child(4)').css('color','darkgrey')
}else if(d.getDay==0){//sun
$('table td').css('color','white')
$('table td:nth-child(1),table td:nth-child(2),table td:nth-child(4)').css('color','darkgrey')
}
},1000)

}