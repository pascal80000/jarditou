// ATTENTION aux variables LOCALES ou GLOBALES
// si variable locale, càd définie par "var" DANS une fonction, 
// elle n'est utilisable que dans cette fonction !



// Exercice 9.1

var F = ("");


function produit(x,y)
{
    return (x*y);
}





let x = window.prompt("Entrer première valeur:");
        console.log("entrée de x:",x);
let y = window.prompt("Entrer seconde valeur:");
        console.log("entrée de y:",y);
let resultat = produit(x,y);
        console.log("le produit est:",resultat);



//========================================================
//=============  affichage image  ========================
//========================================================




function affichImg(image)
{



        document.getElementById("image").textContent='<img src="../images/'+(F)+'" id = "image" title="image papillon" alt ="image de papillon">';
        // //document.write(image)

}
window.prompt("Entrer le nom du fichier image à ouvrir:",F);


affichImg(F);

