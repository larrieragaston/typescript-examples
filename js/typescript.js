"use strict";
// ---------- Tipado estático ----------
function add(n1, n2) {
    return n1 + n2;
}
// const result = add(10, "20");
// ---------- Tipado opcional ----------
const a = 10;
const b = "20";
// const result2: number = a + b;
// ---------- POO ----------
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    greet() {
        return `Hola, mi nombre es ${this.nombre}`;
    }
}
const john = new Persona("John");
console.log(john.greet());
// ---------- Any ----------
const functionAny = (n1) => n1 * n1;
console.log(functionAny("a"));
// ---------- Tipos mas comunes ----------
const string1 = "Esto es un string";
const number1 = 123;
const boolean1 = true;
const array1 = ["primero", "segundo", "tercero"];
let anyImplicit;
const unionVar1 = "Acepta tanto string como numbers";
const unionVar2 = 12345;
const tipoDePresente = "alumno";
// ---------- ENUMS ----------
var UserResponse;
(function (UserResponse) {
    UserResponse["No"] = "No";
    UserResponse["Yes"] = "Yes";
})(UserResponse || (UserResponse = {}));
const enum1 = UserResponse.No;
const person1 = {
    name: "Juan",
    isEntering: true,
    pets: ["Roque", "Gringa"]
};
const person2 = {
    name: "Josefina",
    isEntering: false,
};
function sayHi({ name, isEntering }) {
    if (isEntering) {
        return `Bienvenida/o ${name}!`;
    }
    return `Hasta luego ${name}!`;
}
function sayHiToStudent(person) {
    return `${sayHi(person)} Usted es alumna/o del año ${person.currentYear}!`;
}
const codeInBinary = [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0];
