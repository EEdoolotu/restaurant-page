import './styles.css';
import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadContact } from './contact'; // 1. Add this import

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

document.getElementById('home-btn').addEventListener('click', () => {
    clearContent();
    loadHome();
});

document.getElementById('menu-btn').addEventListener('click', () => {
    clearContent();
    loadMenu();
});

// 2. Add this event listener
document.getElementById('contact-btn').addEventListener('click', () => {
    clearContent();
    loadContact();
});

const navButtons = document.querySelectorAll("button") 

navButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        navButtons.forEach(btn => btn.classList.remove("active"))

        e.target.classList.add("active")
    })
})

const foot = document.querySelector("footer")
const footerText = document.createElement("p")

footerText.textContent = "Created by Ejiroghene for The Odin project"
foot.appendChild(footerText)

loadHome();