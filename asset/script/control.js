const registerLink = document.querySelector('.js-register-link');
const loginLink = document.querySelector('.js-login-link');

const modal = document.querySelector('.js-modal');
const modalBody = document.querySelector('.js-body');
const modalLogin = document.querySelector('.js-login-form');
const modalSwitchLogin = document.querySelector('.js-switch-login');
const modalRegister = document.querySelector('.js-register-form');
const modalSwitchRegister = document.querySelector('.js-switch-link-register');
const banner = document.querySelector('.banner');
const listDots = banner.querySelectorAll('.dot');
const bannerDynamic = banner.querySelector('.banner-dynamic img');
const bannerIconLeft = banner.querySelector('.banner-icon.left');
const bannerIconRight = banner.querySelector('.banner-icon.right');

var bannerNum = 0;

// Add event listeners
registerLink.addEventListener('click', function() {
    showRegister();
});

modalSwitchRegister.addEventListener('click', function() {
    showRegister();
});

loginLink.addEventListener('click', function() {
    showLogin();
});

modalSwitchLogin.addEventListener('click', function() {
    showLogin();
});

modal.addEventListener('click', function() {
    hidenModel();
});

modalBody.addEventListener('click', function(event) {
    event.stopImmediatePropagation()
});

// Function
function showLogin() {
    modal.style.display = 'flex';
    modalLogin.style.display = 'flex';
    modalRegister.style.display = 'none';
}

function showRegister() {
    modal.style.display = 'flex';
    modalLogin.style.display = 'none';
    modalRegister.style.display = 'flex';
}

function hidenModel() {
    modal.style.display = 'none';
    modalLogin.style.display = 'none';
    modalRegister.style.display = 'none';
}


//Slider
for(let i in listDots) {
    if(listDots.hasOwnProperty(i)) {
        listDots[i].addEventListener('click', () => {
            bannerDynamic.src = `./asset/img/Banner/banner${parseInt(i) + 1}.jpg`;    
            switchDot(i);
        })
    }
}

function switchDot (num) {
    for(let i in listDots) {
        if(listDots.hasOwnProperty(i)) {
            listDots[i].classList.remove('selected');
        }
    }
    listDots[num].classList.add('selected');
}

function switchSilde (num) {
    bannerNum += num;
    switch (bannerNum) {
        case -1: 
            bannerNum = 4;
            break;
        case 5:
            bannerNum = 0;
            break;
    }

    bannerDynamic.src = `./asset/img/Banner/banner${bannerNum + 1}.jpg`;
    switchDot(bannerNum);
}

setInterval(() => switchSilde(1), 5000);

bannerIconLeft.addEventListener('click', () => switchSilde(-1))

bannerIconRight.addEventListener('click', () => switchSilde(1))

