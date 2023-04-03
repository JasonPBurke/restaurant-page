import logo from './images/fishyJoeLogo.png';

export default function header() {
  const header = document.createElement('header');

  const nav = document.createElement('nav');
  nav.setAttribute('class', 'navigation');
  const navUl = document.createElement('ul');
  const homeLi = document.createElement('li');
  homeLi.setAttribute('id', 'home');
  homeLi.innerHTML = 'Home';
  const menuLi = document.createElement('li');
  menuLi.innerHTML = 'Menu';
  const contactLi = document.createElement('li');
  contactLi.innerHTML = 'Contact';
  nav.append(navUl);
  navUl.append(homeLi);
  navUl.append(menuLi);
  navUl.append(contactLi);
  const logoDiv = document.createElement('div');
  logoDiv.setAttribute('class', 'logoAndName');
  const logoImg = document.createElement('img');
  logoImg.src = logo;
  logoDiv.append(logoImg);
  header.append(logoDiv);
  header.append(nav);

  return header;
}
