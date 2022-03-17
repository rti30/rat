
import animate from "/src/script/g2048/anim/animate.js"
import movingEl from "/src/script/g2048/anim/movingEl.js"
import animDiff from "/src/script/g2048/anim/animDiff.js"
export default (context) => ({
   movingEl: (direction, cell) => movingEl(direction, cell, animate, context),
   animDiff: (diff, diffWrapper) => animDiff(diff, diffWrapper, animate, context)
})