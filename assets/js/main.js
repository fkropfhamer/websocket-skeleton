import Canvas from './canvas';
import '../css/index.css';

let canvas;
let socket;



const init = () => {
    socket = io();
    canvas = new Canvas(1000, 1000);
    
    window.requestAnimationFrame(gameLoop);
}


const gameLoop = timeStamp => {
    draw();
    window.requestAnimationFrame(gameLoop);

}

let x = 0

const draw = () => {
    x++;
    x %= 1000;
    canvas.reset();
    canvas.drawRect(x, x, 200, 200, '#FF0000');
    
}

window.onload = init;
//test();
