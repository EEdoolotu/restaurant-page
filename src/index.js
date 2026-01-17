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

loadHome();