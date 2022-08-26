import { useState } from "react";
import React from 'react';
export default function Clock(){

let time=new Date().toLocaleString([],{hour12:false,timeStyle:'medium'})
const [current,set]=useState(time);
setInterval(function(){ 
set(
    new Date().toLocaleString([],{hour12:false,timeStyle:'medium'})
)},1000)
return(<h1>{current}</h1>);
}