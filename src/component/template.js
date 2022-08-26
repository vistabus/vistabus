import React, { Component } from 'react';
export default class Template extends Component {
    render() { 
        return ();

    }
}




import { useState } from "react";
function Clock(){
let time='temp'
const [current,set]=useState(time);
setInterval(function(){ 
set(
new Date().toLocaleString([],{hour12:false,timeStyle:'medium'})
)},1000)
return(<h1>{current}</h1>);
}
export default Clock




cc
class  extends Component {
    state = {  } 
    render() { 
        return ();
    }
}
 
export default ;




import $ from 'jquery'
export default function Highlighter(){
}

//var $ = require('jquery');
//const element = <h1>Hello</h1>;
//root.render(element)
//console.log($('#root'));
/*
export default class Counter extends Component{
state={count:0}
render() { 
return <React.Fragment>{this.func()}</React.Fragment>;
};
func(){
return <h1 className='red'>test</h1>
};
}
*/
//root.render(<Counter />)
