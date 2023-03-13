let description = {
    'fr': {
        description: `
        <p>Je suis passionnée par les nouvelles technologies et le futur de l'informatique.</p>
        <p>
            Je suis actuellement à la recherche d'un emploi en conception et développement d'interfaces humain-machine.
            <br/>J'aime créer des interfaces utiles et agréables à utiliser.
        </p>
        `
    },
    'en': {
        description: `
        <p>I am passionate about new technologies and the future of computer science.</p>
        <p>
            I am currently looking for a job in human-computer interaction design and development.
            <br/>I love creating software interfaces that are useful to people.
        </p>`
    }

}

new Vue({
    el: '#description',
    data: description[locale]
});

