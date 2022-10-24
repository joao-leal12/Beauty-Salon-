
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
function startSlider() { 

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


}


function ShowSection(container){ 

    const {targetLine, top} = dataActiveMenu(container); 
    console.log(container.offsetTop); 
    console.log(container);

    if(targetLine >= top){ 

        console.log('Entrei aqui')
        
        container.classList.remove('hideSection'); 
        container.classList.add('showSection')

    }




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
        ShowSection(calltoAction)
        ShowSection(about)
        ShowSection(depositions)
        ShowSection(services)
        ShowSection(contact)
        
        

       
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

function AddStyleonTarget(){ 

    changeStyleNavonScroll()
    changedStyleLinkonScroll(calltoAction); 
    changedStyleLinkonScroll(about); 
    changedStyleLinkonScroll(services); 
    changedStyleLinkonScroll(depositions); 
    changedStyleLinkonScroll(contact); 
    ShowSection(calltoAction)
    ShowSection(about)
    ShowSection(depositions)
    ShowSection(services)
    ShowSection(contact)
    
}

    
export function ActionsMenu(cards){ 
    
    ActiveMenuOnClick(); 
    closeMenuOnClick() ; 
    CreateElement(cards);   
    onScroll();    
    startSlider();
    AddStyleonTarget();

} 