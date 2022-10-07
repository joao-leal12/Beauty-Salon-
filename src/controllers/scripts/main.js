
import {ActionsMenu} from './modulesJs/action.js'; 
import {cards} from '../scripts/modulesJs/createEl.mjs'; 

ActionsMenu(cards) 

function State(){ 

    return { 
       
        stateInitial: 0, 


    }
}


function SetListeners(){ 
    const slider = Slider(); 

    slider.addEventListener('mousedown', onMouseDown);
    slider.addEventListener('mouseup', onMouseUp);  
    slider.addEventListener('mouseleave', onMouseLeave)
    slider.addEventListener('dragstart', DragStart); 

} 
function Slider(){return document.querySelector('[data-slide="slider"]');}
 
let state = { 

    stateInitial:  0 
}

function onMouseDown(e){ 
 
    
    state.stateInitial = e.clientX 

    e.currentTarget.addEventListener('mousemove', onMouseMove)  
    

}
function SlideItem(position, item ){ 
 
    item.style.transform = `translateX(${position}px)`

 
}
function onMouseMove(e){ 
    console.log('Não estou ativando')
    const {stateInitial} = state; 
    SlideItem(stateInitial - e.clientX, e.currentTarget)

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