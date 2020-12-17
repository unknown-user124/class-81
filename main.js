studentARRAY=[];
var displayStudentARRAY=[];
function submit() {
    for (var i=1;i<=4;i++){
        var name1=document.getElementById("student"+i).value;
        console.log (name1);
        studentARRAY.push(name1);
    
    }
var lengthvar=studentARRAY.length;
console.log (lengthvar);
for (var k=0;k<lengthvar;k++){
    displayStudentARRAY.push("<h1>name-"+studentARRAY[k]+"</h1>");
    console.log (displayStudentARRAY)
}

   

    console.log (studentARRAY);
    document.getElementById("divTAG").innerHTML=displayStudentARRAY;

    var nocomma=displayStudentARRAY.join(" ");
    console.log (nocomma);
    document.getElementById("divTAG2").innerHTML=nocomma;

document.getElementById("button1").style.display = "none";
 document.getElementById("button2").style.display = "inline-block";


}
function sorting() {
    var sortingtime=[];
    studentARRAY.sort();
    console.log (sortingtime);
    var lengthvar1=studentARRAY.length;
console.log (lengthvar1);
for (var k=0;k<lengthvar1;k++){
    sortingtime.push("<h1>name-"+studentARRAY[k]+"</h1>");
    console.log (sortingtime)
}
var nocomma=sortingtime.join(" ");
console.log (nocomma);
document.getElementById("divTAG2").innerHTML=nocomma;
   

  
}
function newUpdate(){
    document.getElementById("divTAG2").innerHTML="<h1>"+studentARRAY+ "</h1>";
   

}
