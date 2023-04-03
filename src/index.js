import './main.css';
import header from './header.js';
import home from './home';
import footer from './footer';
import menu from './menu';

const content = document.getElementById('content');

console.log(header);

content.append(header());
content.append(menu());

content.append(footer());
