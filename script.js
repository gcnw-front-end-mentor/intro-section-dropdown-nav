const featuresButton = document.getElementById('featuresButton');
const companyButton = document.getElementById('companyButton');
Array.from(document.getElementsByClassName('menuContent')).forEach(element => element.style.display = 'none');
Array.from(document.getElementsByClassName('menuContent')).forEach(element => element.style.height = '0');
function changeArrow(selection){
    const inputNode = selection.currentTarget;
    const target = inputNode.parentNode.getElementsByTagName('div')[0];
    let currentArrow = inputNode.getElementsByTagName('img')[0].src;
    /* SET ALL MENUS TO CLOSE AND ARROWS TO DOWN*/
    Array.from(document.getElementsByClassName('arrowImage')).forEach(element => element.src = './images/icon-arrow-down.svg');
    Array.from(document.getElementsByClassName('menuContent')).forEach(element => element.style.display = 'none');
    Array.from(document.getElementsByClassName('menuContent')).forEach(element => element.style.height = '0px');

    /* OPEN SELECTED MENU */
    if(currentArrow.includes('arrow-down')){   
        inputNode.getElementsByTagName('img')[0].src = './images/icon-arrow-up.svg';
        console.log(target)
        target.style.display = '';
        target.style.height = '';
    }
    /* CLOSE SELECTED MENU */
    else if (currentArrow.includes('arrow-up')){
        inputNode.getElementsByTagName('img')[0].src = './images/icon-arrow-down.svg';
        target.style.display = 'none';
        target.style.height = '0';
    }
}

/* DETECT CLICK LOCATION AND RESET MENUS IF CLICK IS NOT ON A MENU*/
function bodyClick(selection){
    selection.preventDefault();
    console.log(selection.target)

    if(!featuresButton.contains(selection.target) && !companyButton.contains(selection.target)){
    Array.from(document.getElementsByClassName('arrowImage')).forEach(element => element.src = './images/icon-arrow-down.svg');
    Array.from(document.getElementsByClassName('menuContent')).forEach(element => element.style.display = 'none');

    }
}

function openNav() {
    document.getElementById('linkContainer').style.width = '50%';
    document.getElementById('linkContainer').style.display = 'flex';
}

function closeNav() {
    document.getElementById('linkContainer').style.width = '';
    document.getElementById('linkContainer').style.display = '';
}

featuresButton.addEventListener('click',changeArrow);
companyButton.addEventListener('click',changeArrow);
document.body.parentNode.addEventListener('click', bodyClick);

