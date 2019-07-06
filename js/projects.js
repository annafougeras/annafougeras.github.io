let projects = {
    'fr': {
        title: 'Projets',
        projects: [{
            id: 'bionotes',
            title: 'BioNotes',
            year: '2019',
            skills: ['Angular',
                'Ionic'
            ],
            description: `
                <p>
                    <a href="https://github.com/LeJardinDesSaisons/BioNotes">BioNotes</a> est une application mobile
                    pour le suivi d'une parcelle de maraîchage bio. Elle permet la gestion des espaces de plantation
                    et le traçage des opérations effectuées sur chaque espace.
                </p>
                <p>
                    L'application a été développée sous Ionic par une équipe de 4 personnes, en suivant la méthodologie
                    Agile SCRUM et la conception centrée utilisateur.
                </p>
            `
        },
        {
            id: 'pres',
            title: 'Site de présentation',
            year: '2018',
            skills: ['HTML',
                'CSS',
                'Bootstrap'
            ],
            description: `
                <p>
                    J'ai travaillé sur la version actuelle de ce site web depuis juin 2018, en ajoutant régulièrement de nouveaux projets et expériences.
                    J'ai utilisé certaines parties du précédent site web et je me suis focalisé sur les informations importantes.
                </p>
                <p>
                    Ce site est <a href="https://github.com/vincentfougeras/vincentfougeras.github.io">hébergé sur GitHub Pages</a>.
                </p>
            `
        },
        {
            id: 'fullscreen',
            title: 'Image en plein écran',
            year: '2017',
            skills: ['CSS',
                'jQuery'
            ],
            description: `
                <p>
                    J'ai développé un code (HTML, CSS, Javascript) permettant d'afficher une image en plein écran lorsque la souris passe au dessus d'un texte.
                    <a href="fullscreen/index.html">Un site de démonstration</a> a été créé pour présenter ce code.
                </p>
            `
        },
        {
            id: 'dreamcatcher',
            title: 'Dream Catcher',
            year: '2017',
            skills: ['Android'],
            description: `
                <p>Dream Catcher est une application Android destinée à écrire nos rêves. Elle est similaire à une application pour prendre des notes, mais possède des fonctionnalités additionnelles spécifiques à l'écriture des rêves.</p>
                <div>
                    <a href="assets/dream-en1.png" data-caption="L'écran principal comportant la liste des rêves. On peut rechercher un rêve par mot-clef ou trier la liste selon différents critères." data-fancybox="dream" ><img class="img-thumbnail" src="assets/dream-en1.png" width="120"/></a>
                    <a href="assets/dream-en2.png" data-caption="On peut ajouter un nouveau rêve, avec un titre optionnel." data-fancybox="dream"><img class="img-thumbnail" src="assets/dream-en2.png" width="120"/></a>
                    <a href="assets/dream-en3.png" data-caption="On peut voir les détails d'un rêve, le modifier, le supprimer, ou le partager." data-fancybox="dream"><img class="img-thumbnail" src="assets/dream-en3.png" width="120"/></a>
                    <a href="assets/dream-en4.png" data-caption="On peut appliquer un thème adapté à la nuit, et demander à recevoir un rappel pendant la nuit." data-fancybox="dream"><img class="img-thumbnail" src="assets/dream-en4.png" width="120"/></a>
                </div>
            `
        },
        {
            id: 'n7tris',
            title: 'n7tris',
            year: '2017',
            skills: ['Java',
                'Interface graphique'
            ],
            description: `
                <div class="d-sm-flex flex-row">
                    <a href="assets/n7tris.png" data-caption="The main menu screen" data-fancybox="n7tris"><img class="img-thumbnail" src="assets/n7tris.png"/></a>
                    <p>
                        n7tris est un jeu de Tetris présentant plusieurs modes de jeu (Classique, Couleurs, Puzzle, Tricky Tower),
                        ce qui permet de varier l'expérience de jeu. J'ai travaillé sur n7tris au sein d'un groupe de 7 personnes,
                        et je me suis concentré sur les menus du jeu. De même que pour le logiciel de gestion des projets tutorés,
                        nous avons utilisé Swing pour l'interface graphique, et Agile SCRUM et SVN pour la gestion de projet.
                    </p>
                </div>
            `
        },
        {
            id: 'shell',
            title: 'Implémentation du shell',
            year: '2017',
            skills: ['C',
                'Programmation système'
            ],
            description: `
                <p>J'ai implémenté un shell dont le fonctionnement est similaire au <a href="https://en.wikipedia.org/wiki/Bourne_shell">Bourne Shell</a>. Ainsi, ce shell peut :</p>
                <ul>
                    <li>exécuter des commandes externes (ls, pwd ...)</li>
                    <li>exécuter des commandes internes au shell (cd, jobs ...)</li>
                    <li>gérer la suspension, l'interuption, le lancement de processus en tâche de fond</li>
                    <li>gérer les redirections et les tubes de communication</li>
                </ul>
            `
        },
        {
            id: 'previous-presentation',
            title: 'Site de présentation (précédent)',
            year: '2016-2017',
            skills: ['PHP',
                'CSS',
                'Javascript'
            ],
            description: `
                <p>J'ai créé un site pour présenter le travail que j'ai effectué en 3 ans.</p>
                <p>Ce site était principalement codé à la main, sans utiliser de framework, et comportait
                    un formulaire de contact permettant aux utilisateurs de m'envoyer des emails.</p>
                <div>
                    <a href="assets/pres1.png"
                    data-caption="Website header"
                    data-fancybox="pres" ><img class="img-thumbnail" src="assets/pres1.png" width="120"/></a>
                    <a href="assets/pres2.png"  data-caption="Section Compétences" data-fancybox="pres">
                        <img class="img-thumbnail" src="assets/pres2.png" width="120"/></a>
                    <a href="assets/pres3.png"  data-caption="Section Expérience" data-fancybox="pres">
                        <img class="img-thumbnail" src="assets/pres3.png" width="120"/></a>
                    <a href="assets/pres4.png"  data-caption="Section Contact"
                        data-fancybox="pres"><img class="img-thumbnail" src="assets/pres4.png" width="120"/></a>
                    <a href="assets/pres5.png"  data-caption="Section Projets et responsive design"
                        data-fancybox="pres"><img class="img-thumbnail" src="assets/pres5.png" width="120"/></a>
                </div>
            `
        },
        {
            id: 'ecommerce',
            title: 'Site d\'e-commerce',
            year: '2016',
            skills: ['PHP',
                'Patron d\'architecture MVC'
            ],
            description: `
                <p>Nous avons réalisé dans un groupe de deux personnes la partie back-office d'un site d'e-commerce.
                    L'utilisateur a la possibilité de créer, modifier, supprimer des produits et des catégories de produits.</p>
                <p>Nous avons appris la programmation orientée objet MVC2 en PHP.</p>
            `
        },
        {
            id: 'encryption',
            title: 'Programmes de chiffrement',
            year: '2015-2016',
            skills: ['Python',
                'Systèmes cryptographiques'
            ],
            description: `
                <p>
                    J'ai étudié différents systèmes cryptographiques dans une équipe de 4 personnes.
                    Quatres systèmes ont été étudiés : César, Vigenère, Vernam et RSA. J'ai réalisé des programmes
                    en Python permettant de chiffrer et de déchiffrer des messages selon les méthodes de César et de Vigenère.
                </p>
            `
        },
        {
            id: 'project-manage',
            title: 'Logiciel de gestion de projets',
            year: '2015',
            skills: ['Java',
                'JUnit',
                'Agile SCRUM',
                'SVN',
                'AsciiDoc'
            ],
            description: `
                <p>Nous avons conçu un logicel permettant de gérer les projets tutorés : ajout de sujets,
                    création des groupes d'étudiants, assignation des projets aux groupes ...</p>
                <p>Nous avons utilisé un ensemble d'outils et de méthodes pour mettre à bien ce projet :
                </p>
                <ul>
                    <li>Tests unitaires en Java avec JUnit</li>
                    <li>Méthode agile SCRUM</li>
                    <li>Versionnement de projet avec SVN</li>
                    <li>Documentation avec AsciiDoc</li>
                </p>
            `
        }]
    },
    'en': {
        title: 'Projects',
        projects: [{
            id: 'bionotes',
            title: 'BioNotes',
            year: '2019',
            skills: ['Angular',
                'Ionic'
            ],
            description: `
                <p>
                    <a href="https://github.com/LeJardinDesSaisons/BioNotes">BioNotes</a> is a mobile application
                    used to monitor a market garden. It provides us with tools to manage garden areas and keep track
                    of all operations performed on each area.
                </p>
                <p>
                    The app was developped by a team of 4 people using the Ionic framework, an Agile
                    methodology, and a user centered design.
                </p>
            `
        },
        {
            id: 'pres',
            title: 'Presentation website',
            year: '2018',
            skills: ['HTML',
                'CSS',
                'Bootstrap'
            ],
            description: `
                <p>
                    I have been working on the current version of this website since june 2018, by adding new projects and experiences.
                    I have used parts of my previous presentation website and I have focused on the important pieces of information.
                </p>
                <p>
                    This website is <a href="https://github.com/vincentfougeras/vincentfougeras.github.io">hosted on GitHub Pages</a>.
                </p>
            `
        },
        {
            id: 'fullscreen',
            title: 'Fullscreen image on hover',
            year: '2017',
            skills: ['CSS',
                'jQuery'
            ],
            description: `
                <p>
                    I developped a small code (HTML, CSS, Javascript) which displays a fullscreen image when the mouse is hovering over some text.
                    <a href="fullscreen/index.html">A demo website</a> has been made to show off this code.
                </p>
            `
        },
        {
            id: 'dreamcatcher',
            title: 'Dream Catcher',
            year: '2017',
            skills: ['Android'],
            description: `
                <p>Dream Catcher is an Android application used to write our dreams. It is similar to any note-taking app, but it has additional functionalities helping the user to write their dreams.</p>
                <div>
                    <a href="assets/dream-en1.png"
                    data-caption="The main screen containing the list of dreams. We can search through dreams with keywords, or sort the list by date or by name." data-fancybox="dream" ><img class="img-thumbnail" src="assets/dream-en1.png" width="120"/></a>
                    <a href="assets/dream-en2.png"  data-caption="We can add a new dream, with an optional title." data-fancybox="dream"><img class="img-thumbnail" src="assets/dream-en2.png" width="120"/></a>
                    <a href="assets/dream-en3.png"  data-caption="We can access the details of a dream, modify it, delete it, or share it." data-fancybox="dream"><img class="img-thumbnail" src="assets/dream-en3.png" width="120"/></a>
                    <a href="assets/dream-en4.png"  data-caption="We can apply a theme adapted to the night, and get a reminder in the middle of the night." data-fancybox="dream"><img class="img-thumbnail" src="assets/dream-en4.png" width="120"/></a>
                </div>
            `
        },
        {
            id: 'n7tris',
            title: 'n7tris',
            year: '2017',
            skills: ['Java',
                'GUI'
            ],
            description: `
                <div class="d-sm-flex flex-row">
                    <a href="assets/n7tris.png" data-caption="The main menu screen" data-fancybox="n7tris"><img class="img-thumbnail" src="assets/n7tris.png"/></a>
                    <p>
                        n7tris is a Tetris game with multiple game modes (Classic, Colors, Puzzle, Tricky Tower), which diversifies the gameplay.
                        I worked on n7tris in a team of 7 people, and I focused mainly on the game menus. As with the application to manage assignation
                        of projects, we used Swing for the user interface, and Agile SCRUM and SVN for the project management.
                    </p>
                </div>
            `
        },
        {
            id: 'shell',
            title: 'Shell implementation',
            year: '2017',
            skills: ['C',
                'System programming'
            ],
            description: `
                <p>I implemented a shell which works similar to the <a href="https://en.wikipedia.org/wiki/Bourne_shell">Bourne Shell</a>. Thus this shell can :</p>
                <ul>
                    <li>execute external commands (ls, pwd ...)</li>
                    <li>execute internal commands (cd, jobs ...)</li>
                    <li>handle suspension, interuption, launching background processes</li>
                    <li>handle redirection and pipelines</li>
                </ul>
            `
        },
        {
            id: 'previous-presentation',
            title: 'Presentation website (previous)',
            year: '2016-2017',
            skills: ['PHP',
                'CSS',
                'Javascript'
            ],
            description: `
                <p>I have made a presentation website showing the work I have done for 3 years.</p>
                <p>This website was mainly coded by hand, without using frameworks, and included a contact form for users to send me emails.</p>
                <div>
                    <a href="assets/pres1.png"
                    data-caption="Website header"
                    data-fancybox="pres" ><img class="img-thumbnail" src="assets/pres1.png" width="120"/></a>
                    <a href="assets/pres2.png"  data-caption="Skills section" data-fancybox="pres">
                        <img class="img-thumbnail" src="assets/pres2.png" width="120"/></a>
                    <a href="assets/pres3.png"  data-caption="Experience section" data-fancybox="pres">
                        <img class="img-thumbnail" src="assets/pres3.png" width="120"/></a>
                    <a href="assets/pres4.png"  data-caption="Contact section"
                        data-fancybox="pres"><img class="img-thumbnail" src="assets/pres4.png" width="120"/></a>
                    <a href="assets/pres5.png"  data-caption="Responsive design and projects section"
                        data-fancybox="pres"><img class="img-thumbnail" src="assets/pres5.png" width="120"/></a>
                </div>
            `
        },
        {
            id: 'ecommerce',
            title: 'E-commerce website',
            year: '2016',
            skills: ['PHP',
                'MVC pattern'
            ],
            description: `
                <p>I implemented with a co-worker the back-office part of an e-commerce website. The user can create, update, or delete products/categories of products.</p>
                <p>We learned object oriented programmation (MVC2 compliant) in PHP.</p>
            `
        },
        {
            id: 'encryption',
            title: 'Encryption program',
            year: '2015-2016',
            skills: ['Python',
                'Cryptographic systems'
            ],
            description: `
                <p>
                    I studied various cryptographic systems within a 4 member team. Four systems have been studied : Cesar, Vigenere, Vernam and RSA.
                    I realized Python programs to cipher and decipher messages using the Cesar and the Vigenere methods.
                </p>
            `
        },
        {
            id: 'project-manage',
            title: 'Project management app',
            year: '2015',
            skills: ['Java',
                'JUnit',
                'Agile SCRUM',
                'SVN',
                'AsciiDoc'
            ],
            description: `
                <p>We conceived a software to manage the projects of the IUT : adding subjects, creating teams of students, associate subjects and teams ...</p>
                <p>We used a variety of tools and methods for this project :
                </p>
                <ul>
                    <li>Unit tests in Java with JUnit</li>
                    <li>Agile SCRUM method</li>
                    <li>Source versionning with SVN</li>
                    <li>Documentation with AsciiDoc</li>
                </p>
            `
        }]
    }
}

new Vue({
    el: '#projects',
    data: projects[locale]
});