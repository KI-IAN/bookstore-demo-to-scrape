let allBooks = [];

function renderBooks(filterCategory = "all") {
    const container = document.getElementById("products");
    container.innerHTML = ""; // clear old books

    let filtered = allBooks;
    if (filterCategory !== "all") {
        filtered = allBooks.filter(book => book.category === filterCategory);
    }

    filtered.forEach(book => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
  <img src="${book.image}" alt="${book.title}">
  <h3>${book.title}</h3>
  <p class="price">$${book.price.toFixed(2)}</p>
  <p class="rating">${"⭐".repeat(book.rating)}</p>
  <p class="category">${book.category}</p>
`;
        container.appendChild(div);
    });
}

fetch("./books.json")
    .then(res => res.json())
    .then(data => {
        allBooks = data;
        renderBooks();

        // attach dropdown filter
        document.getElementById("category").addEventListener("change", (e) => {
            renderBooks(e.target.value);
        });
    });