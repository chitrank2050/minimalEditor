/*Custom JS to drag and drop the para*/

var dragMe = document.getElementById('para');
var withMe = document.getElementById('handle');

var dragRef = DragDrop.bind(dragMe, {
  anchor: withMe,
  boundingBox: 'offsetParent',
  dragstart: function(evt) {    //function to do when the drag start

  },
  drag: function(evt) {        //function to do when the dragging

  },
  dragend: function(evt) {     //function to do when drag ends

  }
});
/********************************************** END *************************************************/
