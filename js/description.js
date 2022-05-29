let description = {
    'fr': {
        description: `
        <p>Je suis passionnée par les nouvelles technologies et le futur de l'informatique.</p>
        <p>
            Je travaille actuellement sur des projets innovants à <a href="https://ingenuity.io/">Ingenuity i/o</a>, en utilisant Qt
            et les compétences acquises en tant qu'étudiante au <a href="https://masterihm.fr">Master IHM</a> à l'ENAC.
        </p>
        <p>J'aime créer des interfaces qui seront utiles aux gens.</p>
        `
    },
    'en': {
        description: `
        <p>I am passionate about new technologies and the future of computer science.</p>
        <p>
            I am currently working on innovative software projects at <a href="https://ingenuity.io/">Ingenuity i/o</a>, using Qt
            and the skills I acquired while studying for my <a href="https://masterihm.fr">Human-Computer Interaction Master's degree</a> at ENAC.
        </p>
        <p>I love creating software interfaces that are useful to people.</p>
        `
    }

}

new Vue({
    el: '#description',
    data: description[locale]
});

