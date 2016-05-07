/* Custom JS file contains other functions*/
editArea=document.getElementsByClassName('editArea')[0];

container = document.getElementById('container');

container.addEventListener('mouseup',function(){showEditBox()}); //adding Event listener for tooltip
container.addEventListener('keyup',function(){showEditBox()});   //adding Event listenr for tooltip

function showEditBox()           //function to show the tooltip
{
    txt=window.getSelection().toString();       //to take selected text and change in to string
    selection=window.getSelection();
    if(txt!="")                                   //if selected text is not null
    {
        menu.style='display:initial';              //show tooltip
        menu = document.getElementById('menu');
        textPosition=window.getSelection().getRangeAt(0).getBoundingClientRect();
        positionX=(textPosition.left+textPosition.right)/2-menu.offsetWidth/2;      //x and y axis position to show the tooltip
        positionY=textPosition.top-40;
        menu.style='display:initial;top:'+positionY+'px;left:'+positionX+'px;';     //applying css for the position
    }
    else
    {
        menu.style='display:0px';                 //if selected text is null, tooltip stay hidden
    }
}
/* Function Bold and underline command*/
function edit(action,argument)
{
     document.execCommand(action,false,argument);

}
/*function for forecolor command*/
function setColor()
{
    document.execCommand('foreColor', false, '#f44336');
}
/********************************************** END *************************************************/
