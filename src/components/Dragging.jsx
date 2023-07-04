import React, {useEffect} from 'react';
import {Box} from "@chakra-ui/react";

const Dragging = ({children,result,setResult,setHistory}) => {
    let currentDroppable=null;

    document.addEventListener('mousemove',onMouseMove);
        draggable.onmouseup=function () {
            draggable.style.display='none';
            document.removeEventListener('mousemove',onMouseMove);
            setHistory(draggable,innerHTML)
            draggable.onmouseup=null;
            draggable=null;
        }

    function enterDroppable(elem) {
        draggable.onmouseup=function () {
            draggable.style.display='none'
            setResult(eval(`${props.result} ${elem.innerHTML} ${draggable.innerHTML}`))
            document.removeEventListener('mousemove',onMouseMove);
            draggable.onmouseup=null;
            draggable=null;
            return;
        }
        draggable.style.cursor='copy'
    }

    function leaveDroppable(elem) {
        elem.style.badge='';
        draggable.style.cursor='default';
    }

    function moveAt(pageX,pageY) {
        draggable.style.left=pageX-draggable.offsetWidth/2 +'px';
        draggable.style.top=pageY-draggable.offsetHeight/2 +'px';
    }
    function onMouseMove(event) {
        moveAt(event.pageX,event.pageY);
        draggable.hidden=true;
        let elemBelow=document.elementFromPoint(event.clientX,event.clientY);
        draggable.hidden=false;
        if(!elemBelow) return;
        let droppableBelow=elemBelow.closest('.droppable');
        if (currentDroppable !==droppableBelow){
            if(currentDroppable){
                leaveDroppable(currentDroppable);
            }
            currentDroppable=droppableBelow;
            if(currentDroppable){
                enterDroppable(currentDroppable);
            }
        }

    }


    function drag(elem) {
        let draggable=elem.target



        draggable.onmousedown=function (event) {
         draggable.style.position='absolute';
         draggable.style.zIndex=15;
         document.body.append(draggable)
            moveAt(event.pageX,event.pageY);


        }
    }



    useEffect(()=>{
        const elements=Array.from(document.querySelectorAll('.draggable'))
        elements.map(e=>e.addEventListener('mouseenter',function (e) {
            drag(e)
        }))

    })
    return (
        <Box>
            {children}
        </Box>
    );
};

export default Dragging;
