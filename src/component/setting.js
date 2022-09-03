import $ from 'jquery'
import React from 'react';
import { NgToggleModule } from 'ng-toggle-button';

export default function Setting(){
$(document).ready(function(){
$(document).on('click','#setting',function(){$('#settingdiv').toggle()})
$(document).on('click','#next',function(){
  $('#timetable').toggle()
  $('#nextdiv').toggle()})


})

return (<div id='settingdiv'>
<button>test</button>
<ng-toggle
  [value]="1"
  [disabled]="false"
  [width]="100"
  [height]="50"
  [margin]="0"
  [fontSize]="100"
  [labels]="{
  "unchecked": "",
  "checked": ""
}"
  [color]="{
  "unchecked": "#960000",
  "checked": "#006464"
}"
  [switchColor]="{
  "checked": "#00a388",
  "unchecked": "red"
}"
  [values]="{
  "unchecked": 0,
  "checked": 1
}"
  [fontColor]="{
  "checked": "#00a388",
  "unchecked": "#f45a32"
}">
</ng-toggle>
      

</div>);
}