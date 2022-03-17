export default class Slider {
   constructor(selector, gap) {
      this.rootClassName = selector.substring(1);
      this.slider = document.querySelector(selector);
      this.wrapper = this.slider.querySelector(selector + '__wrapper');
      this.slides = this.wrapper.querySelectorAll(selector + '__slide')
      this.prevBtn = this.slider.querySelector(selector + '__prev')
      this.nextBtn = this.slider.querySelector(selector + '__next')
      this.currentSlide = 1;
      this.setState();
      this.gap = gap;

   }
   reset = () => {
      /* действи при ресайзе */
   }
   setState = () => {
      this.slides.forEach((el, i) => {
         if (i > this.currentSlide - 1) {
            el.classList.remove(this.rootClassName + '__slide--prev')
            el.classList.add(this.rootClassName + '__slide--next')
         }
         else if (i < this.currentSlide - 1) {
            el.classList.remove(this.rootClassName + '__slide--next')
            el.classList.add(this.rootClassName + '__slide--prev')
         }
         else {
            el.classList.remove(this.rootClassName + '__slide--next')
            el.classList.remove(this.rootClassName + '__slide--prev')
         }
      });
      this.currEl = this.slides[this.currentSlide - 1];
      this.prevEl = this.slides[this.currentSlide - 2];
      this.nextEl = this.slides[this.currentSlide];
   }
}


