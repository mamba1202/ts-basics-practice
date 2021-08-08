enum Gender {
    Man,
    Woman
}


let gender: Gender = Gender.Woman

// console.log(gender)


let n: any = '123'
// console.log((<string>n).split(''))
// console.log((n as string).split(''))

let s1: number = 1
// let b1:boolean  = Boolean(s1)
let b1: boolean = !!s1
// console.log(b1)



let obj = {
    name: 'mamba',
    age: 24
}

let str = JSON.stringify(obj)
// console.log(typeof str)
interface Shape {
    head: string,
    body: string
}


interface Human {
    name: string,   //readonly name: string, 只读属性
    age: number,
    shape: Shape,
    likedGame?: Array<string>
    say(word: string): void
}

let mamba: Human = {
    name: '', age: 18,
    shape: { head: 'O', body: '[]' },
    say(word: string){console.log(word) }
}
mamba.name = 'mamba'
mamba.age = 24


mamba.say('im mamba')
console.log(mamba)