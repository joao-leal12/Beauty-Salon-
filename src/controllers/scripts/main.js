
import {ActionsMenu, SlidesAction} from './modulesJs/action.js'; 
import {cards} from '../scripts/modulesJs/createEl.mjs'; 

ActionsMenu(cards) 

// SlidesAction.SetListeners();  

let state = { 
    stateInitial:  0,
    lastposition: 0,
    currentSlideposition: 0,
    stateMoveUp: -567, 
}

 function Slider(){return document.querySelector('[data-slide="slider"]');}
 function SetListeners(){ 
     const slider = Slider(); 

     slider.addEventListener('mousedown', onMouseDown);
     slider.addEventListener('mouseup', onMouseUp);  
     slider.addEventListener('mouseleave', onMouseLeave)
     slider.addEventListener('dragstart', DragStart); 

 } 

     function onMouseDown(e){ 
        
         state.stateInitial = e.clientX 
         state.currentSlideposition = e.clientX - state.lastposition; 
         e.currentTarget.addEventListener('mousemove', onMouseMove)  
     }
     function SlideItem(position, item, transition ){ 
         state.lastposition = position; 
         item.currentTarget.style.transition = `${transition}ms`
         item.currentTarget.style.transform = `translateX(${position}px)` 
     }
     function onMouseMove(e){ 
         let position;  
         let validation = e.clientX - state.currentSlideposition
            
         if(validation > -800 && validation < 100){ 
         position = e.clientX - state.currentSlideposition;  
         SlideItem(position, e,0);   
         }


     }
     function onMouseUp(e){  
         e.currentTarget.removeEventListener('mousemove', onMouseMove);
       
         let validation = e.clientX - state.currentSlideposition;  
             state.stateMoveUp  = state.stateMoveUp == -567? 5 : -567

         if(validation < -567){
            
             SlideItem(-567, e, 100)
            
             }else if(validation > 5){ 
                
                 SlideItem(5, e, 100)
             }else if(validation < 5 && validation > -567){ 
                
                 SlideItem(state.stateMoveUp, e, 100)   
            
             }


     }
     function onMouseLeave(e){  
         e.currentTarget.removeEventListener('mousemove', onMouseMove); 
     }

     function DragStart(e){ 

         e.preventDefault();   
     }  


     SetListeners(); 