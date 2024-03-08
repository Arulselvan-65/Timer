
const startButton = document.getElementById('start-button');
const lapButton = document.getElementById('lap-button');
const resetButton = document.getElementById('reset-button');

const hour = document.getElementById('hr');
const minute = document.getElementById('min');
const second = document.getElementById('sec');


function timerOption(){
    if(startButton.textContent === 'Start'){
        startButton.innerText = 'Stop';
        startButton.style.backgroundColor = 'rgb(255, 50, 50)';
        startTimer();
    }

    else if(startButton.textContent === 'Stop'){
        stopTimer();
        startButton.innerText = 'Start';
        startButton.style.backgroundColor = 'rgb(50, 108, 255)';
        stopTimer();
    }
}
let intr;

function startTimer(){
    let h = 0;
    let m = 0;
    let s = 0;
    intr = setInterval(() =>{
        s++;
        second.innerHTML =  s.toString().padStart(2, '0');
        if(s == 60){
            s = 0;
            m++;
            minute.innerHTML =  m.toString().padStart(2, '0');
            if(m == 60){
                m = 0;
                h++;
                hour.innerHTML =  h.toString().padStart(2, '0');
         }
        }
    },1000);
}

function stopTimer(){
    clearInterval(intr);
}

let l = 0;
function lapTimer(){
    let h = hour.textContent;
    let m = minute.textContent;
    let s = second.textContent;

    let la = document.getElementById('laps');

    let lap = document.createElement('h3');
    let lapTime = document.createElement('h3');
    lap.innerText = ++l;
    lapTime.innerText = `${h} : ${m} : ${s}`;

    let div = document.createElement('div');
    div.style.display = "flex";
    div.style.justifyContent = "space-between";

    div.appendChild(lap);
    div.appendChild(lapTime);

    la.appendChild(div);

}

function resetTimer(){
    clearInterval(intr);
    hour.innerText = "00";
    minute.innerText = "00";
    second.innerText = "00";
    startButton.innerText = 'Start';
    startButton.style.backgroundColor = 'rgb(50, 108, 255)';
    window.location.reload()
}


startButton.addEventListener('click', timerOption);
lapButton.addEventListener('click', lapTimer);
resetButton.addEventListener('click',resetTimer);