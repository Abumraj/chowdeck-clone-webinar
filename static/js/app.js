/* ===== Cart State ===== */
let cart = JSON.parse(localStorage.getItem('chowdeck_cart') || '[]');
updateCartBadge();

/* ===== Render Helpers ===== */
function createProductCard(product) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return `
    <a href="product-detail.html?id=${product.id}" class="product-card">
      <div class="product-card-image" style="background: ${product.gradient}">
        ${discount ? `<span class="discount-badge">-${discount}%</span>` : ''}
        <span style="font-size:4rem; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.15))">${product.emoji}</span>
      </div>
      <div class="product-card-body">
        <div class="product-card-restaurant">${product.restaurant}</div>
        <div class="product-card-name">${product.name}</div>
        <div class="product-card-meta">
          <div class="product-card-price">
            ${formatPrice(product.price)}
            ${product.originalPrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
          </div>
          <div class="product-card-info">
            <span class="rating">⭐ ${product.rating}</span>
            <span>🕐 ${product.deliveryTime} min</span>
          </div>
        </div>
      </div>
    </a>
  `;
}

function renderProductGrid(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(createProductCard).join('');
}

function renderCategories(containerId, activeCategory = 'all') {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = categories.map(cat => `
    <button class="category-chip ${cat.id === activeCategory ? 'active' : ''}" data-category="${cat.id}">
      <span class="cat-emoji">${cat.emoji}</span> ${cat.name}
    </button>
  `).join('');

  container.querySelectorAll('.category-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      const filtered = cat === 'all' ? products : products.filter(p => p.category === cat);

      container.querySelectorAll('.category-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const gridId = containerId === 'categoriesHome' ? 'featuredGrid' : 'productsGrid';
      renderProductGrid(gridId, filtered);
      updateResultCount(filtered.length);
    });
  });
}

/* ===== Product Detail ===== */
function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = getProduct(id);

  if (!product) {
    document.getElementById('detailContent').innerHTML = '<p style="text-align:center;padding:80px 20px;font-size:1.2rem;">Product not found.</p>';
    return;
  }

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  document.title = `${product.name} – Chowdeck`;

  document.getElementById('breadcrumbName').textContent = product.name;

  document.getElementById('detailContent').innerHTML = `
    <div class="product-detail">
      <div class="product-detail-image" style="background: ${product.gradient}">
        <span style="filter: drop-shadow(0 8px 20px rgba(0,0,0,0.15))">${product.emoji}</span>
      </div>
      <div class="product-detail-info">
        <h1>${product.name}</h1>
        <div class="product-detail-restaurant">
          by <a href="products.html">${product.restaurant}</a>
        </div>
        <div class="product-detail-rating">
          <span class="stars">⭐ ${product.rating}</span>
          <span class="reviews">(${product.reviews} reviews)</span>
          <span class="delivery">🕐 ${product.deliveryTime} min delivery</span>
        </div>
        <div class="product-detail-price">
          ${formatPrice(product.price)}
          ${product.originalPrice ? `<span class="original">${formatPrice(product.originalPrice)}</span>` : ''}
          ${discount ? `<span style="background:#FF6B00;color:#fff;padding:4px 12px;border-radius:50px;font-size:0.8rem;margin-left:12px;font-weight:700;">-${discount}%</span>` : ''}
        </div>
        <p class="product-detail-desc">${product.description}</p>
        <div class="quantity-selector">
          <label>Quantity:</label>
          <div class="quantity-controls">
            <button onclick="changeQty(-1)">−</button>
            <span class="qty" id="qty">1</span>
            <button onclick="changeQty(1)">+</button>
          </div>
        </div>
        <button class="btn-add-to-cart" onclick="addToCart(${product.id})">
          🛒 Add to Cart – <span id="totalPrice">${formatPrice(product.price)}</span>
        </button>
      </div>
    </div>
  `;

  // Related products
  const related = getRelatedProducts(product, 4);
  renderProductGrid('relatedGrid', related);

  // Store current product for quantity updates
  window._currentProduct = product;
}

/* ===== Quantity ===== */
let currentQty = 1;
function changeQty(delta) {
  currentQty = Math.max(1, Math.min(20, currentQty + delta));
  const qtyEl = document.getElementById('qty');
  const priceEl = document.getElementById('totalPrice');
  if (qtyEl) qtyEl.textContent = currentQty;
  if (priceEl && window._currentProduct) {
    priceEl.textContent = formatPrice(window._currentProduct.price * currentQty);
  }
}

/* ===== Cart ===== */
function addToCart(productId) {
  const product = getProduct(productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += currentQty;
  } else {
    cart.push({ id: productId, qty: currentQty });
  }

  localStorage.setItem('chowdeck_cart', JSON.stringify(cart));
  updateCartBadge();
  showToast(`${product.name} added to cart!`);
  currentQty = 1;
}

function updateCartBadge() {
  const badge = document.getElementById('cartCount');
  if (badge) {
    const total = cart.reduce((sum, item) => sum + item.qty, 0);
    badge.textContent = total;
  }
}

/* ===== Toast ===== */
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

/* ===== Result Count ===== */
function updateResultCount(count) {
  const el = document.getElementById('resultCount');
  if (el) el.innerHTML = `Showing <strong>${count}</strong> items`;
}

/* ===== Sort ===== */
function setupSort() {
  const sortEl = document.getElementById('sortSelect');
  if (!sortEl) return;
  sortEl.addEventListener('change', () => {
    const activeChip = document.querySelector('.category-chip.active');
    const cat = activeChip ? activeChip.dataset.category : 'all';
    let filtered = cat === 'all' ? [...products] : products.filter(p => p.category === cat);

    switch (sortEl.value) {
      case 'price-low':  filtered.sort((a, b) => a.price - b.price); break;
      case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
      case 'rating':     filtered.sort((a, b) => b.rating - a.rating); break;
      case 'delivery':   filtered.sort((a, b) => parseInt(a.deliveryTime) - parseInt(b.deliveryTime)); break;
    }

    renderProductGrid('productsGrid', filtered);
  });
}
