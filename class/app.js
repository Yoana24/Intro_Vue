
const { createApp, ref } = Vue; //ref es una variable reactiva

const sententiae = [
    { sententia: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', auctor: 'Harvey Dent, The Dark Knight' },
    { sententia: 'I believe what doesn’t kill you simply makes you, stranger.', auctor: 'The Joker, The Dark Knight' },
    { sententia: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', auctor: 'Henri Ducard, Batman Begins' },
    { sententia: 'You either die a hero or live long enough to see yourself become the villain.', auctor: 'Harvey Dent, The Dark Knight' },
    { sententia: 'If you’re good at something, never do it for free.', auctor: 'The Joker, The Dark Knight' },
    { sententia: 'Yes, father. I shall become a bat.', auctor: 'Bruce Wayne/Batman, Batman: Year One' },
    { sententia: 'Yes, father. I shall become a bat.', auctor: 'Bruce Wayne/Batman, Batman: Year One' },
    { sententia: 'Yes, father. I shall become a bat.', auctor: 'Bruce Wayne/Batman, Batman: Year One' },
    { sententia: 'Yes, father. I shall become a bat.', auctor: 'Bruce Wayne/Batman, Batman: Year One' },
]


const app = createApp({

setup() { 

    const autores = ref(true);

    const vectis = () => { //esta funcion para el boton del html
        autores.value = !autores.value //el ! hace que o es falso o true.
    }

    return {
        sententiae,
        autores,
        vectis,

    }
}
})

app.mount('#myApp');