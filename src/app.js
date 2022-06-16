import "./styles/app.scss";

document.addEventListener('DOMContentLoaded', () => {
  

})

window.addEventListener('load', () => {

  document.querySelector('.body').classList.remove('no-transition');

  document.querySelector('.plug-page__logo').classList.add('loaded');

  setTimeout(() => {

    document.querySelector('.plug-page__top').classList.add('loaded');
    document.querySelector('.plug-page__bottom').classList.add('loaded');

  }, 600);

  setTimeout(() => {

    document.querySelector('.balloon.b2').classList.add('start');
    
  }, 5000);

})
