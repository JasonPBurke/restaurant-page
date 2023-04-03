import joeImg from './images/fishyJoe.png';
import smartAssImg from './images/smartAssTeen.png';
import spottyTeenImg from './images/spottyTeenRobot.png';

function employeeFactory(name, description, img) {
  const el = document.createElement('div');
  el.setAttribute('class', 'employee-info-card');
  const textDiv = document.createElement('div');
  const n = document.createElement('h3');
  n.innerText = name;
  const desc = document.createElement('p');
  desc.innerText = description;
  textDiv.append(n, desc);
  const i = document.createElement('img');
  i.src = img;
  i.alt = `employee image of ${name}`;
  el.append(textDiv, i);

  return el;
}

export default function contact() {
  const m = document.createElement('main');
  m.setAttribute('class', 'contact-main');

  const joe = employeeFactory('Fishy Joe', "The owner of Fishy Joe's", joeImg);
  const smartAss = employeeFactory(
    'Smart-Ass Teen',
    'This guy is going places!',
    smartAssImg
  );
  const spottyTeen = employeeFactory(
    'Spotty Teen Robot',
    // '001100101110101001',
    '01001001 00100000 01101100 01101111 01110110 01100101 00100000 01101101 01101111 01101101',
    spottyTeenImg
  );

  m.append(joe, smartAss, spottyTeen);

  return m;
}
