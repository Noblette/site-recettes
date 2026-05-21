// Données des recettes en vedette
const featuredRecipes = [
    {
        title: "Poulet Basquaise",
        time: "45 min",
        difficulty: "Moyen"
    },
    {
        title: "Riz au Lait Vanillé",
        time: "30 min",
        difficulty: "Facile"
    },
    {
        title: "Salade Niçoise",
        time: "20 min",
        difficulty: "Facile"
    }
];

// Générer les cartes de recettes en vedette
function displayFeaturedRecipes() {
    const container = document.getElementById('featured-recipes');
    
    featuredRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <h3>${recipe.title}</h3>
            <p>⏱ ${recipe.time} • ${recipe.difficulty}</p>
            <a href="recipes.html" class="btn-primary" style="font-size: 0.9rem; padding: 8px 20px; margin-top: 15px;">Voir la recette</a>
        `;
        container.appendChild(card);
    });
}

// Menu mobile
document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedRecipes();

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});