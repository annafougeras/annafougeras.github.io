let resume = {
    'fr': {
        cvAsset: 'assets/CV_FOUGERAS_Anna.pdf',
        cvText: 'Télécharger mon CV',
    },
    'en': {
        cvAsset: 'assets/CV_FOUGERAS_Anna_en.pdf',
        cvText: 'Get my resume',
    }
}

new Vue({
    el: '#resume',
    data: resume[locale]
});

