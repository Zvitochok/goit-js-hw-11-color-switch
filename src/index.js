const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    bodyRef: document.querySelector('body'),
    startBtnRef: document.querySelector('[data-action="start"]'),
    stopBtnRef: document.querySelector('[data-action="stop"]')
}

refs.startBtnRef.addEventListener('click', onStartBtn);
refs.stopBtnRef.addEventListener('click', onStopBtn);

let colorCounter = null;
let colorId = 0;


function onStartBtn() {
    refs.startBtnRef.disabled = true;
    colorCounter = setInterval(() => {
        colorId = randomIntegerFromInterval(0, colors.length);
        refs.bodyRef.style.background = colors[colorId];
    }, 1000);
};

function onStopBtn() {
    refs.startBtnRef.disabled = false;
    clearInterval(colorCounter);
};