import $ from 'jquery'
import React from 'react';

export default function Setting(){
    $(document).ready(function(){
        $(document).on('click','#setting',function(){
            $('section').toggle()
        console.log( $('#setting'));

        })

})
return (<section>
<div className='twotoggles'> Visibility 
      <div>Public</div> 
      <div>Private</div>
  </div>


</section>);
}