import { resolve } from '../../webpack.common';
import '../css/image-carousel.styles.css';
import defaultImage from '../assets/defaultImage.png';

export function imageCarousel() {
    let focusedImage = 0;
    const element = createElement();
    const imageHolder = createElement();
    const images = imageHolder.children;
    const controlHolder = createElement();
    const imageButtonContainer = createElement();
    element.classList.add('image-carousel');
    layItOut();
    setInterval(nextImage, 5000);

    function getElement() {
        return element;
    }

    function layItOut() {
        cleanElement(imageHolder);
        cleanElement(controlHolder);
        populateControlButtons();
        element.appendChild(imageHolder);
        element.appendChild(controlHolder);
    }

    function createElement() {
        const element = document.createElement('div');
        return element;
    }

    function addImage(image: string) {
        createImageButton(images.length);
        addImageToImageHolder(image);
        showImage(focusedImage);
    }

    function nextImage() {
        if (images.length > 0 && imageHolder.children.length > 0) {
            const nxtIdx = (focusedImage + 1) % images.length;
            navToImage(nxtIdx);
        }
    }

    function prevImage() {
        if (images.length > 0 && imageHolder.children.length > 0) {
            const nxtIdx = (focusedImage - 1 + images.length) % images.length;
            navToImage(nxtIdx);
        }
    }

    function hideImage(imgIdx: number) {
        imageHolder.children[imgIdx].classList.add('hide');
    }

    function showImage(imgIdx: number) {
        console.log(imgIdx);
        imageHolder.children[imgIdx].classList.remove('hide');
    }

    function cleanElement(element: HTMLElement) {
        while (element.firstChild) element.removeChild(element.firstChild);
    }

    function addImageToImageHolder(image: string) {
        const imgElement = createImageElement(image);
        imgElement.classList.add('hide');
        imageHolder.appendChild(imgElement);
    }

    function createImageElement(image: string): HTMLImageElement {
        const imgElement = new Image();
        imgElement.onload = () => {};
        imgElement.onerror = () => (imgElement.src = defaultImage);
        imgElement.src = image;
        return imgElement;
    }

    function populateControlButtons() {
        const nextButton = document.createElement('button');
        const prevButton = document.createElement('button');

        nextButton.textContent = 'next';
        prevButton.textContent = 'prev';

        nextButton.addEventListener('click', nextImage);
        prevButton.addEventListener('click', prevImage);

        controlHolder.appendChild(nextButton);
        controlHolder.appendChild(imageButtonContainer);
        controlHolder.appendChild(prevButton);

        for (let i = 0; i < images.length; i++) createImageButton(i);
    }

    function createImageButton(imageIdx: number) {
        const imgButton = document.createElement('button');
        imgButton.classList.add('image-button');
        imgButton.addEventListener('click', () => navToImage(imageIdx));
        imageButtonContainer.appendChild(imgButton);
    }

    function navToImage(idx: number) {
        hideImage(focusedImage);
        focusedImage = idx;
        showImage(focusedImage);
    }

    return {
        getElement,
        addImage,
    };
}
