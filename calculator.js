function insertNumber(number)
{

var exist = $("#result").val();

$("#result").val( exist + number );





}

function clearNumber(){


$("#result").val(' ');




}


function calcNumber(){

 var result = eval($("#result").val());


$("#result").val(result);




}