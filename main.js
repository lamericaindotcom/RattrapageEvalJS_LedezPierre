// Heure afficher
function showTime() {
    const timeElement = document.getElementById('heure-display');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(showTime, 1000);
showTime(); // Afficher immédiatement au chargement de la page


//Ma tache à faire

// afficher la tache du jour

const tacheDisplay = document.getElementById('tache-display');
const tacheInput = document.getElementById('tache-input');
const sauvegarderBtn = document.getElementById('sauvegarder-btn');

window.addEventListener('DOMContentLoaded', () => {
    const tacheSauvegarder = localStorage.getItem('tacheDuJour');
    if (tacheSauvegarder) {
        tacheDisplay.textContent = tacheSauvegarder;
    } else {
        tacheDisplay.textContent = 'Aucune tâche pour aujourd\'hui.';
    }      
});

// Sauvegarder la tache

sauvegarderBtn.addEventListener('click', () => {
    const nouvelleTache = tacheInput.value.trim();

    if (nouvelleTache) {
        localStorage.setItem('tacheDuJour', nouvelleTache);
        tacheInput.value = '';
    
    } else {
        alert('Veuillez entrer une tâche avant de sauvegarder.');
    }

});








// Météo Toulouse

fetch('https://prevision-meteo.ch/services/json/toulouse')
    .then(response => response.json())
    .then(data => {
        
        const temperature = data.current_condition.tmp;
        const condition = data.current_condition.condition;
        const vitesseVent = data.current_condition.wnd_spd;
        const ventElement = document.getElementById('meteo-display');
        ventElement.textContent = `Vent: ${vitesseVent} km/h, Température: ${temperature} °C, Condition: ${condition}`;
    
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données météo :', error);
        const messageErreur = document.getElementById('meteo-display');
        messageErreur.textContent = 'Impossible de récupérer les données météo.';
    });  