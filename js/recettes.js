/* ============================================
   RECETTES.JS — Logique propre à la page recettes
   ============================================ */
let currentFilter = 'tous';

document.addEventListener('DOMContentLoaded', () => {
  // Lire le filtre depuis l'URL (?cat=desserts)
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get('cat');
  if (catParam) {
    currentFilter = catParam;
    const chip = document.querySelector(`.chip[data-cat="${catParam}"]`);
    if (chip) { document.querySelectorAll('.chip').forEach(c => c.classList.remove('active')); chip.classList.add('active'); }
  }

  renderRecipes();
  initFilters();
  initSearch();
});

function renderRecipes(filter = currentFilter, search = '') {
  const grid = document.getElementById('recipes-grid');
  const count = document.getElementById('results-count');
  if (!grid) return;

  let list = recipes;
  if (filter && filter !== 'tous') list = list.filter(r => r.category === filter);
  if (search) list = list.filter(r => r.name.toLowerCase().includes(search.toLowerCase()) || r.desc.toLowerCase().includes(search.toLowerCase()));

  if (count) count.innerHTML = `<strong>${list.length}</strong> recette${list.length > 1 ? 's' : ''} trouvée${list.length > 1 ? 's' : ''}`;

  if (!list.length) {
    grid.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><h3>Aucun résultat</h3><p>Essayez un autre terme ou filtre</p></div>`;
    return;
  }
  grid.innerHTML = list.map((r, i) => recipeCardHTML(r, i)).join('');
}

function initFilters() {
  document.querySelectorAll('.chip').forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilter = chip.dataset.cat;
      renderRecipes(currentFilter, document.getElementById('search-input')?.value || '');
    };
  });
}

function initSearch() {
  const input = document.getElementById('search-input');
  if (input) input.oninput = () => renderRecipes(currentFilter, input.value);
}
