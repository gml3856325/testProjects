console.log('===============  字符串模板 ==========');

let gml='gml';
let blog = '非常高兴你能看到这篇文章，我是你的老朋友'+gml+'。这节课我们学习字符串模版。';
document.write(blog);

let label = '高先生';
let blogs = `欢迎 ${label} 来到前端世界，<br/> 请你准备好开始学习啦 `

let num = 1;
let num1 = 2;
let result = `${num + num1}`

document.write(result);

document.write('indexof==> ',  blogs.indexOf(label), '======');
document.write('includes ==>', blogs.includes(label))
document.write('startswith', blogs.startsWith(label))
document.write('endsWith', blogs.endsWith(label))

console.log('复制', 'gml'.repeat(12));