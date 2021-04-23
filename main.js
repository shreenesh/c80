var nameofthestudentarray = [];
function submit(){
    var displaystudentarray=[];
    for(var j=1; j<=4;j++)
 {var name=document.getElementById("name_of_the_student_"+j).value ;
nameofthestudentarray.push(name);
}
var l=nameofthestudentarray.length;
for(var k=0;k<l;k++){
    displaystudentarray.push("<h4>"+nameofthestudentarray[k]+"</h4>");
}
document.getElementById("display_name_with_commas").innerHTML =displaystudentarray;

}