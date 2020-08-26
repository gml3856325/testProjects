// 基本js测试
console.log('================  let const 变量 ===============')
var a = 0;


// 全局声明变量
window.onload=function(){
	console.log(a);
}

// 局部声明变量

{
	let b = 1232323;
}

// 循环变量
for(let i=0;i<10;i++){
console.log('循环体中:'+i);
}


// let主要目的是为了防止数据污染，var 在全局变量中声明会有数据污染的风险
// console.log('循环体中:'+i);


// const使用方式 const是常量 一般不能改变
const b = 'gml'
 
 const myconstObject = { myConst : {  myconstObjects: 2 }};
 
 Object.freeze(myconstObject);
 myconstObject.myConst = 3
// console.log('b',b);
console.log('mycost', myconstObject.myConst);

let callbacks;
 callbacks = [];
for (let i = 0; i < 4; i++) {
  callbacks.push(() => console.log(i));
}
 
callbacks[0]();
callbacks[1]();
callbacks[2]();
callbacks[3]();
