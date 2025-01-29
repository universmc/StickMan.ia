const schedule = require('node-schedule');

// Planifier une tâche pour chaque jour à 9h du matin
const job = schedule.scheduleJob('0 9 * * *', () => {
    console.log('Bonjour ! C\'est l'heure de publier un nouveau post.');
    // Ici, vous pouvez ajouter votre code pour publier le post avec le hashtag souhaité
});