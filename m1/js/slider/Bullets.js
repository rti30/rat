import Slider from './SimpleSlider.js';

export default class SliderWithBullets extends Slider {
   constructor(selector, gap, howAnim, bullets) {
      super(selector, gap, howAnim);
      this.bulletsWrapper = document.querySelector(bullets.wrapper);
      this.bulletClassName = this.rootClassName + "__bullet";
      for (let i = 0; i < this.slides.length; i++) {
         let li = document.createElement('li');
         li.classList.add(this.bulletClassName)
         if (i === this.currentSlide - 1) {
            li.classList.add(this.bulletClassName + '--active')
         }
         this.bulletsWrapper.insertAdjacentElement("beforeend", li)
      }
      this.bullets = document.querySelectorAll('.' + this.rootClassName + "__bullet")
   }
   set moving(move) {
      this._moving = move;
      if (!move) {
         this.bullets?.forEach((bullet, i) => {
            (i === this.currentSlide - 1) ?
               bullet.classList.add(this.bulletClassName + '--active')
               : bullet.classList.remove(this.bulletClassName + '--active')
         });
      }
   }
} 