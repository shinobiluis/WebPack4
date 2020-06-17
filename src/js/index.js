// Importamos css
import '../css/style.css';
// importamos sass
import '../css/style.scss';

class Cliente {
    constructor(nombre){
        this.nombre = nombre;
    }
}
const cliente = new Cliente('Luis');
console.log(cliente);