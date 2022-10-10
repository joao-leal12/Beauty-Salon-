
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
   

    item.currentTarget.style.transition = '100ms'
    item.currentTarget.style.transform = `translateX(${position}px)` 
}
function onMouseMove(e){ 
    let position; 
    if(e.clientX - state.currentSlideposition > -567 && e.clientX - state.currentSlideposition < 5){ 
     position = e.clientX - state.currentSlideposition; 
    
    }else if(e.clientX - state.currentSlideposition > 5){ 

        position = 5 ;  

    }else { 
        position = -567; 
    }
     
  
    SlideItem(position, e); 
    
}
function onMouseUp(e){  
   
    e.currentTarget.removeEventListener('mousemove', onMouseMove); 
    if(e.clientX != state.stateInitial && e.clientX - state.currentSlideposition > -567 && e.clientX - state.currentSlideposition < 5 ){ 
            
        SlideItem(-567, e)

    }else if(e.clientX != state.stateInitial && e.clientX - state.currentSlideposition <= -567){ 

        SlideItem(5, e); 
    }
}
function onMouseLeave(e){  
    e.currentTarget.removeEventListener('mousemove', onMouseMove); 
}
function DragStart(e){ 
   
    e.preventDefault();   
} 


SetListeners(); 