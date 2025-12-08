//conditional statement
//if 
a=5;
if(a%2===0){
    console.log("a is even");
}
//if.else
    if(a%2===0){
        console.log("a is even");
    }
    else{
        console.log("a is odd");
    }
    //else.if
    var marks = 90;
    if(marks>=90){
        console.log("O");
    }
    else if(marks>=70){
        console.log("A");
    }
    else if(marks>=50){
        console.log("B");
    }
    else{
        console.log("Fail");
    }

    //switch
    var day = 1;
    switch(day){
        case 1: {
            console.log("Sunday");
            break;
        }
        case 2:{
            console.log("Monday");
            break;
        }
        case 3: {
            console.log("Tuesday");
            break;
        }
        case 4:{
            console.log("wednesday");
            break;
        }
        case 5:{
            console.log("Thursday");
            break;
        }
        case 6:{
             console.log("Friday");
            break;
        }
        case 7:{
            console.log("Saturday");
            break;
        }
        default:{
            console.log("Invalid");
    }
}
//ternary operator
var marks = 90;
var result = marks>=90 ? "Grade O" : marks>=70 ? "Grade A" : marks>=50 ? "Grade B" : "Fail";
console.log(result);


//function
function add(){
    console.log(10+20);
}
add();

//function with parameter
function addParam(a,b){
    console.log(a+b);
}
add(10,20);

//arrow function
var addParam=(a,b)=>{
    console.log(a+b);
}
addParam(10,20);
console.log(typeof addParam);

//spread operator
const a=[10,20,30];
const b=[...a,40,50];
console.log(a);
console.log(b);

//destructing operator
//array
//const[name,age,marks]=["harini",19,90];
console.log(name);
console.log(age);
console.log(marks);

//object
const[name,age,marks]={
    name:"harini",
    age:19,
    marks:90
}
console.log(name);
console.log(age);
console.log(marks);

