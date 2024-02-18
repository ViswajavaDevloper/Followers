let likes=0;
let dislikes=0;
function likeincrease(){
     ++likes;
     display();
     countcheck();
}
function dislikeincrease(){
   dislikes++;
   display();
//document.getElementById('dislike').innerHTML= dislikes;
}
  function display(){
  
   document.getElementById('like').innerHTML=likes;
   document.getElementById('dislike').innerHTML=dislikes;
  }
  function countcheck(){
   if(likes==11) {
      alert("Congrats You have Reached 10 Likes!");
   }
   else if(likes==21){
      alert("Congrats You have Reached 20 Likes!!");
  }
  }