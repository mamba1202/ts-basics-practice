interface Human {
    name: string,
    age: number
}


function fn(this: Human) {
    // console.log(this)
}


fn.call({ name: 'mamba', age: 24 })
// fn()




function fn1(this: any, n1: number) {
    console.log('fn1----->', this, n1)
    function fn2(this: any, n1: number) {
        console.log('fn2---->', this, n1)
    }

    fn2(19)
}

fn1.call({ name: 'mamba' }, 24)
