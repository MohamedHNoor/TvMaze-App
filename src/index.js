import './style.css';
import Logo from './assets/logo.png';

const logo = new Image();

const brand = document.querySelector('.logo');

logo.src = Logo;
brand.appendChild(logo);
