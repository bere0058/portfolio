/*Script for homepage*/

/*1 Column for tablet and mobile screen size */

/*********Declaration of Variables**********/

import window992 from "./index.js"
const mainGrid = document.querySelector('.m-content');

if (window992.matches) {
    mainGrid.classList.remove('row-cols-2')
};

/* Roles */

/*********Declaration of Variables**********/

const rolesArray = ['Front-end developer', 'Code web mock-ups', 'Photo and Video for web'];
let rolesList = document.querySelector('.roles');
let phraseIndex = 0;
let letterIndex = 0;

/* Role List function */

const createRoleList = () => {
    const rolesText = document.createElement('span');
    rolesList.appendChild(rolesText);
    rolesText.textContent = rolesArray[phraseIndex][letterIndex];

    /* Espace between words */
    if (rolesText.clientWidth === 0) {
        rolesText.style.width = '1vw';
    }

    setTimeout(() => {
        rolesText.remove()
    }, 3000)
}

/* Role List Loop */

const loop = () => {
    if (phraseIndex >= rolesArray.length) {
        phraseIndex = 0;
        letterIndex = 0;
        loop();
    } else if (letterIndex + 1 < rolesArray[phraseIndex].length) {
        setTimeout(() => {
            createRoleList();
            letterIndex++;
            loop();
        }, 50);
    } else {
        createRoleList();
        letterIndex = 0;
        phraseIndex++;
        setTimeout(() => {
            loop();
        }, 3000)
    }
}

loop()