//template literals
var age=19;
var name="harini"
var str=`harinis age is ${age}`
console.log(str);
console.log(`${name} age is ${age}`)

//map
var arr=[1,2,3,4,5];
var double=arr.map((num)=>(num*2));
console.log(double);

//filter
var even=arr.filter((num)=>(num%2==0));
console.log(even);

//reducer
var total=arr.reduce((sum,num)=>(sum+num),0);
console.log(total);

var evenCount=arr.map(num=>num*3).filter(num=>num%2==0).reduce((sum,num)=>(sum+1),0)
console.log(evenCount);

var student=[
    {name:"harini",
    marks:99},
    {name:"vinitha",
    marks:98},
    {name:"priya",
    marks:97
    }
]
var studentMark=student.filter(s=>s.marks>90);
console.log(studentMark);

var studentName=student.map(s=>s.name);
console.log(studentName);

var totalMarks=student.reduce((sum,s)=>(sum+s.marks),0)
console.log(totalMarks);

var avg=totalMarks/student.length;
console.log(avg)

//promise
/*const promise=new promise((resolve,reject)=>{
    var success=true;
    if(success){
        resolve("Success");
    }
    else{
        reject("Failed");
    }
})
promise.then((msg)=>console.log(msg))
.catch((err)=>console.log(err))
*/

//promise2
const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success");
    },2000)
})
promise.then((msg)=>console.log(msg))
.catch((err)=>console.log(err))

const getData=()=>{
    return fetch('https://jsonplaceholder.typicode.com/posts')
}
getData().then((res)=>res.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(err))