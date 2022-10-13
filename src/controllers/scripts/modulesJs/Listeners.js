
export default{  
    
    State() { 
        this.stateInitial=  0; 
        this.lastposition= 0; 
        this.currentSlideposition = 0; 
        this.stateMoveUp= -567;
  

    },

    Get(){ 
        this.slider =  document.querySelector('[data-slide="slider"]'); 

    },  
    Listeners(){ 
        this.slider.onmousedown = (e) => this.onMouseDown(e); 
        this.slider.onmouseup = (e) => this.onMouseUp(e); 
        this.slider.onmouseleave = (e) => this.onMouseLeave(e); 
        this.slider.dragstart = (e) => this.DragStart(e); 
    }

}