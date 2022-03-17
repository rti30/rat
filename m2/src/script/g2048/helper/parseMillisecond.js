export default function parseMillisec(millisecond) {
   let hour = Math.floor(millisecond / (3600 * 1000))
   let min = Math.floor((millisecond / (1000 * 60)) % 60)
   let sec = Math.floor((millisecond / 1000) % 60)
   return `${validateTime(hour, 0, null)}:${validateTime(min, 0, 59)}:${validateTime(sec, 0, 59)}`
}

function validateTime(value, min, max) {
   if (!max) {
      max = value;
   }
   if (value < min) {
      return '00';
   }
   else if (value > max) {
      return max.toString();
   }
   else if (value < 10) {
      return '0' + value
   }
   else return value.toString()
}