"use strict";
exports.__esModule = true;
exports.imageCarousel = void 0;
require("../css/image-carousel.styles.css");
var defaultImage_png_1 = require("../assets/defaultImage.png");
function imageCarousel() {
    var focusedImage = 0;
    var element = createElement();
    var imageHolder = createElement();
    var images = imageHolder.children;
    var controlHolder = createElement();
    var imageButtonContainer = createElement();
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
        var element = document.createElement('div');
        return element;
    }
    function addImage(image) {
        createImageButton(images.length);
        addImageToImageHolder(image);
        showImage(focusedImage);
    }
    function nextImage() {
        if (images.length > 0 && imageHolder.children.length > 0) {
            var nxtIdx = (focusedImage + 1) % images.length;
            navToImage(nxtIdx);
        }
    }
    function prevImage() {
        if (images.length > 0 && imageHolder.children.length > 0) {
            var nxtIdx = (focusedImage - 1 + images.length) % images.length;
            navToImage(nxtIdx);
        }
    }
    function hideImage(imgIdx) {
        imageHolder.children[imgIdx].classList.add('hide');
        imageButtonContainer.children[imgIdx].classList.remove('focused-button');
    }
    function showImage(imgIdx) {
        imageHolder.children[imgIdx].classList.remove('hide');
        imageButtonContainer.children[imgIdx].classList.add('focused-button');
    }
    function cleanElement(element) {
        while (element.firstChild)
            element.removeChild(element.firstChild);
    }
    function addImageToImageHolder(image) {
        var imgElement = createImageElement(image);
        imgElement.classList.add('hide');
        imageHolder.appendChild(imgElement);
    }
    function createImageElement(image) {
        var imgElement = new Image();
        imgElement.onload = function () { };
        imgElement.onerror = function () { return (imgElement.src = defaultImage_png_1["default"]); };
        imgElement.src = image;
        return imgElement;
    }
    function populateControlButtons() {
        var nextButton = document.createElement('button');
        var prevButton = document.createElement('button');
        nextButton.textContent = 'next';
        prevButton.textContent = 'prev';
        nextButton.classList.add('btn');
        prevButton.classList.add('btn');
        nextButton.addEventListener('click', nextImage);
        prevButton.addEventListener('click', prevImage);
        controlHolder.appendChild(prevButton);
        controlHolder.appendChild(imageButtonContainer);
        controlHolder.appendChild(nextButton);
        for (var i = 0; i < images.length; i++)
            createImageButton(i);
    }
    function createImageButton(imageIdx) {
        var imgButton = document.createElement('button');
        imgButton.classList.add('image-button');
        imgButton.addEventListener('click', function () { return navToImage(imageIdx); });
        imageButtonContainer.appendChild(imgButton);
    }
    function navToImage(idx) {
        hideImage(focusedImage);
        focusedImage = idx;
        showImage(focusedImage);
    }
    return {
        getElement: getElement,
        addImage: addImage
    };
}
exports.imageCarousel = imageCarousel;
