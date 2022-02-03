// Avec JavaScript
document.querySelector('h1').style.color = 'orange';
document.querySelector('h1').style.color; // renvoie la valeur de color
document.querySelector('#monId').className = 'important';
// Supprimer une seule classe sans supprimer les autres ? Impossible
// document.querySelectorAll('p').style.color = 'green'; // ne fonctionne pas

// Avec jQuery
$('h1').css('color', 'orange');
$('h1').css('color'); // renvoie la valeur de color
$('#monId').addClass('important'); // ajoute une classe
$('#monId').removeClass('important'); // supprime une classe
$('p').css('color', 'green');