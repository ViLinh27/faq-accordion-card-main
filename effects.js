var accordion = document.getElementsByClassName("accordion");//get each accordion component

var i;//iterator to go through each accordion

for(i = 0;i< accordion.length;i++){
    accordion[i].addEventListener("click",function(){
        /*
            toggle between adding and removing "active class".
            toggle helps hilight button that controls the panel.
         */

         this.classList.toggle("active");

         /*toggle between hiding and showing active panel: */
         var panel = this.nextElementSibling;
         if(panel.style.display === "block"){
            panel.style.display = "none";
         }
         else{
             panel.style.display = "block";
         }
    });
}
