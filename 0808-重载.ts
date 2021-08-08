//重载： 一个函数有不同的调用方式
//不支持不同长度的-支持不同类型的参数


function add(n1: string, n2: string);
function add(n1: number, n2: number);
function add(n1, n2) {
    return n1 + n2
}


add(1, 2)
add('xiao', 'zhang')
//add('1',2)//-----第三个重载只是用来实现，不用做类型声明