let description = {
    'fr': {
        description: `
        <p>Je suis passioné par les nouvelles technologies et le futur de l'informatique.</p>
        <p>Je suis étudiant en <a href="https://masterihm.fr">Master IHM</a> à l'université Toulouse Paul Sabatier.
            J'ai effectué un DUT informatique et une L3 informatique, qui m'ont permis d'en apprendre beaucoup sur le développement de logiciels,
            la gestion de bases de données et l'administration système. J'ai hâte de pouvoir approfondir mes connaissances dans la conception d'IHM
            à l'université Paul Sabatier.</p>
        <p>J'apprécie particulièrement le travail en équipe mais je suis également capable de travailler en autonomie.
            J'ai réalisé de nombreux projets informatiques, au cours desquels j'ai utilisé mes compétences pour arriver au meilleur résultat.</p>
        `
    },
    'en': {
        description: `
        <p>I am passionate about new technologies and the future of computer science.</p>
        <p>I am currently studying <a href="https://masterihm.fr">GUI conception</a> at Toulouse University. I have a diploma in Computer Science, where I learned a lot about software and web development, database management and system administration. I am enthusiastic about improving my knowledge of software development at Toulouse University.</p>
        <p>I especially like to work in teams but I am also very capable of working by myself. I have completed multiple software projects, in which I invested my skills to get the best possible result.</p>
        `
    }

}

new Vue({
    el: '#description',
    data: description[locale]
});

