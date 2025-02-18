
const { createApp, ref } = Vue;

const app = createApp({

    template: `
        <h1>{{ profesion }}</h1>
        <p>Desde app.js</p>
    `, 

    Setup() {

        const profesion = ref('interiorista'); //el ref y value se pone cuando quieres que salga en unos segundos
        const estudios = ref('bellasartes');

       // setTimeout(() => {
         //   profesion.value = 'Modelador';
           // estudios.value = 'bellasartes';

       // } , 1000)

       const cambiarMensaje = () => {  //esto es una función y si la quiero exponer, he de ponerle en return abajo
        profesion.value = 'interiorista';
        estudios.value = 'bellasartes';
       }

        return { //esto es una funcion que devuelve un objeto, por los corchetes
            profesion,
            estudios,
            cambiarMensaje,
        }

    }

});

app.mount('#myApp')