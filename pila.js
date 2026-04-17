class Pila {
  constructor() {
    this.items = [];
  }

  agregar(objeto) {
    this.items.push(objeto);
    console.log("Elemento agregado a la pila:", objeto);
  }

  eliminar() {
    if (this.estaVacia()) {
      console.log("La pila está vacía");
      return null;
    }
    const eliminado = this.items.pop();
    console.log("Elemento eliminado de la pila:", eliminado);
    return eliminado;
  }

  mostrar() {
    console.log("Contenido actual de la pila:", this.items);
  }

  estaVacia() {
    return this.items.length === 0;
  }
}

// Pruebas
const pila = new Pila();

pila.agregar({ nombre: "Orlando", edad: 30 });
pila.agregar({ nombre: "Luisa", edad: 22 });
pila.agregar({ nombre: "Carlos", edad: 28 });

pila.mostrar();
pila.eliminar();
pila.mostrar();