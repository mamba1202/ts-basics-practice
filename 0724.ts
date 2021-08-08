// // interface 二则运算 {
// //     (a: number, b: number): number
// // }

// // let a: 二则运算 = function (d: number): number {
// //     return d
// // }

// // console.log(a(1,2))


// interface 有机物 {
//     c: boolean,
//     h: boolean,
//     o: boolean,
//     a: string
// }


// interface animal {
//     move(): void,
//     a: string
// }

// interface man extends animal, 有机物 {
//     name: string;
//     age: number
// }


// let mamba1202: man = {
//     move() {
//         console.log(123)
//     },
//     name: 'mamba',
//     age: 123,
//     c: true,
//     h: true,
//     o: true,
//     a: '123'
// }

// mamba1202.move()



interface InterfaceA {
    num: number,
    b: boolean,
    str: string,
    optional?: string,
    add(n1: number, n2: number): number,
    readonly r: string

}

let mamba1201: InterfaceA = {
    num: 1,
    b: true,
    str: '123',
    add(n1: number, n2: number): number{
        console.log(n1+n2)
        return n1+n2
    },
    r: '1'
}

mamba1201.add(1,2)