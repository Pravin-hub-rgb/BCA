const switch1 = document.querySelector('.switch1');
const switch2 = document.querySelector('.switch2');
const switch3 = document.querySelector('.switch3');
const mBody = document.querySelector('body');
const mMain = document.querySelector('#main');


switch2.addEventListener('click', () => {
    switch1.classList.remove('activeSwitch')
    switch3.classList.remove('activeSwitch')
    switch2.classList.add('activeSwitch')
    mBody.classList.remove('s1Back');
    mMain.classList.remove('s1Main');
    mBody.classList.remove('s3Back');
    mMain.classList.remove('s3Main');
    mBody.classList.add('s2Back');
    mMain.classList.add('s2Main');
})
switch1.addEventListener('click', () => {
    switch3.classList.remove('activeSwitch')
    switch2.classList.remove('activeSwitch')
    switch1.classList.add('activeSwitch')
    mBody.classList.remove('s2Back');
    mMain.classList.remove('s2Main');
    mBody.classList.remove('s3Back');
    mMain.classList.remove('s3Main');
    mBody.classList.add('s1Back');
    mMain.classList.add('s1Main');
})
switch3.addEventListener('click', () => {
    switch1.classList.remove('activeSwitch')
    switch2.classList.remove('activeSwitch')
    switch3.classList.add('activeSwitch')
    mBody.classList.remove('s1Back');
    mMain.classList.remove('s1Main');
    mBody.classList.remove('s2Back');
    mMain.classList.remove('s2Main');
    mBody.classList.add('s3Back');
    mMain.classList.add('s3Main');
})