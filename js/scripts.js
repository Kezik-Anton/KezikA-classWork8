// function Popup(clickElement) {

//     clicker: //получаем элемент
//     text

//     createPopup() {
//         // СОЗДАЕМ  div popup класс
//         // заполняем текст
//         // вставить в документ
//     }

//     Listener () {
//         // событие нажатия clicker и вызывал попап
//         // 1. добавить попап в документ
//         // 2. добавляем .overlay blackout
//     }

//     closePopup () {
//         // отловить закрытие и закрыть
//     }

// }

let lang = document.childNodes[1];
lang.setAttribute('lang', 'en');

let title = document.createElement('title');
title.innerHTML = 'HomeWork 8. Kezik Anton - BE103';

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

document.head.appendChild(title);
document.head.appendChild(metaUtf8);

let style = document.createElement('style');
style.innerHTML = `
    body {
        margin: *;
        padding: *;
    }
`;
document.head.appendChild(style);

let section = document.createElement('section');
document.body.appendChild(section);

let h2 = document.createElement('h2');
h2.innerHTML = 'Choose Your Option';
section.appendChild(h2);

let p = document.createElement('p');
p.setAttribute('class', 'caption');
p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
section.appendChild(p);

let mainBlock = document.createElement('div');
mainBlock.setAttribute('class', 'mainBlock');
section.appendChild(mainBlock);

let item1 = document.createElement('div');
item1.setAttribute('class', 'item');
mainBlock.appendChild(item1);

let item2 = document.createElement('div');
item2.setAttribute('class', 'item');
mainBlock.appendChild(item2);
