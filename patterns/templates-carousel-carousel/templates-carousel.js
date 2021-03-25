class Carousel {
    constructor(element) {
        this.currentSlide = {position: 1};
        this.element = element;
        this.id = element.id;
        this.links = this.element.querySelectorAll('.c-carousel__dot');
        this.next = this.element.querySelector('.c-carousel__next');
        this.prev = this.element.querySelector('.c-carousel__prev');
        this.carouselItems = this.element.querySelectorAll('.c-carousel__item');
        this.init();
    }

    init () {
        this.next.addEventListener('click', (ev) => { this.updateCurrentSlide(ev, true)});
        this.prev.addEventListener('click',  (ev) => { this.updateCurrentSlide(ev, false)});
        this.handleDotModifier();
    }

    updateCurrentSlide(ev, isNext) {
        if(isNext) {
            if(this.currentSlide.position < this.carouselItems.length){
                this.currentSlide.position += 1;
            } else {
                this.currentSlide.position = 1;
            }
        } else {
            if(this.currentSlide.position > 1){
                this.currentSlide.position -= 1;
            } else {
                this.currentSlide.position = this.carouselItems.length;
            }
        }

        this.handleDotModifier();
        this.triggerDotClick();
    }

    handleDotModifier() {
        this.links.forEach( (elem, ind) => {
            elem.classList.remove('c-carousel__dot--active');
        })
        this.links[this.currentSlide.position - 1].classList.add('c-carousel__dot--active');
    }
    
    triggerDotClick() {
        console.log(this.links[this.currentSlide.position - 1]);
        this.links[this.currentSlide.position - 1].click(); 
    }
}

window.onload = function() {
    document.querySelectorAll('.c-carousel').forEach( (elem) => {
        new Carousel(elem);
    });
};
