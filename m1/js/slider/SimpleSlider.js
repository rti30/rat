
//! Без возможности остановки прокрутки. Подойдет для Full прокрутки. 
import Slider from './Root.js';
export default class SliderSimpleAnimate extends Slider {
   constructor(selector, gap, howAnim) {
      super(selector, gap);
      this.timing = howAnim.timing;
      this.duration = howAnim.duration;
      this._moving = false;
      this.slider.addEventListener('pointerdown', this.sliderDown);
      this.point = 0; //Текущий сдвиг
      this.targetObject; //Элемент на который нажали, чтобы сравнивать с элементом на котором отжали
   }
   animate = ({ timing, draw, duration }) => {
      this.moving = true;
      let start = performance.now();
      let animate = (time) => {
         let timeFraction = (time - start) / duration;
         if (timeFraction > 1) timeFraction = 1;
         // вычисление текущего состояния анимации
         let progress = timing(timeFraction);
         draw(progress); // отрисовать её
         if (timeFraction < 1) {
            requestAnimationFrame(animate);
         }
         else {
            this.moving = false
         }
      }
      requestAnimationFrame(animate);
   }
   set moving(move) { this._moving = move }
   sliderGo = (x) => this.wrapper.style.transform = `translate(${x}px, 0)`;

   sliderDown = (e) => {
      if (e.target.closest('.slider__next') === this.nextBtn) {
         this.targetObject = this.nextBtn;
         document.addEventListener('pointerup', this.pointUp);/// слушаем отжатие  на ВСЕМ ДОКУМЕНТЕ
         return;
      }
      else if (e.target.closest('.slider__prev') === this.prevBtn) {
         this.targetObject = this.prevBtn;
         document.addEventListener('pointerup', this.pointUp);/// слушаем отжатие  на ВСЕМ ДОКУМЕНТЕ
         return;
      }
   }
   pointUp = (e) => {
      if (e.target.closest('.slider__next') === this.nextBtn && e.target.closest('.slider__next') === this.targetObject) {
         this.goNext();
      }
      else if (e.target.closest('.slider__prev') === this.prevBtn && e.target.closest('.slider__prev') === this.targetObject) {
         this.goPrev();
      }
      document.removeEventListener('pointerup', this.pointUp);
   }

   goNext = () => {
      if (this._moving || this.currentSlide + 1 > this.slides.length) { return }
      this.currentSlide += 1;
      this.setState();
      let oldPoint = this.point;
      //   let targetPoint = this.point - (this.prevEl.offsetWidth + this.gap); //! Правильный подход, если карточки произвольного размера
      let targetPoint = this.point - (this.currEl.offsetWidth + this.gap); //! Ставлю это, т.к. нужно либо ждать css анимацию, либо проделывать через js с доп вычилсениями

      this.animate({
         timing: this.timing,
         duration: this.duration,
         draw: (progress) => {
            this.point = (targetPoint - oldPoint) * progress + oldPoint;
            this.sliderGo(this.point);
         }
      });
   }
   goPrev = () => {
      if (this._moving || this.currentSlide - 1 < 1) { return }
      this.currentSlide -= 1;
      this.setState();
      let oldPoint = this.point;
      //let targetPoint = this.point + (this.nextEl.offsetWidth + this.gap);//! Правильный подход, если карточки произвольного размера
      let targetPoint = this.point + (this.currEl.offsetWidth + this.gap); //! Ставлю это, т.к. нужно либо ждать css анимацию (доп. анимировал flex карточку), либо проделывать через js с доп вычилсениями

      this.animate({
         timing: this.timing,
         duration: this.duration,
         draw: (progress) => {
            this.point = (targetPoint - oldPoint) * progress + oldPoint;
            this.sliderGo(this.point);
         }
      });
   }
}