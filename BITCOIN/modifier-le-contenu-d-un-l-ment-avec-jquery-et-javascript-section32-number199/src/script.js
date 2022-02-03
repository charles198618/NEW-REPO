// Avec JavaScript
document.querySelector('h1').textContent = 'Bonjour avec JavaScript';
// document.querySelectorAll('p').textContent = 'Ceci est un paragraphe'; impossible
document.querySelector('.maClass').innerHTML = '<p><b>HTML modifié</b></p>';

// Avec jQuery
$('h1').text('Bonjour avec jQuery');
// $('p').text('Ceci est un paragraphe');
$('.maClass').html('<p><b>HTML modifié avec jQuery</b></p>');
