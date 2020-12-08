class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        return `Hello, my name is ${person.name}.`
    }
}

const katie = new Person('Katie', 28);
const james = new Person('James', 29);
const jake = new Person('Jake', 28);

const people = [katie, james, jake]

for (let person in people) {
    console.log(person.sayHello())
}
