class Cola {
  constructor() {
    this.items = [];
  }

  agregar(numero) {
    this.items.push(numero);
    console.log("Se agregó a la cola:", numero);
  }

  eliminar() {
    if (this.estaVacia()) {
      console.log("La cola está vacía");
      return null;
    }
    const eliminado = this.items.shift();
    console.log("Se eliminó de la cola:", eliminado);
    return eliminado;
  }

  mostrar() {
    console.log("Contenido actual de la cola:", this.items);
  }

  estaVacia() {
    return this.items.length === 0;
  }
}

// Pruebas
const cola = new Cola();

cola.agregar(10);
cola.agregar(20);
cola.agregar(30);

cola.mostrar();
cola.eliminar();
cola.mostrar();