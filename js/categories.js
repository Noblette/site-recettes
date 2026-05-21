/* ============================================
   CATEGORIES.JS — Logique propre à la page catégories
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
});

function renderCategories() {
  const grid = document.getElementById('categories-grid');
  if (!grid) return;
  grid.innerHTML = categories.map(c => `
    <div class="cat-card-big" onclick="window.location='recettes.html?cat=${c.id}'">
      <img src="${c.img}" alt="${c.name}" loading="lazy" onerror="this.style.display='none'"/>
      <div class="cat-overlay"></div>
      <div class="cat-content">
        <h3>${c.icon} ${c.name}</h3>
        <p>${c.count} recettes disponibles</p>
      </div>
    </div>
  `).join('');
}
