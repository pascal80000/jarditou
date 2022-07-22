
// ATTENTION aux variables LOCALES ou GLOBALES
// si variable locale, càd définie par var, 
// elle n'est utilisable que dans une fonction

onload (GetInteger);





//  =======================================
//  ======      les fonctions       =======
//  =======================================   

function GetInteger(){
    var TAILLE = window.prompt("Entrer une taille de tableau :");
    InitTab;
    SaisieTab;

}


function InitTab(){
    let T = parseInt(TAILLE);
    var TAB = new Array(T);
}


function SaisieTab(){
    for (let i = 0; i < (T); i++)
        console.log(i);
        TAB[i] = window.prompt(`Entrer valeur ${i}`);
}


function AfficheTab(){
    for (let i = 0; i < (T); i++)
        console.log(i);
        document.write("poste",i,"= :",TAB(i),("<br/>"));  
}



function RechercheTab(){
    
}


function InfoTab(){

}

















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

