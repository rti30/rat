import Game from '/src/script/g2048/G2048.js';
import gameStyles from '/src/script/g2048/style.js';
import activeGameField from '/src/script/g2048/gameVisible.js';

new Game({ width: 5, height: 5, gameClass: 'g2048-1', styles: gameStyles })
activeGameField("g2048");
window.addEventListener('scroll', () => activeGameField("g2048"));