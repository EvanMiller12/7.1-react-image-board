var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var ImageBoard = require('./components/main.jsx').ImageBoard;

$(function(){

  ReactDOM.render(
    React.createElement(ImageBoard),
    document.getElementById('app')
  );
});
