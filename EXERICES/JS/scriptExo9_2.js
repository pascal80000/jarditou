// Exercice 9_2

//==========================================
//====         les variables            ====
//==========================================

var str1 = "";          // contiendra la liste
var str2 = "";          // contiendra le signe séparateur
var n = 0;              // sera saisi pour recherche d'index
chaine = new Array();   // contiendra le split
var nom = "";           // contiendra le résultar de la fonction
//var l = 0;


//==========================================
//====          les entrées             ====
//==========================================


        var str1 = prompt("saisir la liste de noms, séparés par un signe ");
                document.write('<br/>'+"_ str1= ",str1);

        var str2 = prompt("Entrer le signe séparateur");
               document.write('<br/>'+"_ str2= ",str2);

        var n = prompt("Entrer l'index à rechercher : ");
                document.write('<br/>'+"_  n == ",n,'<br/>');




//==========================================
//====      la fonction strtok()        ====
//==========================================


        function strtok(chaine, str2,n){

                chaine = str1.split([str2]);
                        console.log("chaine = ",chaine);

                L = chaine.length;
                        console.log("chaine comporte ",L," mots détectés.");

                //document.write("Le nom de rang ",n," dans la chaîne str1 est:",nom);

                while (chaine.indexOf(p) < n)
                {
                        p++;
                        chaine.shift();
                }

                        console.log("La position du mot est: ",p,"<br/>");

                



                return;

}       //========= FIN  Fonction  ==============



strtok(chaine, str2,n);

document.write(chaine);



