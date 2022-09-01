import $ from 'jquery'
import React,{ useState } from 'react';

export default function Next(){
const [nextdia,setnextdia]=useState();
const [nextma,setnextma]=useState();
const [nextuni,setnextuni]=useState();

const [dia,setdia]=useState();
const [ma,setma]=useState();
const [uni,setuni]=useState();


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

    setnextdia(addMinutes(window.nextdiamondhill+':00','15'))
    setnextma(addMinutes(window.nextmaonshan+':00','5'))
    setnextuni(addMinutes(window.nextuniversity+':00','10'))



    
},1000)//setinterval


return (<div id='nextdiv'>

<aside id='dia'><h2>DIAMOND HILL</h2>
<a>{dia}</a>DEP.<span>{nextdia}</span>
<a>{dia}</a>DEP.<span>{nextdia}</span>

<h3>Vista Paradiso</h3></aside>


<aside id='uni'><h2>UNIVERSITY</h2>
<a>{uni}</a>DEP.<span>{nextuni}</span>
<h3>Vista Paradiso</h3></aside>


<aside id='ma'><h2>MA ON SHAN</h2>
<a>{ma}</a>DEP.<span>{nextma}</span>
<h3>Vista Paradiso</h3></aside>

</div>);
}