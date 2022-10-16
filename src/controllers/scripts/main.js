
import {ActionsMenu} from './modulesJs/action.js'; 
import {cards} from '../scripts/modulesJs/createEl.mjs'; 

ActionsMenu(cards) 


//Agora vamos para tirar o opacity... 

let statesElements = { 

    targetLine : window.innerHeight / 2 + scrollY, 
    top: about.offsetTop, 
    bottom: Container.offsetTop + Container.offsetHeight  

}
function dataActiveMenu(Container){ 

    
    return { 
        
      targetLine : window.innerHeight / 2 + scrollY, 
      top: Container.offsetTop, 
      bottom: Container.offsetTop + Container.offsetHeight  
    }


}

function ShowSection(container){ 

    const {targetLine, top, bottom} = dataActiveMenu(container); 
    
    

    console.log(targetLine, 'TargetLine') 
    console.log(top); 
    if(targetLine >= top){ 

        console.log('Entrei aqui')
        
        container.classList.remove('hideSection'); 
        container.classList.add('showSection')

    }

    


} 

