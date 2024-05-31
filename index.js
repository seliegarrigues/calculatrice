//Sélectionne l'élément d'affichage de la calculatrice
const display = document.getElementById("display");

// Définit une fonction nommée clearDisplay.
function clearDisplay () {
    
    //définit le contenu textuel de l'élément display à '0'. 
    //Cela réinitialise l'affichage de la calculatrice pour afficher '0'
    display.textContent = '0'; 
}

// Définit une fonction nommée append qui prend un argument value.
function append(value) {

    //Vérifie si le contenu textuel actuel de l'élément display est '0'.
    if (display.textContent ==='0') {

        //Si l'affichage est '0', remplacez-le par la nouvelle valeur (value).
        display.textContent= value;


//Si l'affichage n'est pas '0', 
} else {
    
    //ajoutez la nouvelle valeur (value) à la fin du contenu textuel actuel de l'élément display.
        display.textContent += value
    }
}

//Définit une fonction nommée calculate.
function calculate () {

    //Utilise une instruction try pour tenter d'évaluer l'expression dans l'affichage en utilisant eval
    try {
        display.textContent = eval(display.textContent);

    } catch(e) {

        // Si une erreur se produit pendant l'évaluation (eval), l'instruction catch intercepte cette erreur
        // et définit le contenu textuel de l'élément display à 'expression invalid'.
        display.textContent = 'expression invalid'
    }
}

// Ajoute un écouteur d'événement pour détecter les pressions de touches du clavier 
// Lorsque l'utilisateur appuie sur une touche, 

//L'événement keydown est déclenché lorsqu'une touche du clavier est pressée.
//event.key contient la valeur de la touche qui a été pressée, par exemple '1', '+', 'Enter', etc.
document.addEventListener('keydown', event => { 

// extrait la valeur de la touche pressée à partir de l'objet event . Récupère la touche pressée et la stocke dans la constante key.
    const key = event.key;

    // Le tableau validKeys contient les touches que la calculatrice doit reconnaître comme valides.
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '=', 'Enter', 'Backspace', 'Escape'];

    //vérifie si la touche pressée est incluse dans le tableau 
    if (validKeys.includes(key)) {

        //Si la touche pressée est 'Escape', la fonction clearDisplay() est appelée.
        if (key === 'Escape') {
            clearDisplay();

      //Si la touche pressée est '=' ou 'Enter', la fonction calculate() est appelée.      
        } else if (key === '=' || key === 'Enter') {
            calculate();
     
          //Si la touche 'Backspace' est pressée, supprime le dernier caractère de l'affichage  
        } else if (key === 'Backspace') {
            display.textContent = display.textContent.slice(0, -1) || '0';
        } else {

           // Pour toutes les autres touches valides, ajoute la valeur de la touche à l'affichage 
            append(key);
        }
    }
});

//Le paramètre append est key car key contient la valeur de la touche pressée,
// qui est précisément ce que la fonction append doit ajouter à l'affichage de la calculatrice. 
//Utiliser key garantit que l'entrée de l'utilisateur est correctement traitée et affichée par la calculatrice.