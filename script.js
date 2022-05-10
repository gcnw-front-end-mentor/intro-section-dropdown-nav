const featuresButton = document.getElementById('featuresButton');
const companyButton = document.getElementById('companyButton');

function changeArrow(selection){
    const inputNode = selection.currentTarget;
    Array.from(document.getElementsByClassName('arrowImage')).forEach(element => element.src = './images/icon-arrow-down.svg');
    Array.from(document.getElementsByClassName('menuContent')).forEach(element => element.style.display = 'none');
    const target = inputNode.parentNode.getElementsByTagName('div')[0];
    let currentArrow = inputNode.getElementsByTagName('img')[0].src;
    if(currentArrow.includes('arrow-down')){   
        console.log('arrow-down');
        Array.from(document.getElementsByClassName('menuContent')).forEach(element => element.style.display = 'none');
        inputNode.getElementsByTagName('img')[0].src = './images/icon-arrow-up.svg';
        target.style.display = 'flex';
    }
    else if (currentArrow.includes('arrow-up')){
        console.log('arrow-up');
        inputNode.getElementsByTagName('img')[0].src = './images/icon-arrow-down.svg';
        target.style.display = 'none';
    }
}

featuresButton.addEventListener('click',changeArrow);
companyButton.addEventListener('click',changeArrow); 

