export function loadMenu() {
    const content = document.getElementById('content');
    const headline = document.createElement('h1');
    headline.textContent = "Our Menu";

    const menuList = document.createElement('ul');
    const items = [
        "Async Apple Pie - $8",
        "Callback Carbonara - $18",
        "Promise Pizza - $22",
        "Syntax Soup - $10"
    ];
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        menuList.appendChild(li);
    });

    content.appendChild(headline);
    content.appendChild(menuList);
}