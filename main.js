const menu1 = document.querySelector('#menu1');
const menu2 = document.querySelector('#menu2');
const menu3 = document.querySelector('#menu3');
const content = document.querySelector('#content');

menu1.addEventListener('click', () => {
    menu1.style.backgroundColor = 'purple';
    menu2.style.backgroundColor = 'violet';
    menu3.style.backgroundColor = 'violet';

    content.textContent = 'Contenu 1';
});

menu2.addEventListener('click', () => {
    menu2.style.backgroundColor = 'purple';
    menu1.style.backgroundColor = 'violet';
    menu3.style.backgroundColor = 'violet';

    content.textContent = 'Contenu 2';
});

menu3.addEventListener('click', () => {
    menu3.style.backgroundColor = 'purple';
    menu1.style.backgroundColor = 'violet';
    menu2.style.backgroundColor = 'violet';

    content.textContent = 'Contenu 3';
});


// ----------------------------------------------------------------------------
// ------------------------------------ FORMULAIRE ----------------------------
// ----------------------------------------------------------------------------

// A FINIR

const myText = document.querySelector('#myText');
const mdp = document.querySelector('#mdp');
const toChecked = document.querySelector('#toChecked');
const nameButton = document.querySelectorAll('input[name="button"]');
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const comment = document.querySelector('#comment');
const submit = document.querySelector('#submit');


submit.addEventListener('click', () => {
    let isChecked = '';

    if (toChecked.checked == true) {
        isChecked = 'Checked';
    } else {
        isChecked = 'Not checked';
    }


    alert(
        'Mon texte : ' + myText.value + 
        '\n' + 
        'Mon passxord : ' + mdp.value +
        '\n' +
        'Bouton à checker : ' + isChecked
    );
});