// ---------- Tipado estático ----------
function add(n1: number, n2: number) {
  return n1 + n2;
}

// const result = add(10, "20");

// ---------- Tipado opcional ----------
const a: number = 10;
const b = "20";

// const result2: number = a + b;

// ---------- POO ----------
class Persona {
  constructor(public nombre: string) {}
  greet(): string {
    return `Hola, mi nombre es ${this.nombre}`;
  }
}

const john = new Persona("John");
console.log(john.greet());

// ---------- Any ----------
const functionAny = (n1) => n1 * n1;

console.log(functionAny("a"));

// ---------- Tipos mas comunes ----------
const string1:string = "Esto es un string";

const number1:number = 123;

const boolean1:boolean = true;

const array1:Array<string> = ["primero", "segundo", "tercero"];

let anyImplicit;

const unionVar1:string|number = "Acepta tanto string como numbers";

const unionVar2:string|number = 12345;

const tipoDePresente:"alumno"|"profesor" = "alumno";

// ---------- ENUMS ----------
enum UserResponse { No = "No" , Yes = "Yes" }
const enum1:UserResponse = UserResponse.No;

// ---------- Interfaces ----------
interface PersonProps {
    name:string,
    isEntering:boolean,
    pets?:Array<string>
}

const person1: PersonProps = {
    name:"Juan",
    isEntering:true,
    pets:["Roque", "Gringa"]
}

const person2: PersonProps = {
    name:"Josefina",
    isEntering:false,
}

function sayHi ({name, isEntering}: PersonProps) {
    if(isEntering){
        return `Bienvenida/o ${name}!`;
    }
    return `Hasta luego ${name}!`;
}

interface StudentProps extends PersonProps {
    currentYear:string,
}

function sayHiToStudent (person: StudentProps) {
    return `${sayHi(person)} Usted es alumna/o del año ${person.currentYear}!`;
}

// ---------- Types ----------
type binarySystem = 0 | 1
const codeInBinary: Array<binarySystem> = [1,0,0,0,0,0,1,1,1,0,1,0,0]

type PersonPropsType = {
    name:string,
    isEntering:boolean,
    pets?:Array<string>
}

type StudentPropsType = PersonPropsType & {
    currentYear:string,
}
