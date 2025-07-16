import Inventory from "./Inventory.js";
import Sweet from "./Sweet.js";

const inventory = new Inventory();

// Added all the Elements
const addForm = document.getElementById("addSweetForm");
const sweetList = document.getElementById("sweetList");
const searchInput = document.getElementById("searchInput");
const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");

// Loader: show for 1.5s before showing the app
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    const main = document.getElementById("mainContent");

    if (loader && main) {
      loader.style.display = "none";
      main.style.display = "block";
    } else {
      console.error("Loader or mainContent element not found!");
    }
  }, 1500);
});

// RENDER SWEETS
function renderSweets(sweets = inventory.viewSweets()) {
  sweetList.innerHTML = "";

  if (sweets.length === 0) {
    sweetList.innerHTML = "<p>No sweets found.</p>";
    return;
  }

  sweets.forEach((sweet) => {
    const card = document.createElement("div");
    card.className = "sweet-card";

    card.innerHTML = `
        <h3>${sweet.name}</h3>
        <p><strong>ID:</strong> ${sweet.id}</p>
        <p><strong>Category:</strong> ${sweet.category}</p>
        <p><strong>Price:</strong> ₹${sweet.price}</p>
        <p><strong>Quantity:</strong> ${sweet.quantity}</p>
        <div class="card-buttons">
          <button class="delete">Delete</button>
          <button class="purchase">Purchase</button>
          <button class="restock">Restock</button>
        </div>
      `;

    // Delete Sweet
    card.querySelector(".delete").addEventListener("click", () => {
      inventory.deleteSweet(sweet.id);
      renderSweets();
    });

    // Purchase Sweet
    card.querySelector(".purchase").addEventListener("click", () => {
      const qty = prompt("How many units to purchase?");
      if (qty && !isNaN(qty)) {
        try {
          inventory.purchaseSweet(sweet.id, parseInt(qty));
          renderSweets();
        } catch (e) {
          alert(e.message);
        }
      }
    });

    // Restock Sweet
    card.querySelector(".restock").addEventListener("click", () => {
      const qty = prompt("How many units to restock?");
      if (qty && !isNaN(qty)) {
        try {
          inventory.restockSweet(sweet.id, parseInt(qty));
          renderSweets();
        } catch (e) {
          alert(e.message);
        }
      }
    });

    sweetList.appendChild(card);
  });
}

// APPLY FILTERS
function applyFilters() {
  const query = searchInput.value.toLowerCase();
  const min = parseFloat(minPriceInput.value);
  const max = parseFloat(maxPriceInput.value);

  const filtered = inventory.viewSweets().filter((s) => {
    const matchesText =
      s.name.toLowerCase().includes(query) ||
      s.category.toLowerCase().includes(query);

    const matchesMin = isNaN(min) || s.price >= min;
    const matchesMax = isNaN(max) || s.price <= max;

    return matchesText && matchesMin && matchesMax;
  });

  renderSweets(filtered);
}

// ADD SWEET
addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = parseInt(document.getElementById("sweetId").value);
  const name = document.getElementById("sweetName").value.trim();
  const category = document.getElementById("sweetCategory").value.trim();
  const price = parseFloat(document.getElementById("sweetPrice").value);
  const quantity = parseInt(document.getElementById("sweetQuantity").value);

  if (!id || !name || !category || isNaN(price) || isNaN(quantity)) {
    alert("Please fill all fields correctly.");
    return;
  }

  const sweet = new Sweet(id, name, category, price, quantity);
  inventory.addSweet(sweet);

  addForm.reset();
  renderSweets();
});

// LISTEN TO SEARCH / FILTER
searchInput.addEventListener("input", applyFilters);
minPriceInput.addEventListener("input", applyFilters);
maxPriceInput.addEventListener("input", applyFilters);

// INITIAL RENDER
renderSweets();
