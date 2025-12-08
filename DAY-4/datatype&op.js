//var a;// Global Scope(Redeclaration,Reinitialization)
//a=10;
//var a=20;

//let b;//Block Scope(Reinitialization)
//b=10;
//b=20;

//const c=10;//Block Scope(Redeclare and reinitialization can not be performed)

//Datatypes
//var p=20;//no
//var q="Hello";//string
//var b="20";//string
//var bool=true;//boolean
//var r;//undefined
//var s=null;//null

//var arr=[1,2,3,4,5];//array
//console.log(arr);
 
//var object={//object
   // name:"Harini",
    //age:19
//}

//arithematic operator
var a=10;
var b=20;
var c="15";
console.log(a+c);
console.log(a-b);
console.log(a*b);
console.log(a/c);
console.log(a%b);

//Relational operator
console.log(a>b);
console.log(a<c);
console.log(a>=c);
console.log(a<=b);
console.log(a==c);
console.log(a!=b);
console.log(a===b);//to check data type
console.log(a!==b);

//Assignment operator
p=15;
console.log(p);
p+=10;
console.log(p);
p-=5;
console.log(p);
p*=6;
console.log(p);
p/=3;
console.log(p);
p%=1;
console.log(p);

//logical operators
q=true;
s=false;
console.log(q&&s);
console.log(q||s);
console.log(!s);

//ternary operator
a=2;
var result=(a%2==0)?"Even":"Odd";
console.log(result);

//ternary operator
var marks = 90;
var result = marks>=90 ? "Grade O" : marks>=70 ? "Grade A" : marks>=50 ? "Grade B" : "Fail";
console.log(result);


