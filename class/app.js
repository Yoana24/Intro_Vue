
const { createApp, ref, computed } = Vue; //ref es una variable reactiva


const primumSent = [
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

setup() {  //en setup siempre ponemos nuestro codigo

// --ESTO SON NUESTRAS VARIABLES REACTIVAS --
    const autores = ref(true);
    const sententiae = ref(primumSent); //con esto, la variable ya es reactiva.
    const newMsg = ref(''); //creo esta variable reactiva vacía para que se añadan nuevos mensajes


// -- COMPUTADA

    const sumaSent = computed(() => { //dentro abrimos una funcion de flecha
            return sententiae.value.length; //siempre ha de haber un return, que nos va a devolver
                                            //ponemos value porque sententiae es reactiva
                                            //length porque las recorremos

    })


    const vectis = () => { //esta funcion para el boton del html
        autores.value = !autores.value //el ! hace que o es falso o true.
    }


    //la const ha de ser reactiva porque si no lo es, no cambia. Necesita serlo sino no cambia, no hace nada
    const anadirFrases = () => { //esta es la funcion para añadir las frases del boton add
        sententiae.value.unshift({ sententia: newMsg.value , 'Hola Mundo', auctor:'Yoa'} ) //el unshift es para que salga al inicio
        newMsg.value = ' ';
    }




    return {
        primumSent,
        autores,
        vectis,
        newMsg,

    }
}
})

app.mount('#myApp');