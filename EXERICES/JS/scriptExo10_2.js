// ATTENTION aux variables LOCALES ou GLOBALES
// si variable locale, càd définie VAR var DANS une fonction, 
// elle n'est utilisable que dans cette fonction

                            //========================================
var TAILLE = Number;        // définition des variables GLOBALES    ==
var T = Number;             //========================================



GetInteger();

                            //  =======================================
                            //  ======      les fonctions       =======
                            //  =======================================   

function GetInteger(){
    TAILLE = window.prompt("Entrer une taille de tableau :");
    InitTab;
    SaisieTab;
        console.log("GetInteger passée");

}


function InitTab(){
    let T = parseInt(TAILLE);
    var TAB = new Array(T);
    console.log("InitTab passée"+(TAILLE));

}


function SaisieTab(){
    for (let i = 0; i < (T); i++)
        console.log(i);
        TAB[i] = window.prompt(`Entrer valeur ${i}`);
}

/*
function AfficheTab(){
    for (let i = 0; i < (T); i++)
        console.log(i);
        document.write("poste",i,"= :",TAB(i),("<br/>"));  
}



function RechercheTab(){
    
}


function InfoTab(){

}



*/

                            //  =======================================
                            //  ======      les boutons       =========
                            //  =======================================   

var bouton1= document.getElementById("Id_btn1");
bouton1.addEventListener("click",clickbtn1);

    function clickbtn1(){

}


var bouton2= document.getElementById("Id_btn2");
bouton2.addEventListener("click",clickbtn2);

    function clickbtn2(){

}



var bouton3= document.getElementById("Id_btn3");
bouton3.addEventListener("click",clickbtn3);

    function clickbtn3(){

}

