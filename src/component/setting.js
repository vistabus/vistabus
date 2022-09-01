import $ from 'jquery'
import React from 'react';

export default function Setting(){
$(document).ready(function(){
$(document).on('click','#setting',function(){$('section').toggle()})
$(document).on('click','#next',function(){$('#nextdiv').toggle()})
})
return (<section>
<div className='twotoggles'> Visibility 
      <div>Public</div> 
      <div>Private</div>
  </div>


</section>);
}