
import {ActionsMenu} from './modulesJs/action.js'; 
import {cards} from '../scripts/modulesJs/createEl.mjs'; 

ActionsMenu(cards) 




function SetListeners(){ 
    const slider = Slider(); 

    slider.addEventListener('mousedown', onMouseDown);
    slider.addEventListener('mouseup', onMouseUp);  
    slider.addEventListener('mouseleave', onMouseLeave)
    slider.addEventListener('dragstart', DragStart); 

} 
function Slider(){return document.querySelector('[data-slide="slider"]');}
 
let state = { 

    stateInitial:  0, 
    lastposition: 0, 
    currentSlideposition: 0, 

}

function onMouseDown(e){ 
   
    state.stateInitial = e.clientX 
    state.currentSlideposition = e.clientX - state.lastposition; 
    e.currentTarget.addEventListener('mousemove', onMouseMove)  
}
function SlideItem(position, item ){ 
    state.lastposition = position; 
    item.style.transform = `translateX(${position}px)` 
}
function onMouseMove(e){ 
    
     
    SlideItem(e.clientX - state.currentSlideposition, e.currentTarget); 
    
}
function onMouseUp(e){   
    e.currentTarget.removeEventListener('mousemove', onMouseMove); 
}
function onMouseLeave(e){  
    e.currentTarget.removeEventListener('mousemove', onMouseMove); 
}
function DragStart(e){ 
   
    e.preventDefault();   
    console.log('Ativei')
} 


SetListeners(); 