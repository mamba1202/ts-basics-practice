enum Gender {
    Male,
    Female
}
interface Person {
    gender: Gender
}


function merry(a: Person, b: Person): [Person, Person] {
    if (a.gender !== b.gender) {
        return [a, b]
    } else {
        throw new Error('性别相同不能结婚')
    }
}

let a = { gender: Gender.Male }
let b = { gender: Gender.Male }
console.log(merry(a, b))