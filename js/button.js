/* function to find links present in the editor
                 and
   append them as link in another div*/
$("#done").click(function() {
  var text = "";
  $("#main > p").each(function(index, element){   //loop to each p tag and extract text
  	text += $(element).text();
  });
  var anchor = text.match(/(<a.*?\/a>)/g);       //used regelar expression to match <a>..</a>
  $("#anchorBox").removeClass();                 //remove any class present
  $("#anchorBox").html("");                     //anchorBox clears after each button press
	if (anchor != null) {
		anchor.forEach(function(value, index) {
			value = value.match(/>.*</g)[0].replace(">", "").replace("<", ""); //remove the sign < and > by blank space
      $("#anchorBox").append("<a href='#'>" + value + "</a>&nbsp;");      //extracting value and appending them in anchorBox
      $("#anchorBox").addClass("bg-success");  //change background of the anchorBox to show success
		});
	}
  else {
    $("#anchorBox").html("No links Present"); //messgae when no link present
    $("#anchorBox").addClass("bg-danger");
  }
});
/****************************End*****************************/
