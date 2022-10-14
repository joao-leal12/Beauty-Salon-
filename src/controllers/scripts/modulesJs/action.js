


 



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


// function Sliders(){ 

//     let state = { 

//         stateInitial:  0, 
//         lastposition: 0, 
//         currentSlideposition: 0, 
//         stateMoveUp: -567  
    
//     } 

//      SetListeners()


// } 
 
class SliderAction { 

    constructor() { 

        this.stateInitial=  0;
        this.lastposition= 0;
        this.currentSlideposition= 0;
        this.stateMoveUp= -567; 

    }

    Slider() { 

        return document.querySelector('[data-slide="slider"]')

    }
    SetListeners(){ 
        const slider = this.Slider(); 
    
        slider.addEventListener('mousedown', this.onMouseDown);
        slider.addEventListener('mouseup', this.onMouseUp);  
        slider.addEventListener('mouseleave', this.onMouseLeave)
        slider.addEventListener('dragstart', this.DragStart); 
    
    } 

    onMouseDown(e){ 
        
        this.stateInitial = e.clientX 
        this.currentSlideposition = e.clientX - this.lastposition; 
        e.currentTarget.addEventListener('mousemove', this.onMouseMove)  
    } 
    
    onMouseMove(e){ 
        
        let position;  
        let validation = e.clientX - this.currentSlideposition

        if(validation > -800 && validation < 100){ 
        position = e.clientX - this.currentSlideposition; 
        SlideItem(position, e,0);   
        } 
     }


     onMouseUp(e){  
       
        let validation = e.clientX - this.currentSlideposition;  
        this.stateMoveUp  = this.stateMoveUp == -567? 5 : -567

 
        if(validation < -567){
                position == position == null? -567 : position; 
            SlideItem(-567, e, 100)
            
            }else if(validation > 5){ 
                
                SlideItem(5, e, 100)
            }else if(validation < 5 && validation > -567){ 
                
                
                SlideItem(this.stateMoveUp, e, 100)   
            
            }
            e.currentTarget.removeEventListener('mousemove', this.onMouseMove);

    }
    onMouseLeave(e){  
        e.currentTarget.removeEventListener('mousemove', this.onMouseMove); 
    }
     DragStart(e){ 

        e.preventDefault();   
    } 
    SlideItem(position, item, transition ){ 
        this.lastposition = position; 
        item.currentTarget.style.transition = `${transition}ms`
        item.currentTarget.style.transform = `translateX(${position}px)` 
    }

}

export const SlidesAction = new SliderAction(); 







// function Slider(){return document.querySelector('[data-slide="slider"]');}
// function SetListeners(){ 
//     const slider = Slider(); 

//     slider.addEventListener('mousedown', onMouseDown);
//     slider.addEventListener('mouseup', onMouseUp);  
//     slider.addEventListener('mouseleave', onMouseLeave)
//     slider.addEventListener('dragstart', DragStart); 

// } 

//     function onMouseDown(e){ 
        
//         state.stateInitial = e.clientX 
//         state.currentSlideposition = e.clientX - state.lastposition; 
//         e.currentTarget.addEventListener('mousemove', onMouseMove)  
//     }
//     function SlideItem(position, item, transition ){ 
//         state.lastposition = position; 
//         item.currentTarget.style.transition = `${transition}ms`
//         item.currentTarget.style.transform = `translateX(${position}px)` 
//     }
//     function onMouseMove(e){ 
//         let position;  
//         let validation = e.clientX - state.currentSlideposition

//         if(validation > -800 && validation < 100){ 
//         position = e.clientX - state.currentSlideposition; 
//         SlideItem(position, e,0);   
//         }


//     }
//     function onMouseUp(e){  
       
//         let validation = e.clientX - state.currentSlideposition;  
//             state.stateMoveUp  = state.stateMoveUp == -567? 5 : -567


//             console.log(validation); 
//         if(validation < -567){
//                 position == position == null? -567 : position; 
//             SlideItem(-567, e, 100)
            
//             }else if(validation > 5){ 
                
//                 SlideItem(5, e, 100)
//             }else if(validation < 5 && validation > -567){ 
                
                
//                 SlideItem(state.stateMoveUp, e, 100)   
            
//             }

//             console.log(validation)


//             e.currentTarget.removeEventListener('mousemove', onMouseMove);

//     }
//     function onMouseLeave(e){  
//         e.currentTarget.removeEventListener('mousemove', onMouseMove); 
//     }

//     function DragStart(e){ 

//         e.preventDefault();   
//     } 


    
export function ActionsMenu(cards){ 
    
    ActiveMenuOnClick(); 
    closeMenuOnClick() ; 
    CreateElement(cards);   
    onScroll();    
  

} 