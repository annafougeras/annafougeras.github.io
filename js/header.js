let header = {
    'fr': {
        title: 'Conceptrice & développeuse d\'IHM'
    },
    'en': {
        title: 'HCI designer & developer'
    }
}

new Vue({
    el: '#header',
    data: header[locale]
});

