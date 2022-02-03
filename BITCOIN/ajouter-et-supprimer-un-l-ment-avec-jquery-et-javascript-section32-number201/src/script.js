// Avec JavaScript
document.querySelector('h1').prepend('Oh : ');
document.querySelector('h1').append(' !');
document.querySelectorAll('p');

// Avec jQuery
$('h1').before("<div>Hello</div>"); // Ajoute un élément avant
$('h1').after("<div>World</div>"); // Ajouter un élément après
$('h1').prepend('Oh : '); // Ajouter un élément devant
$('h1').append(' !'); // Ajouter un élément derrière
$('p').remove();