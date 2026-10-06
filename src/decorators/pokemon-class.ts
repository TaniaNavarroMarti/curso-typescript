function printToConsole(constructor: Function) {
    console.log(constructor);
}
// Decorador de Clase
const printToConsoleConditional = (print: boolean = false): Function => {
    if (print) {
        return printToConsole;
    } else {
        return () => { };
    }
}

// Decorador de fabrica
const bloquearPrototipo = (constructor: Function) => {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function checkValidPokemonId() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.error('El id del pokemon debe estar entre 1 y 800');
            } else {
                return originalMethod(id);
            }
        }
    }
}

function readonly(isWritable: boolean = true): Function {
    return function (target: any, propertyKey: string) {
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this);
                return 'Pikachu';
            },
            set(this, val) {
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                });
            }
        }
        return descriptor;
    }
}

@bloquearPrototipo
@printToConsoleConditional(true)

export class Pokemon {

    @readonly(false)  // DEcoradores de propiedades
    public publicApi: string = 'http://pokeaí.co';

    constructor(
        public name: string
    ) { }

    // Decorador de métodos
    @checkValidPokemonId()

    savePokemonToDB(id: number) {
        console.log(`Pokemon guardado en DB ${id}`);
    }
}