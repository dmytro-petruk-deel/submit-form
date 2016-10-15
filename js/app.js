import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';
import Form from './components/form.js';
import style from '../scss/screen.scss';

ReactDOM.render(
  <div>
    <Header number="3/4" title="Who is booking?" />
    <div className="content">
      <Form/>
    </div>
  </div>
  , document.getElementById('app'));
