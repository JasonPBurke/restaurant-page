import popplerImg from './popplersRealistic.png';
import frootImg from './frootCup.png';
import walrusImg from './walrusJuice.png';
import whiskeyImg from './whiskey.png';
import bungalowImg from './btots.png';
import stroganoffImg from './stroganoff.png';
import fSpagImg from './spag.png';
import saladImg from './salad.png';

function menuItemFactory(name, description, img) {
  const c = document.createElement('div');
  c.setAttribute('class', 'menu-item');
  const itemName = document.createElement('h3');
  itemName.innerText = name;
  const itemImg = document.createElement('img');
  itemImg.src = img;
  const desc = document.createElement('p');
  const textDiv = document.createElement('div');
  textDiv.append(itemName, desc);
  desc.innerText = description;
  c.append(textDiv, itemImg);

  return c;
}

export default function menu() {
  const m = document.createElement('main');
  m.setAttribute('class', 'main');

  const popplers = menuItemFactory(
    'popplers',
    "They're like sex, except you're having them!",
    popplerImg
  );
  const frootCup = menuItemFactory(
    'Froot Cup',
    'Comes with your choice of cheese filling',
    frootImg
  );
  const walrusJuice = menuItemFactory(
    'Extreme Walrus Juice',
    'Ride The Walrus!',
    walrusImg
  );
  const whiskey = menuItemFactory('Whiskey', 'free with kids meal', whiskeyImg);
  const friedSpag = menuItemFactory(
    'Fried spaghetti dinner breakfast pocket',
    'found on the lunch menu',
    fSpagImg
  );
  const stroganoff = menuItemFactory(
    'Stroganoff',
    'Out of Stock',
    stroganoffImg
  );
  const bTots = menuItemFactory(
    'Buggalo Tots',
    'free-range Martian Buggalo(not used)',
    bungalowImg
  );
  const gSalad = menuItemFactory(
    "Gardener lover's salad ",
    'Choice of Cheese Filling',
    saladImg
  );

  m.append(
    popplers,
    frootCup,
    walrusJuice,
    whiskey,
    stroganoff,
    friedSpag,
    bTots,
    gSalad
  );

  return m;
}
