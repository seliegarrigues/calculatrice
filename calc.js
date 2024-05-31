document.addEventListener('DOMContentLoaded', etape1);

function etape1() {
    // Je sélectionne les éléments du DOM que je souhaite faire interagir
    let affich = document.getElementById("affichage");
    let buttons = document.querySelectorAll(".btn");
    let saisie = "";
    let resultatAffich = false;

    // Itère sur chaque élément de la NodeList 'buttons'
    buttons.forEach(button => {
        // Écoute l'événement 'click' à chaque bouton
        button.addEventListener('click', etapeBouton);

        function etapeBouton() {
            // Récupère la valeur de l'attribut 'data-value' du bouton cliqué
            let valeur = this.getAttribute('data-value');
            // Appelle la fonction 'clickBouton' avec la valeur récupérée
            clickBouton(valeur);
        };
    });

    // Écoute les événements pour les touches du clavier détecter les pressions du clavier
    document.addEventListener('keydown', etapeToucheClavier);

    function etapeToucheClavier(event) {
        let key = event.key;
        let validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '=', 'Enter', 'Backspace', 'Escape'];
        if (validKeys.includes(key)) {
            clickBouton(key);
        }
    };

    // Fonction pour gérer les clics de boutons et les valeurs entrées avec le clavier
    function clickBouton(valeur) {
        if (valeur === 'Escape' || valeur === 'CE') {
            effacerAffichage();
        } else if (valeur === '=' || valeur === 'Enter') {
            calculerResultat();
        } else if (valeur === 'Backspace') {
            supprDernierCaractere();
        } else {
            ajouterEntree(valeur);
        }
    }

    // Fonction pour réinitialiser (effacer) l'affichage
    function effacerAffichage() {
        saisie = "";
        affich.value = '0';
        resultatAffich = false;
    }

    // Fonction pour calculer le résultat
    function calculerResultat() {
        try {
            // Utiliser eval pour évaluer l'expression dans "saisie"
            saisie = eval(saisie).toString();
        } catch (e) {
            // En cas d'erreur, afficher "Erreur"
            saisie = "Erreur";
        }
        // Mettre à jour l'affichage avec le résultat
        affich.value = saisie;
        // Indiquer qu'un résultat a été affiché
        resultatAffich = true;
    }

    // Fonction pour supprimer le dernier caractère
    function supprDernierCaractere() {
        // Supprimer le dernier caractère de l'entrée actuelle
        saisie = saisie.slice(0, -1);
        // Mettre à jour l'affichage, montrer '0' si l'entrée est vide
        affich.value = saisie || '0';
    }

    // Fonction pour ajouter des caractères à l'entrée actuelle
    function ajouterEntree(valeur) {
        // Si un résultat est affiché, remplacer l'entrée par la nouvelle valeur
        if (resultatAffich) {
            saisie = valeur;
            resultatAffich = false;
        } else {
            // Sinon, ajouter la valeur à l'entrée actuelle
            saisie += valeur;
        }
        // Mettre à jour l'affichage avec l'entrée actuelle
        affich.value = saisie;
    }
}
