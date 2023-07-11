// document.getElementById("demo")
// document.getElementsByClassName()
// document.getElementsByTagName()

// function syntax:
// innerHTML()
//document.write
// windows.alert() or alert()
// // console.log()

// function paragraph(){
// //         //block of code
//        document.getElementById("demo").innerHTML="My name is gayu" ;

// function font(){
//     document.getElementById("demo").style.fontSize="35px";
// }
// function visible(){

// }
// alert(7+4);
// console.log(6+5);








// datatypes?
// let a=5;
// var b=6;
// const c=7;

// adding  to numbers

// var x = 5;
// var y = 5;
// var z = x + y;
// console.log(z);
// // document.write(z)
// document.getElementById("add").innerHTML = z;

function Add(){
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c = a+b;
    document.getElementById("add").innerHTML = c;
}
function SUB(){
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c = a-b;
    document.getElementById("sub").innerHTML = c;
}
function Multiple(){
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c = a*b;
    document.getElementById("multiple").innerHTML = c;
}
function Div(){
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c = a/b;
    document.getElementById("div").innerHTML = c;
}
