const linear = (timeFraction) => timeFraction;
import Slider from './slider/Bullets.js'
new Slider('.slider', 20, { duration: 700, timing: linear }, { wrapper: '.slider__bullets' });