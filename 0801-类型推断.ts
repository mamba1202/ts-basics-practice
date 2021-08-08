function add1(n1: string, n2: string) {
    return n1 + n2
}


let s = add1('mamba', '24')
console.log(s.split(''))

// let s1 = 1
// s1.split('')



//类型兼容--节约类型个数

interface human {
    name: string,
    age: number
}

// let x: human = { name: 'mamba', age: 24 ,gender: 1}

let y = { name: 'mamba', age: 24, gender: 1 }
let x: human = y





//soundness---完备，健全
//类型系统的特征
