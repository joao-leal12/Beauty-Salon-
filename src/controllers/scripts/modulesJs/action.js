


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
    window.addEventListener('scroll',changeStyleNavonScroll )
 
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


