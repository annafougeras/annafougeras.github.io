let footer = {
    'fr': {
        title: 'Contactez moi'
    },
    'en': {
        title: 'Contact me'
    }
}

new Vue({
    el: '#footer',
    data: footer[locale]
});

