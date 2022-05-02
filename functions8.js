//fubction constructor
//se liga no uso do THIS e NEW
function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}

const timao = new Person("Timão")
const supremo = new Person("Supremo")

console.log(timao)
console.log(supremo.walk())