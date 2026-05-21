/* ============================================
   RECETTE.JS — Logique propre à la page détail recette
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    document.querySelector('.detail-content').innerHTML = `<div style="text-align:center;padding:80px;color:var(--gray)"><h2>Recette introuvable</h2><a href="../pages/recettes.html" class="btn-primary" style="display:inline-flex;margin-top:20px">← Retour aux recettes</a></div>`;
    return;
  }

  // Hero
  document.getElementById('d-img').src = recipe.img;
  document.getElementById('d-img').alt = recipe.name;
  document.title = recipe.name + ' — Tasty Recipes';

  // Infos
  document.getElementById('d-name').textContent = recipe.name;
  document.getElementById('d-desc').textContent = recipe.desc;
  document.getElementById('d-time').textContent = recipe.time;
  document.getElementById('d-servings').textContent = recipe.servings + ' personnes';
  document.getElementById('d-difficulty').textContent = recipe.difficulty;
  document.getElementById('d-rating').textContent = recipe.rating + ' / 5 ★';

  // Ingrédients
  document.getElementById('d-ingredients').innerHTML = recipe.ingredients.map(i => `
    <div class="ingredient-row"><span>${i.n}</span><strong>${i.q}</strong></div>
  `).join('');

  // Étapes
  document.getElementById('d-steps').innerHTML = recipe.steps.map((s, i) => `
    <div class="step-item">
      <div class="step-num">${i + 1}</div>
      <div class="step-text"><h4>${s.t}</h4><p>${s.d}</p></div>
    </div>
  `).join('');

  // Suggestions (3 autres recettes)
  const others = recipes.filter(r => r.id !== id).slice(0, 3);
  document.getElementById('suggestions-grid').innerHTML = others.map((r, i) => recipeCardHTML(r, i)).join('');
});
