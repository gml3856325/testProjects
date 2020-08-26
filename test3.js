// 扩展运算符和reset运算符
console.log('================ 扩展运算符和reset运算符 ===============')

function reset(a,b,c){
	console.log(a);
	console.log(b);
	console.log(c);
	//console.log(d);
}

function resetone(...arg){
	console.log(arg[0]);
	console.log(arg[1]);
	console.log(arg[2]);
	console.log(arg[3]);
}

reset(1, 2, 3);
resetone('a','b','c')

let arr1=['www','jspang','com'];
let arr2=arr1;
console.log(arr2);
arr2.push('shengHongYu');
console.log(arr1);


let arr11=['www','jspang','com'];
//let arr2=arr1;
let arr22=[...arr11];
console.log(arr22);
arr22.push('shengHongYu');
console.log('arr22', arr22);
console.log('arr11',arr11);

function jspang(first,...arg){
    console.log(arg.length);
}

jspang(0,1,2,3,4,5,6,7);

function jspang1(first,...arg){
    for(let val of arg){
        console.log('循环' + val + '个');
    }
}

jspang1(0,1,2,3,4,5,6,7);


