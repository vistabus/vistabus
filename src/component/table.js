import * as DOMPurify from 'dompurify';
import { useState } from "react";
import React from 'react';
import $ from 'jquery'

export default function Table(){
const [current,set]=useState();
fetch('NEWschedule.csv').then(response=>response.text()).then(data=>{
var result=data.split('\r\n')
result.forEach(function (element, index) {
result[index] = element.split(",")
})
result.pop()
var tablestr = document.createElement('table');
var tableBody = document.createElement('tbody');
result.forEach(function(rowData) {
var row = document.createElement('tr');
rowData.forEach(function(cellData) {
var cell = document.createElement('td');
cell.appendChild(document.createTextNode(cellData));
row.appendChild(cell);
});
tableBody.appendChild(row);
});
tablestr.appendChild(tableBody);
$(tablestr).find('tr:first-child td').each(function(){
    $(this).replaceWith('<th>'+$(this).text()+'</th>');
   });

set( tablestr.outerHTML)
})
return (<div id='timetable' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(current)}} /> )
}