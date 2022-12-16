import $ from 'jquery'
import React from 'react';
import SwitchExample from './switch'

export default function Setting(){
$(document).ready(function(){
$(document).on('click','#setting',function(){$('#settingdiv').toggle()})
$(document).on('click','#next',function(){
  $('#timetable').toggle()
  $('#nextdiv').toggle()})


})

return (<div id='settingdiv'>
<SwitchExample />
</div>);
}