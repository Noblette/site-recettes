/* ============================================
   GLOBAL.JS — Fonctions partagées sur toutes les pages
   ============================================ */

// ---- Données communes ----
const IMAGES = {
  hero:       "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1400&q=80",
  poulet:     "https://media.istockphoto.com/id/2158539059/photo/sunday-roast-chicken-with-potatoes-holiday-meal.jpg?s=2048x2048&w=is&k=20&c=a0dUTT6KwfoVENj-0WS2gTlex7y0ML35bYkUFuE6HVw=",
  tatin:      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
  minestrone: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
  cesar:      "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=600&q=80",
  pancakes:   "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
  mojito:     "https://images.unsplash.com/photo-1571104508999-893933ded431?w=600&q=80",
  petitdej:   "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80",
  plats:      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  desserts:   "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80",
  salades:    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
  soupes:     "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&q=80",
  boissons:   "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
  apropos:    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
};

const recipes = [
  { id:1, name:"Poulet Rôti aux Herbes",    desc:"Un classique revisité avec des herbes fraîches du jardin et un jus savoureux.", category:"plats",          time:"1h30",  servings:4, difficulty:"Moyen",  rating:4.8, img:IMAGES.poulet,
    ingredients:[{n:"Poulet fermier",q:"1.5 kg"},{n:"Beurre doux",q:"80 g"},{n:"Ail",q:"6 gousses"},{n:"Thym frais",q:"5 branches"},{n:"Romarin",q:"3 branches"},{n:"Huile d'olive",q:"3 c.s."},{n:"Citron",q:"1"},{n:"Sel & poivre",q:"À goût"}],
    steps:[{t:"Préparer",d:"Sortir le poulet 30 min avant. Préchauffer le four à 200°C. Sécher avec du papier absorbant."},{t:"Assaisonner",d:"Mélanger le beurre ramolli avec l'ail écrasé, thym et romarin. Glisser sous la peau."},{t:"Cuire",d:"Arroser d'huile d'olive, saler, poivrer. Enfourner 1h15 en arrosant toutes les 20 min."},{t:"Reposer",d:"Laisser reposer 15 min avant de découper. Servir avec le jus de cuisson."}]},
  { id:2, name:"Tarte Tatin aux Pommes",    desc:"La tarte renversée française par excellence, caramélisée à la perfection.",   category:"desserts",       time:"55 min", servings:6, difficulty:"Moyen",  rating:4.9, img:IMAGES.tatin,
    ingredients:[{n:"Pommes Golden",q:"1.2 kg"},{n:"Sucre en poudre",q:"150 g"},{n:"Beurre demi-sel",q:"80 g"},{n:"Vanille",q:"1 gousse"},{n:"Pâte brisée",q:"1 rouleau"}],
    steps:[{t:"Caramel",d:"Faire fondre le beurre avec le sucre jusqu'à obtenir un caramel doré."},{t:"Pommes",d:"Éplucher, couper en quartiers, disposer serrés dans le caramel chaud."},{t:"Recouvrir",d:"Poser la pâte dessus, rentrer les bords, piquer à la fourchette."},{t:"Cuire & retourner",d:"Cuire 30 min à 200°C. Tiédir 5 min puis retourner sur un plat."}]},
  { id:3, name:"Soupe Minestrone",          desc:"Une soupe italienne généreuse, pleine de légumes et de saveurs méditerranéennes.", category:"soupes",      time:"45 min", servings:6, difficulty:"Facile", rating:4.7, img:IMAGES.minestrone,
    ingredients:[{n:"Tomates concassées",q:"400 g"},{n:"Haricots blancs",q:"240 g"},{n:"Courgette",q:"1"},{n:"Carottes",q:"2"},{n:"Pâtes courtes",q:"80 g"},{n:"Bouillon légumes",q:"1.5 L"},{n:"Basilic frais",q:"1 bouquet"}],
    steps:[{t:"Faire revenir",d:"Faire revenir oignon, carotte et céleri dans l'huile d'olive 5 min."},{t:"Légumes",d:"Incorporer les tomates, la courgette et le bouillon. Porter à ébullition."},{t:"Cuire",d:"Ajouter les haricots et les pâtes. Laisser mijoter 15 min."},{t:"Finition",d:"Rectifier l'assaisonnement, ajouter le basilic et un filet d'huile d'olive."}]},
  { id:4, name:"Salade César Revisitée",    desc:"La grande classique américaine avec une touche française et des croûtons maison.", category:"salades",    time:"20 min", servings:2, difficulty:"Facile", rating:4.6, img:IMAGES.cesar,
    ingredients:[{n:"Laitue romaine",q:"1 grande"},{n:"Poulet grillé",q:"200 g"},{n:"Parmesan",q:"60 g"},{n:"Pain de campagne",q:"2 tranches"},{n:"Anchois",q:"4 filets"},{n:"Jaune d'œuf",q:"1"},{n:"Moutarde",q:"1 c.c."}],
    steps:[{t:"Croûtons",d:"Couper le pain en cubes, dorer 10 min au four à 180°C avec de l'huile."},{t:"Sauce César",d:"Mixer anchois, jaune d'œuf et moutarde. Incorporer l'huile pour émulsionner."},{t:"Assembler",d:"Laitue + poulet + croûtons + sauce + copeaux de parmesan."}]},
  { id:5, name:"Pancakes Moelleux",         desc:"Des pancakes américains ultra-moelleux, parfaits pour un brunch en famille.",    category:"petit-dejeuner", time:"25 min", servings:4, difficulty:"Facile", rating:4.8, img:IMAGES.pancakes,
    ingredients:[{n:"Farine",q:"200 g"},{n:"Lait entier",q:"250 ml"},{n:"Œufs",q:"2"},{n:"Sucre",q:"30 g"},{n:"Levure chimique",q:"1 sachet"},{n:"Beurre fondu",q:"40 g"},{n:"Extrait de vanille",q:"1 c.c."}],
    steps:[{t:"Pâte sèche",d:"Mélanger farine, sucre et levure dans un grand bol."},{t:"Liquides",d:"Battre les œufs avec le lait, le beurre fondu et la vanille."},{t:"Incorporer",d:"Verser les liquides sur les poudres, mélanger sans trop travailler."},{t:"Cuire",d:"2-3 min de chaque côté dans une poêle beurrée chaude."}]},
  { id:6, name:"Mojito Menthe-Citron Vert", desc:"Le cocktail cubain rafraîchissant, version sans alcool ou avec rhum.",           category:"boissons",      time:"10 min", servings:2, difficulty:"Facile", rating:4.9, img:IMAGES.mojito,
    ingredients:[{n:"Citrons verts",q:"3"},{n:"Menthe fraîche",q:"1 bouquet"},{n:"Sucre de canne",q:"4 c.c."},{n:"Eau gazeuse",q:"400 ml"},{n:"Glaçons",q:"Généreusement"},{n:"Rhum blanc (opt.)",q:"6 cl"}],
    steps:[{t:"Citronner",d:"Presser les citrons. Garder quelques tranches pour la décoration."},{t:"Piler",d:"Mettre sucre, menthe et jus dans le verre. Piler légèrement."},{t:"Monter",d:"Ajouter glaçons, rhum si désiré, puis l'eau gazeuse bien froide."},{t:"Décorer",d:"Garnir de menthe fraîche et d'une tranche de citron vert."}]},
];

const categories = [
  { id:"petit-dejeuner", name:"Petit-déjeuner",   count:12, img:IMAGES.petitdej,   icon:"☀️", color:"#f59e0b", bg:"rgba(245,158,11,0.1)" },
  { id:"plats",          name:"Plats principaux",  count:28, img:IMAGES.plats,      icon:"🍽️", color:"#f97316", bg:"rgba(249,115,22,0.1)" },
  { id:"desserts",       name:"Desserts",          count:19, img:IMAGES.desserts,   icon:"🍰", color:"#ec4899", bg:"rgba(236,72,153,0.1)" },
  { id:"salades",        name:"Végétarien",        count:15, img:IMAGES.salades,    icon:"🥗", color:"#22c55e", bg:"rgba(34,197,94,0.1)"  },
  { id:"soupes",         name:"Soupes",            count:10, img:IMAGES.soupes,     icon:"🍲", color:"#ef4444", bg:"rgba(239,68,68,0.1)"  },
  { id:"boissons",       name:"Boissons",          count:8,  img:IMAGES.boissons,   icon:"🥤", color:"#8b5cf6", bg:"rgba(139,92,246,0.1)" },
];

// ---- Favoris ----
function getFavs() { try { return JSON.parse(localStorage.getItem('tasty_favs') || '[]'); } catch(e) { return []; } }
function saveFavs(favs) { try { localStorage.setItem('tasty_favs', JSON.stringify(favs)); } catch(e) {} }
function toggleFav(e, id) {
  e.stopPropagation();
  let favs = getFavs();
  if (favs.includes(id)) { favs = favs.filter(f => f !== id); showToast('Retiré des favoris'); }
  else { favs.push(id); showToast('🔖 Ajouté aux favoris !'); }
  saveFavs(favs);
  return favs;
}

// ---- Toast ----
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2600);
}

// ---- Générer une card recette ----
function recipeCardHTML(r, i = 0) {
  const favs = getFavs();
  return `
    <div class="recipe-card fade-in" style="animation-delay:${i*0.07}s" onclick="window.location='/pages/recette.html?id=${r.id}'">
      <div class="recipe-card-img">
        <img src="${r.img}" alt="${r.name}" loading="lazy" onerror="this.style.display='none'"/>
        <button class="card-bookmark ${favs.includes(r.id)?'active':''}" onclick="handleFav(event,${r.id},this)">🔖</button>
        <div class="card-rating"><span>★</span> ${r.rating}</div>
      </div>
      <div class="recipe-card-body">
        <h3>${r.name}</h3>
        <div class="card-meta">
          <span>⏱ ${r.time}</span>
          <span>📊 ${r.difficulty}</span>
        </div>
      </div>
    </div>`;
}

function handleFav(e, id, btn) {
  toggleFav(e, id);
  btn.classList.toggle('active');
}

// ---- Navbar mobile ----
function initMobileNav() {
  const ham = document.getElementById('hamburger');
  const mn  = document.getElementById('mobileNav');
  const cls = document.getElementById('mobileNavClose');
  if (ham) ham.onclick = () => mn.classList.add('open');
  if (cls) cls.onclick = () => mn.classList.remove('open');
}

// ---- Newsletter ----
function initNewsletter() {
  document.querySelectorAll('.nl-form').forEach(f => {
    f.onsubmit = e => { e.preventDefault(); const inp = f.querySelector('input'); if (inp && inp.value) { showToast('🎉 Abonnement confirmé !'); inp.value = ''; } };
  });
}

// ---- Marquer le lien actif ----
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') && a.getAttribute('href').includes(page)) a.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', () => { initMobileNav(); initNewsletter(); setActiveNav(); });
