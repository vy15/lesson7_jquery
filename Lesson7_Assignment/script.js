
/*
      Project Name:  Recipe Display Application
      
      Author: Valentin Yslas
      
      Date:   November 18, 2016

      Filename: index.html
*/

   
//displays the next element after the current target

/*global $*/

function display(event) {

   
$(event.currentTarget).next().fadeIn("slow");

}//end of display

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);