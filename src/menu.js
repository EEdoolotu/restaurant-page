export function loadMenu() {
    const content = document.getElementById('content');
    const headline = document.createElement('h1');
    headline.textContent = "Our Menu";

    const menuList = document.createElement('ul');

    const menuItems = [
    {
        name: "Async Apple Pie",
        price: "$8",
        description: "A classic dessert that loads perfectly every time."
    },
    {
        name: "Callback Carbonara",
        price: "$18",
        description: "Rich, creamy, and guaranteed to return a delicious result."
    },
    // To add more, just copy/paste a block below:
    {
        name: "JSON Jambalaya",
        price: "$22",
        description: "A spicy mix of structured data and bold flavors."
    }
    ];

    menuItems.forEach(item => {
        const card = createMenuCard(item.name, item.price, item.description)

        menuList.appendChild(card)
    })


    content.appendChild(headline);
    content.appendChild(menuList);
}

function createMenuCard(name, price, description) {
    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');

    const card = document.createElement("div")
    card.classList.add("menu-card")

    const title = document.createElement("h3")
    title.textContent = name

    const cost = document.createElement("span")
    cost.classList.add("price")
    cost.textContent = price

    const details = document.createElement("p")
    details.textContent = description

    card.appendChild(title)
    card.appendChild(cost)
    card.appendChild(details)
    menuGrid.appendChild(card)

    return menuGrid;

}