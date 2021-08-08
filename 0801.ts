function add(name: number, age?: number) {
    //age=18  默认值

    //arguments ={
    // 0: 100,
    // 1: 200,
    // length: 2
    // }
    // console.log(arguments)
    // console.log(`${name}${age}`)
}

add(100, 200)
add.call(undefined, 100, 200)  //xx.call(this,arguments)



function printThis() {
    'use strict'
    console.log(this, arguments)
}


//this是参数 每次调用都不同
// printThis.call('mamba',1,2) 加。
// printThis(1，2)   不加. //use strict--->undefined   浏览器--->window    node.js--->global对象

let mamba = printThis
mamba()






//箭头函数----->  没有this和arguments
// {
//     this
//     //三种形式 use strict--->undefined   浏览器--->window    node.js--->global对象
//     let fn = (a: number, b: number): number => {

//         //this--->外边的this
//         // return a + b + this
//     }
// }

{
    function f(){
        let fn =()=>{
            console.log(this)
        }

        fn()
    }

    f()
}



// apply bind=> call
// new=> 单独
// eval=>单独
// with=>单独