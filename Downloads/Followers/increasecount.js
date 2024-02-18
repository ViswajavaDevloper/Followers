let count=0;

function increasecount(){
count++;
displaycount();
countCheck();
}
function decreasecount(){
    count--; 
    displaycount();
}
function displaycount(){
    document.getElementById("countdisplay").innerHTML=count;
}
function countCheck(){
    if(count==10){
        alert("Congrats You have reached 10 Followers!!");
    }
    else if(count==20){
        alert("congrats YOu have reached 20 Followers!!");
    }
}