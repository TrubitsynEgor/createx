import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


const goTop = document.querySelector('.footer__copyright-btn');
goTop.addEventListener('click', () => window.scroll({ top: 0, left: 0, behavior: 'smooth' }))


