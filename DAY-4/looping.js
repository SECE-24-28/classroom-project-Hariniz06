//for loop
/*syntax
for(initialization;Condition;increment/decrement){
    //statement
}*/
for(let i=1;i<=10;i++){
    console.log(i);
}

//while loop
var a=0;
while(a!==5){
    a++;
    console.log(a);
}
console.log(a);

//do-while
a=0;
do{
    console.log(a);
}while(a===1);

//for..in(index values)
var arr=[1,2,3,4,5];
for(let i in arr){
    console.log(i);
}

//for..of(values)
for(let j of arr){
    console.log(j);
}
//for each
arr.forEach((val,index)=>{
    console.log(val,index)
})

//object and class

class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(this.name);
        console.log(this.age);
    }
}
var p1=new person("Harini",19);
p1.display();


//prime
var a=10;
var flag=true;
if(a<=1)flag=false;
else{
    for(let i=2;i<=a/2;i++){
        if(a&i==0){
            flag=false;
            break;
        }
    }
}
const result=flag==true?"Prime":"Not Prime";
console.log(result);

//palindrome
var a=11011
b=a;
var rev=0;
while(a!==0){
    var rem =Math.floor(a%10)
    rev =rev*10+a%10;
    a=Math.floor(a/10);
}
if(rev===b){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}

//global scope
let a=10;
if(true){
    let b=20;//block scope
    console.log(a);
}
console.log(a,b);

//hoisting
console.log(a);
var a=10;

//for..in(object)
var obj = {
    name:"Raj",
    age:20,
    marks:90,
};


for(let i in obj){
    console.log(i,obj[i]);
}

//callback function
var demo=()=>{
    console.log("Hello World");
}

var main=(callback)=>{
    console.log("Main Called");
    callback();
}

 main(demo);