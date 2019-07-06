let header = {
    'fr': {
        title: 'Etudiant en informatique'
    },
    'en': {
        title: 'Computer science student'
    }
}

new Vue({
    el: '#header',
    data: header[locale]
});

