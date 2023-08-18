class Stack {
    
    /* ----------------------------------- */
    /* ----------- Constructor ----------- */
    /* ----------------------------------- */

    constructor(){
        /* Se inicia la variable o propiedad "top" con el valor de null, cuado se realice un "push", el valor de top cambaira al valor que se envie desde la clase node(element), esto se realizará en el metodo "push" de la clase "Stack" */
        this.top = null
        this.size = 0
    }

    /* ----------------------------------- */
    /* ---- Push : agregar Elementos ----- */
    /* ----------------------------------- */

    /* Metodo para agregar elementos(datos) a la clase stack, adicionalmenete se le agrega el valor del nuevo "elemento" node a "top"*/
    push(element) {
        /* Se crea o inicializa la instancia de Node(clase Node) */
        let node = new Node(element, this.top)
        /* Con esta linea agregamos a "top" el valor de "node", y con esto "top" siempre tendra el valor del ultimo elemento agregado a la pila */
        this.top = node
        this.size ++
    }

    /* -------------------------------------- */
    /* -- length : Calcular NUM Elementos  -- */
    /* -------------------------------------- */

    /* Retornar el número total de elementos en la pila o almacenados */
    length() {
        /* Primera Opcion: crear una variable size desde el contructor, cuando se utilice el metodo "push" aumentara su tamaño */
        return this.size
    }
    
    /* Retornar el número total de elementos en la pila o almacenados, opcion 2 */
    /* Segunda Opción: se crea la variable contador en este metodo, se comprueva si el valor de top en 'prev' es diferente a 'null', si esto es asi, a la variable contador aumentará */
    length2() {
    let aux = this.top          /* Se asigna a aux el valor de 'top' */
        let amount = 0          /* Variable contador */
        while (aux !== null) {  /* Se compara si la variable es diferente de NULL */
            amount ++
            /* Se asigna el valor de 'prev' esto solo si top es diferente de null */
            aux = aux.prev      
        }
        return amount
    }

    /* --------------------------------------------------- */
    /* -- hasElement : verificar si un elemento existe  -- */
    /* --------------------------------------------------- */

    /* Metodo para verificar si existe un dato en especifico en nuestra pila, podemos realizar esto de 2 formas */

    /* Forma #1 : */
    hasElement(element) {
        let aux = this.top
        while (aux !== null && aux.data !== element) {
            aux = aux.prev
        }
        return aux !== null
    }

    /* Forma #2 : */
/*     hasElement(element) {
        let aux = this.top
        while(aux !== null) {
            if (aux.data === element) {
                return true
            }
            aux = aux.prev
        }
        return false
    } */


    /* ----------------------------------- */
    /* ---- Pop : Eliminar Elementos ----- */
    /* ----------------------------------- */

    /* Metodo para eliminar el último elemento de la pila, recordar que en si no se realiza un metodo para elminar, solo indicamos que la variable 'top' tome el valor de "prev" */
    pop() {
        if (this.top !== null) {
            /* Esta linea solo se realiza en caso de que queramos retornar el valor del ultimo elemento, el cual está almacenado en la variable "top" */
            let element = this.top
            /* le asignamos a la variable "top" el valor de "prev", con esto top quedaria con el valor que se agrego antes del ultimo registro agregado */
            this.top = this.top.prev
            /* NO es necesario realizar alguna funcion para eleminar el valor de top, al momento de cambiar suy valor al "prev" javascrip automatiamente elmina el valro que tenia "top" */
            return element
        } else {
            console.log('There is not data to delete')
            return null
        }
    }

    /* ------------------------------------------------ */
    /* ---- Peek : Retornar el valor actual de TOP ---- */
    /* ------------------------------------------------ */

    /* Este metodo permite obtener el valor de la variable "top" y retornarlo xD */
    peek() {
        return this.top
    }


    /* --------------------------------------------------- */
    /* ---- IsEmpty : Comprobar si la pila está vacia ---- */
    /* --------------------------------------------------- */

    /* Este metodo lo utilziamos para saber si nuestra pila está vacia, solo basta con comprobar si el valor de la variable "top" es igual a "null", "null" es el valor que "top" toma cuando se crear o instancia la clase "stack" y este no cambia a menos de que realicemos un "push"  */
    isEmpty() {
        return this.top === null
    }


    /* --------------------------------------------------------- */
    /* ----- Print : Imprimir los datos que hay en la Pila ----- */
    /* --------------------------------------------------------- */

    /* Este metodo lo utilizamos para imprimir por consola cada uno de los datos que están en la pila */
    print() {
        /* se crea una variable a la cual se le asignan los valores que hay en la variable 'top', con esto tendremos el ultimo valor agregado en la pila */
        let aux = this.top
        /* Recorremos todos los valores que tiene la pila hasta que llegue a null, el cual seria el primer dato asignado cuando se creo o instanció la clase "Stack"*/
        while(aux !== null) {
            console.log(aux.data)
            /* despues de imprimir el dato por consola le agregamos el valor de 'prev' a la variable 'aux' para que este entre de nuevo al bucle y confirme si este valor es diferente de null */
            aux = aux.prev
        }
    }
}

class Node {
    /* Se crean los nuevos datos con el contructor, el valor de "element" es el que queremos agregar, y el valor de "prev" sera el "top" de la clase "stack", con esto agregamos un nuevo valor y el previo o el que anteriormente se iba agregado */
    constructor(element, prev) {
        this.data = element
        this.prev = prev
    }
}