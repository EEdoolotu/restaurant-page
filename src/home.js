import RestaurantImg from './odin.png';

export function loadHome() {
    const content = document.getElementById('content');
    
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to The Odin Restaurant";
    
    const myImage = new Image();
    myImage.src = RestaurantImg;
    myImage.style.width = '100px';

    const description = document.createElement('p');
    description.textContent = "We specialize in artisan code and gourmet pixels. Everything is made fresh from scratch using the finest JavaScript.";

    content.appendChild(headline);
    content.appendChild(myImage);
    content.appendChild(description);
}