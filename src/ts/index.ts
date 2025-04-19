import '../css/styles.css';
import t1 from '../assets/1.jpg';
import t2 from '../assets/2.jpg';
import t3 from '../assets/3.jpg';
import t4 from '../assets/4.jpg';

console.log('hello world');

import { imageCarousel } from './image-carousel';

const carousel = imageCarousel();

carousel.addImage(t1);
carousel.addImage(t2);
carousel.addImage(t3);
carousel.addImage(t4);

const body = document.querySelector('body');
body?.appendChild(carousel.getElement());
