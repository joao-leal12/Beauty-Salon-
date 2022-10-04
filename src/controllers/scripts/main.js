
import {ActionsMenu} from './modulesJs/action.js'; 
import {cards} from '../scripts/modulesJs/createEl.mjs'; 

ActionsMenu(cards) 


function Slider() { 

    let Comments = document.querySelector('[data-name="comment"]'); 

    
    Comments.addEventListener('dragstart', (e) => { 
        e.preventDefault()
    }); 

    Comments.addEventListener('mousedown', () => { 

        Comments.addEventListener('mousemove', teste)
 
    }) 


    Comments.addEventListener('mouseup', () => { 

        Comments.removeEventListener('mousemove', teste)


    })
  
    
} 
 


function teste() { 
    
    console.log('ativado')
}




function preventDefault(e) { 

    e.preventDefault(); 
}
 
Slider(); 