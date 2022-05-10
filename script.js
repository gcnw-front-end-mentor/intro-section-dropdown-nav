const featuresButton = document.getElementById('featuresButton');
const companyButton = document.getElementById('companyButton');

function changeArrow(selection){
    const inputNode = selection.currentTarget;
    const target = inputNode.parentNode.getElementsByTagName('div')[0];
    let currentArrow = inputNode.getElementsByTagName('img')[0].src;
    /* SET ALL MENUS TO CLOSE AND ARROWS TO DOWN*/
    Array.from(document.getElementsByClassName('arrowImage')).forEach(element => element.src = './images/icon-arrow-down.svg');
    Array.from(document.getElementsByClassName('menuContent')).forEach(element => element.style.display = 'none');

    /* OPEN SELECTED MENU */
    if(currentArrow.includes('arrow-down')){   
        inputNode.getElementsByTagName('img')[0].src = './images/icon-arrow-up.svg';
        target.style.display = 'flex';
    }
    /* CLOSE SELECTED MENU */
    else if (currentArrow.includes('arrow-up')){
        inputNode.getElementsByTagName('img')[0].src = './images/icon-arrow-down.svg';
        target.style.display = 'none';
    }
}

/* DETECT CLICK LOCATION AND RESET MENUS IF CLICK IS NOT ON A MENU*/
function bodyClick(selection){
    selection.preventDefault();
    if(!featuresButton.contains(selection.target) && !companyButton.contains(selection.target)){
    Array.from(document.getElementsByClassName('arrowImage')).forEach(element => element.src = './images/icon-arrow-down.svg');
    Array.from(document.getElementsByClassName('menuContent')).forEach(element => element.style.display = 'none');  
    }
}

featuresButton.addEventListener('click',changeArrow);
companyButton.addEventListener('click',changeArrow);
document.body.parentNode.addEventListener('click', bodyClick);

