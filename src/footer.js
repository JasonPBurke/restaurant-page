export default function footer() {
  const f = document.createElement('footer');

  const contentCredits = document.createElement('p');
  const designer = document.createElement('p');

  contentCredits.innerText = 'Images courtesy of Futurama';
  designer.innerText = 'Designed by FUZZYLOGIC ';

  f.append(contentCredits);
  f.append(designer);

  return f;
}
