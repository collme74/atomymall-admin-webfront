// commonJS
// var _ = require('lodash');

// es6 import
import _ from 'lodash';
import './style.css'
import './hello.scss'
// named import
import { area, circumference } from './js/circle'
// default import
import box from './js/cube'

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

console.log('hello webpack dev server');
console.log(area(5), circumference(5));
console.log(box(5));
