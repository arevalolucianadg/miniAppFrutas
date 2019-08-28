const app = new Vue ({
    el: '#app',
    data: {
        frutas: [
            {nombre: 'manzanas', cantidad: 5},
            {nombre: 'bananas', cantidad: 3},
            {nombre: 'frutillas', cantidad: 1},
            {nombre: 'naranjas', cantidad: 0}
        ],
        nuevaFruta: '',
        totalFrutas: 0
    },
    methods: {
        agregarFrutas () {
            this.frutas.push(
                {nombre: this.nuevaFruta, cantidad: 0},
            );
            this.nuevaFruta = ''
        }
    },
    computed: {
        sumarFrutas () {
            this.totalFrutas = 0;
            for(fruta of this.frutas) {
                this.totalFrutas += fruta.cantidad;
            }
            return this.totalFrutas;
        }
    }
})