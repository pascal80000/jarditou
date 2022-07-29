// ATTENTION aux variables LOtCALES ou GLOBALES
// si variable locale, càd définie VAR var DANS une fonction, 
// elle n'est utilisable que dans cette fonction

                            //========================================
//var TAILLE = 0;             // définition des variables GLOBALES    ==
var T = 0;                  //========================================
var n = 0;
//var TAB = new Array;    défini dans la fonction initTab
var MOT = "";



GetInteger();



                            //  =======================================
                            //  ======      les fonctions       =======
                            //  =======================================   

function GetInteger()
    {
    T = window.prompt("Entrer une taille de tableau :");
    InitTab;
    SaisieTab;
        console.log("GetInteger passée");
    }


function InitTab()
    {
    var TAB = new Array(T);
        console.log("Tableau créé, taille =  ",T);
    }


function SaisieTab()
    {
    for (let i = 0; i < (T); i++)
        console.log(i);
        TAB[i] = window.prompt(`Entrer valeur ${i}`);
    }


function AfficheTab()
    {
    for (let i = 0; i < (T); i++)
        console.log(i);
        document.write("poste",i,"= :",TAB(i),("<br/>"));  
    }



//function RechercheTab(){} ============(affectée au bouton 2)


function InfoTab()  //==== Calcul du maximum et de la moyenne des postes
    {

    }






//==========================================
//====      la fonction RechercheTab    ====
//==========================================

function RechercheTab(n)
{
        TAB.splice(0,(n));                              //====          coupe les 'n' premiers caractères à partir du 'zero'

        let MOT = TAB.shift();                          //====          shift renvoie le premier terme du tableau, et le supprime du même tableau
                console.log("MOT = ",MOT);
        return;


}       
//====      FIN  Fonction               ====



//====      affichage du résultat   ====
document.write('<br/>',"Le ",n," ième mot de la chaine ",TAB," est (",MOT,") voilà, c'est fini !");









                            //  =======================================
                            //  ======      les boutons       =========
                            //  =======================================   


var btn1 = document.createElement("BUTTON");        // Créer un élément <button>
var t = document.createTextNode("Tableau");         // Créer un noeud textuel
btn1.appendChild(t);                                // Ajouter le texte au bouton
document.body.appendChild(btn1);                    // Ajoute la balise <button> à la balise <body>

        btn1.addEventListener("click",clickbtn1);
        function clickbtn1()
        {
            console.log("bouton1");
            AfficheTab()
        }



var btn2 = document.createElement("BUTTON");
var t = document.createTextNode("Index");
btn2.appendChild(t);
document.body.appendChild(btn2);

        btn2.addEventListener("click",clickbtn2);
        function clickbtn2()
        {
            console.log("bouton2");
            n = window.prompt("Entrer le num d'index : ");
            RechercheTab(n);
        }


var btn3 = document.createElement("BUTTON");
var t = document.createTextNode("Moy Max");
btn3.appendChild(t);
document.body.appendChild(btn3);

        btn3.addEventListener("click",clickbtn3);
        function clickbtn3()
        {
            console.log("bouton3");

        }
