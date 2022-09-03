import $ from 'jquery'
import React,{ useState } from 'react';
import moment from 'moment';

export default function Next(){
  var dia1,ma1,uni1

const [nextdia,setnextdia]=useState();
const [nextma,setnextma]=useState();
const [nextuni,setnextuni]=useState();

const [dia,setdia]=useState();
const [ma,setma]=useState();
const [uni,setuni]=useState();

const [dia2,setdia2]=useState();
const [ma2,setma2]=useState();
const [uni2,setuni2]=useState();

const [nextdia2,setnextdia2]=useState();
const [nextma2,setnextma2]=useState();
const [nextuni2,setnextuni2]=useState();

function addMinutes(time, minsToAdd) {
    function D(J){ return (J<10? '0':'') + J;};
    var piece = time.split(':');
    var mins = piece[0]*60 + +piece[1] + +minsToAdd;
    return D(mins%(24*60)/60 | 0) + ':' + D(mins%60);  
  }  
  
setInterval(function(){ 
    setdia(window.diamondhill)
    setma(window.maonshan)
    setuni(window.university)

    dia1=addMinutes(window.nextdiamondhill+':00','15')
    ma1=addMinutes(window.nextmaonshan+':00','5')
    uni1=addMinutes(window.nextuniversity+':00','10')

    setnextdia(dia1)
    setnextma(ma1)
    setnextuni(uni1)

    setdia2(moment(window.diamondhill,'h:m').fromNow())
    setma2(moment(window.maonshan,'h:m').fromNow())
    setuni2(moment(window.university,'h:m').fromNow())

    setnextdia2(moment(dia1,'h:m').fromNow())
    setnextma2(moment(ma1,'h:m').fromNow())
    setnextuni2(moment(uni1,'h:m').fromNow())


    
},1000)//setinterval


return (<div id='nextdiv'>

<aside id='dia'>
<table><tbody><tr>
  <td><h2>DIAMOND HILL</h2><br></br>{dia}<br></br>{dia2}</td>
  <td>DEP.</td>
  <td>{nextdia}<br></br>{nextdia2}<br></br><h3>VISTA PARADISO</h3></td>
  </tr></tbody></table>
</aside>


<aside id='uni'>
<table><tbody><tr>
  <td><h2>UNIVERSITY</h2><br></br>{uni}<br></br>{uni2}</td>
  <td>DEP.</td>
  <td>{nextuni}<br></br>{nextuni2}<br></br><h3>VISTA PARADISO</h3></td>
  </tr></tbody></table>
</aside>

<aside id='ma'>
<table><tbody><tr>
  <td><h2>MA ON SHAN</h2><br></br>{ma}<br></br>{ma2}</td>
  <td>DEP.</td>
  <td>{nextma}<br></br>{nextma2}<br></br><h3>VISTA PARADISO</h3></td>
  </tr></tbody></table>
</aside>

</div>);
}