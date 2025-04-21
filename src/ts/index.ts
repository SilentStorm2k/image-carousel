import '../css/styles.css';
import i1 from '../assets/logo.png';
import i2 from '../assets/screenshot.gif';

console.log('hello world');

import { imageCarousel } from './image-carousel';

const carousel = imageCarousel();

carousel.addImage(i1);
carousel.addImage(i2);
carousel.addImage('some_invalid_path');

const body = document.querySelector('body');
body?.appendChild(carousel.getElement());
