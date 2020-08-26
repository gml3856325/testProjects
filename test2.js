// 解构赋值
console.log('=============== 解构赋值 ===============');

// 数组解构
let [a1, [b1, b2], c1] =[1, [2, 4], 3]
console.log(a1);
console.log(b1);
console.log(b2);
console.log(c1);

let [foo = true] =[];
console.log(foo); 

let [name, age= 12] =['gml']
console.log(name, age);

let [names, ages= 12] =[undefined];
console.log(names, ages);

let [names1, ages1= 12] =[null];
console.log(names1, ages1);


// 对象解构
let {foo1,bar} = {foo1:'JSPang',bar:'gml'};
console.log(foo1, bar);


let foo2;
({foo2} ={foo2:'JSPang'});
console.log(foo2);

// 字符串解构
const [g, m,l]="gml";
console.log(g);
console.log(m);
console.log(l);
