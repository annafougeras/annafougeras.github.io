let navbar = {
    'fr': {
        sections: {
            experience: 'Expérience',
            skills: 'Compétences',
            projects: 'Projets',
        },
        resume: {
            href: 'assets/CV_FOUGERAS_Vincent.pdf',
            title: 'CV',
        },
        language: {
            href: '?l=en',
            title: 'English',
            flag: 'assets/uk.svg',
        }
    },
    'en': {
        sections: {
            experience: 'Experience',
            skills: 'Skills',
            projects: 'Projects',
        },
        resume: {
            href: 'assets/CV_FOUGERAS_Vincent_en.pdf',
            title: 'Resume',
        },
        language: {
            href: '?l=fr',
            title: 'Français',
            flag: 'assets/fr.svg',
        }
    }
}

new Vue({
    el: '#navbar',
    data: navbar[locale]
});

