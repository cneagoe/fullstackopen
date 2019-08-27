//vectors
const t = [1,2,3,4,5]
t.push(6)
console.log(t.length)
console.log(t[1])

t.forEach(val => {
    console.log(val)
})

const t2 = t.concat(-1)
console.log(t2)

const m = t.map(val => val * 2)
console.log(m)

const [first, seccond, ...rest] = t
console.log(first)
console.log(seccond)
console.log(rest)

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    grades: [2, 3, 5, 3]
}
console.log(object1.name)
const fieldName = 'education'
console.log(object1[fieldName])
object1.address = 'Helsinki'
object1['secret number'] = 12341
console.log(object1)

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const sq = p => {
    return p * p
}

const sqs = p => p * p

const res = sum(1,4)
console.log(res)

const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
      console.log('hello, my name is', this.name)
    }
}
arto.greet()      
const referenceToGreet = arto.greet
referenceToGreet() 

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet(){
        console.log('hello, my name is ', this.name)
    }
}