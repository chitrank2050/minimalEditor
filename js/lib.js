/* Function to enter a new para on press of enter*/
$(document).on("keypress", ".editArea", function (e) {
       if (e.keyCode === 13) {
           e.preventDefault();
           $("<p class='draggable' id='para'>" + content + "</p>").insertBefore("p.new-content");
       }
   });

/********************************************** END *************************************************/
