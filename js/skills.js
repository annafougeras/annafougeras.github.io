let skills = {
    'fr': {
        title: 'Compétences',
        categories: {
            'software': 'Développement logiciel',
            'frontend': 'Dév. web front-end',
            'backend': 'Dév. web back-end',
            'tools': 'Outils',
        },
        languageTitle: 'Langues',
        languages: [
            {
                flag: 'assets/fr.svg',
                title: 'Français',
                tip: 'Langue maternelle',
                stars: '★★★'
            },
            {
                flag: 'assets/uk.svg',
                title: 'English',
                tip: 'Courant et technique',
                stars: '★★★'
            },
            {
                flag: 'assets/jp.svg',
                title: '日本語',
                tip: 'Niveau JLPT N4',
                stars: '★'
            },
        ]
    },
    'en': {
        title: 'Skills',
        categories: {
            'software': 'Software development',
            'frontend': 'Front-end web dev.',
            'backend': 'Back-end web dev.',
            'tools': 'Tools',
        },
        languageTitle: 'Langues',
        languages: [
            {
                flag: 'assets/fr.svg',
                title: 'Français',
                tip: 'First language',
                stars: '★★★'
            },
            {
                flag: 'assets/uk.svg',
                title: 'English',
                tip: 'Very good communication skills',
                stars: '★★★'
            },
            {
                flag: 'assets/jp.svg',
                title: '日本語',
                tip: 'JLPT N4 level',
                stars: '★'
            },
        ]
    }

}

let skillsCommon = {
    skills: {
        'software': [
            { title: 'Python', class: 'devicon-python-plain-wordmark', stars: '★★★' },
            { title: 'Qt', class: 'devicon-qt-original', stars: '★★★' },
            { title: 'C++', class: 'devicon-cplusplus-plain-wordmark', stars: '★★' },
            { title: 'C', class: 'devicon-c-plain-wordmark', stars: '★★' },
            { title: 'Java', class: 'devicon-java-plain-wordmark', stars: '★★' },
            { title: 'Android', class: 'devicon-android-plain-wordmark', stars: '★' },
        ],
        'frontend': [
            { title: 'HTML', class: 'devicon-html5-plain-wordmark', stars: '★★★' },
            { title: 'CSS', class: 'devicon-css3-plain-wordmark', stars: '★★' },
            { title: 'Vue.js', class: 'devicon-vuejs-plain', stars: '★★' },
            { title: 'Angular', class: 'devicon-angularjs-plain', stars: '★★' },
            { title: 'Sass', class: 'devicon-sass-original', stars: '★★' },
            { title: 'JavaScript', class: 'devicon-javascript-plain', stars: '★★' },
            { title: 'WordPress', class: 'devicon-wordpress-plain', stars: '★' },
        ],
        'backend': [
            { title: 'Laravel', class: 'devicon-laravel-plain-wordmark', stars: '★★' },
            { title: 'MySQL', class: 'devicon-mysql-plain-wordmark', stars: '★★' },
            { title: 'PHP', class: 'devicon-php-plain', stars: '★★' },
        ],
        'tools': [
            { title: 'Illustrator', class: 'devicon-illustrator-plain', stars: '★★' },
            { title: 'Xd', class: 'devicon-xd-plain', stars: '★★' },
            { title: 'Premiere Pro', class: 'devicon-premierepro-plain', stars: '★★' },
            { title: 'Bash', class: 'devicon-linux-plain', stars: '★★' },
        ]
    }
}

new Vue({
    el: '#skills',
    data: Object.assign(skillsCommon, skills[locale])
});

