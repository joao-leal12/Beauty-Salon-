import elements from './Listeners.js';  
 
 

export function ActionsMenu(cards){ 
    
    ActiveMenuOnClick(); 
    closeMenuOnClick() ; 
    CreateElement(cards);   
    onScroll();   
    
} 



function ActiveMenuOnClick(){ 

    const BtnOpen = document.querySelector('[data-open]')

    BtnOpen.addEventListener('click',openMenu)

} 


function openMenu() { 

        document.body.classList.add('menu-expand'); 

} 


function closeMenuOnClick(){ 

    const btnClose = document.querySelector('[data-close]'); 

    btnClose.addEventListener('click', CloseMenu)


} 


function CloseMenu(){ 

    document.body.classList.remove('menu-expand'); 

} 
 

function onScroll(){  

    changeStyleNavonScroll()
    InitializeActive()
    window.addEventListener('scroll',() => { 
    
        changeStyleNavonScroll()
        changedStyleLinkonScroll(calltoAction); 
        changedStyleLinkonScroll(about); 
        changedStyleLinkonScroll(services); 
        changedStyleLinkonScroll(depositions); 
        changedStyleLinkonScroll(contact); 
        
        
        

       
    } )
    
}

function dataActiveMenu(Container){ 

    
    return { 
        
      targetLine : window.innerHeight / 2 + scrollY, 
      top: Container.offsetTop, 
      bottom: Container.offsetTop + Container.offsetHeight  
    }


}

function changedStyleLinkonScroll(section) {  

    let data = dataActiveMenu(section)  

    const {targetLine, top, bottom} = data; 
    const {id} = section; 
    
    InitializeActive()

     if(targetLine >= top && targetLine < bottom){ 

         document.querySelector(`a[href="${"#" + id}"]`).classList.add('active'); 
        

     }else if(targetLine > bottom){ 

         document.querySelector(`a[href="${"#" + id}"]`).classList.remove('active');

     }else { 

         document.querySelector(`a[href="${"#" + id}"]`).classList.remove('active')
     }





}

 
function InitializeActive(){ 
   
    if(scrollY == 0){ 

        document.querySelector(`a[href="#calltoAction"]`).classList.add('activeTwo')  
        document.querySelector(`a[href="#calltoAction"]`).classList.remove('active')  

    }else{ 
        document.querySelector(`a[href="#calltoAction"]`).classList.remove('activeTwo') 
    }

}



function changeStyleNavonScroll(){ 

    if(scrollY > 0){ 

        nav.classList.add('scroll'); 

    }else{ 

        nav.classList.remove('scroll'); 
    }

}
 
function CreateElement(cards){ 
    const ContainerCard = document.querySelector('[data-containerCard]'); 
   
    cards.map(card => { 

        const div = document.createElement('div'); 
        div.classList.add('services__cards__card'); 


        div.innerHTML = `

            ${card.icon}
            <h3 class="services__card__title">${card.title}</h3>
            <p class="services__card__paragraph">${card.paragraph} </p>
        
        ` 

        ContainerCard.appendChild(div);


    })
    
}

export const SliderAction  = { 

    start() { 
        
        elements.Get.call(this); 
        
        elements.State.call(this); 
        
        elements.Listeners.call(this); 
         
        
    }, 
    onMouseDown(e){ 
    
        this.stateInitial = e.clientX 
        this.currentSlideposition = e.clientX - this.lastposition; 
        e.currentTarget.addEventListener('mousemove', this.onMouseMove)  
    },
    SlideItem(position, item, transition ){ 
        this.lastposition = position; 
        item.currentTarget.style.transition = `${transition}ms`
        item.currentTarget.style.transform = `translateX(${position}px)` 
    },
    onMouseMove(e){ 
        let position;  
        let validation = e.clientX - this.currentSlideposition

        if(validation > -800 && validation < 100){ 
        position = e.clientX - this.currentSlideposition; 
            this.SlideItem(position, e,0);   
        }

    
    },
    onMouseUp(e){  
    let validation = e.clientX - this.currentSlideposition;  
        this.stateMoveUp  = this.stateMoveUp == -567? 5 : -567;  
    if(validation < -567){
            position == position == null? -567 : position; 
        this.SlideItem(-567, e, 100)
        
        }else if(validation > 5){ 
            
            this.SlideItem(5, e, 100)
        }else if(validation < 5 && validation > -567){ 
            
            
            this.SlideItem(this.stateMoveUp, e, 100)   
        
        }
    

        e.currentTarget.removeEventListener('mousemove', this.onMouseMove);

    },
     onMouseLeave(e){  
        e.currentTarget.removeEventListener('mousemove', this.onMouseMove); 
    },
     DragStart(e){ 
    
        e.preventDefault();   
    } 


}

 

