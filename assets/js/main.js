import Canvas from './canvas';
import '../css/index.css';

let canvas;
// let socket;
let x = 0;

const draw = () => {
  x += 1;
  x %= 1000;
  canvas.reset();
  canvas.drawRect(x, x, 200, 200, '#FF0000');
};

const gameLoop = (timeStamp) => {
  draw();
  window.requestAnimationFrame(gameLoop);
};

const init = () => {
  // socket = io();
  canvas = new Canvas(1000, 1000);
  window.requestAnimationFrame(gameLoop);
};

window.onload = init;
// test();
