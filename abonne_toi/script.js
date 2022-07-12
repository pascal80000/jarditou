// Un script permettant qu'à l'événement 'clic' sur le bouton, le bouton change de style et de contenu.

// Je sélectionne et je stock mon premier élément .btn
var btnButton = document.querySelector('.btn');
console.log(btnButton);
// Au click de mon btn : 
btnButton.addEventListener('click', function(){
    // La méthode toggle() (qui signifie basculer en anglais) alterne les états "true"<=>"false"
    // Je sélectionne ma class .abonne: 
    btnButton.classList.toggle('abonne');
    
    // J'ajoute une condition qui change le contenu (le texte) de mon btn
    if(btnButton.innerText === "Abonné"){
        btnButton.innerText = "Abonnez-vous";
    }else{
        btnButton.innerText = "Abonné";
    };
});