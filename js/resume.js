let resume = {
    'fr': {
        cvAsset: 'assets/CV_FOUGERAS_Vincent.pdf',
        cvText: 'Télécharger mon CV',
    },
    'en': {
        cvAsset: 'assets/CV_FOUGERAS_Vincent_en.pdf',
        cvText: 'Get my resume',
    }
}

new Vue({
    el: '#resume',
    data: resume[locale]
});

