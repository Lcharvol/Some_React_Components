import React, { Component } from 'react';
import './Button1.css';

const Button1 = props => (
  <div className="Button1">
    <div className="shadow" />
    <div className="button1_elem">
      <h1>{props.name}</h1>
    </div>
  </div>
);
export default Button1;
