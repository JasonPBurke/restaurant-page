import './main.css';
import header from './header.js';
import home from './home';
import footer from './footer';
import menu from './menu';
import contact from './contact';

const content = document.getElementById('content');

function loadPage(header, main, footer) {
  content.innerText = '';
  content.append(header());
  content.append(main());
  content.append(footer());
}

loadPage(header, home, footer);

document.addEventListener('click', (e) => {
  const target = e.target.innerText;

  if (target === 'HOME') {
    loadPage(header, home, footer);
  }
  if (target === 'MENU') {
    loadPage(header, menu, footer);
  }
  if (target === 'CONTACT') {
    loadPage(header, contact, footer);
  }
});
