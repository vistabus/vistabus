import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import 'w3-css/w3.css';
import './app.css'
import $ from 'jquery'
import Table from './component/table'
import Clock from './component/clock'
import Highlight from './component/highlight'
import Setting from './component/setting'

Highlight()
const root = createRoot($('#root')[0]);
root.render(
<React.Fragment>
<Setting />
<header><table><tbody><tr><td><Clock /></td><td><button id='setting'>⚙</button></td></tr></tbody></table></header>
<Table />
</React.Fragment>
)