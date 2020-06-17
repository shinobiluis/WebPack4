// Importamos css
import '../css/style.css';

class Cliente {
    constructor(nombre){
        this.nombre = nombre;
    }
}
const cliente = new Cliente('Luis');
console.log(cliente);