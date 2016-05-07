/*function to get a random word and replace all the words of length from the editor*/

 function Randomize(){
  var link= "http://randomword.setgetgo.com/get.php";
  $.ajax({                  //accessing server-side code using ajax
      type: "GET",
      url: link,
      dataType: "jsonp",
      jsonpCallback: 'RandomWordComplete'    //callback function
      });
  }
function RandomWordComplete(data)
{
   alert(data.Word);
   $("#main > p").each(function() {          // for each element run this loop
      $(this).html($(this).html().replace(/\b[a-zA-Z]{4}\b/g,data.Word)); //to find and replace the word
        });
}

/********************************************** END *************************************************/
