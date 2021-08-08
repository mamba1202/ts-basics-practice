// interface hasLength {
//     length: number
// }


// function returnInt<T extends hasLength>(sth: T): T {
//     console.log(sth.length)
//     return sth
// }

function returnInt<T>(sth: T): T {
    // console.log(sth.length)
    return sth
}

let returnInt2: <T>(sth: T) => T = returnInt
interface Human {
    name: string,
    age: number
}
// let result  = returnInt<number>(123)
let result = returnInt<Human>({ name: 'xiaozhang', age: 24 })




function returnArray<T>(array: T[]): T[] {
    return array
}
let a = returnArray<Human>([{ name: 'xiaozhang', age: 24 }])
//a:Human[]/Array<Human>

let ss: Array<string> = ['a', 'b', 'c']















//泛型和接口结合

interface add {
    (a: number, b: number): number,
}

interface anyAdd<T> {
    (a: T, b: T): T
}



let numberAdd: add = (a2: number, b2: number) => { console.log(123); return a2 + b2 }

numberAdd(1, 2)

let stringAdd: anyAdd<string> = (a2: string, b2: string): string => {
    return a2 + b2
}

let numberAdd2: anyAdd<number> = (a2: number, b2: number): number => {
    return a2 + b2
}





function create<T>(c: { new(): T }): T {
    return new c()
}


class Human2 { }
class Animation2 { }

let mamab1203 = create<Human2>(Human2)
console.log(mamab1203)