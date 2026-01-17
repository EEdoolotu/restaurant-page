export function loadContact() {
    const content = document.getElementById('content');
    
    const headline = document.createElement('h1');
    headline.textContent = "Contact Us";

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-container');

    const phone = document.createElement('p');
    phone.textContent = "📞 Phone: 555-555-ODIN";

    const address = document.createElement('p');
    address.textContent = "📍 Address: 123 Webpack Way, Internet City";

    const email = document.createElement('p');
    email.textContent = "✉️ Email: hello@odinrestaurant.com";

    contactInfo.appendChild(phone);
    contactInfo.appendChild(address);
    contactInfo.appendChild(email);

    content.appendChild(headline);
    content.appendChild(contactInfo);
}