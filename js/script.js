'use strict';

// Deklariere eine Variable `vorname` und weise ihr deinen Vornamen als Wert zu
let vorname = 'Vanessa';

// Setze mithilfe eines [Template Strings] die Variable `vorname` ein: "Todos von (vorname)"
const headline = document.querySelector('h1');
headline.textContent = `Todos von ${vorname}`;

// Das zweite Listenelement soll durch hinzufügen einer CSS-Klasse `.done` mithilfe von JS durchgestrichen werden
const secondLi = document.querySelector('ul').children[1];
secondLi.classList.add('done');

// Erstelle ein neues `<li>`-Element. Gib dem neuen Listenelement einen beliebigen Textinhalt. Füge das Listenelement am Ende der Liste hinzu
const newLi = document.createElement('li');
newLi.textContent = 'Pflanzen gießen';
document.querySelector('ul').appendChild(newLi);

// Lösche das erste Element `<li>Einkaufen</li>`
const firstLi = document.querySelector('ul').children[0];
firstLi.remove();

// Verändere die Hintergrundfarbe dieses neuen elements auf `red`
newLi.style.backgroundColor = 'red';
