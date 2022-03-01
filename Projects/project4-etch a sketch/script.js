//Caching DOM
const grid = document.getElementById("grid-container");
const redBtn = document.getElementById("redBtn");
const neonBtn = document.getElementById("neonBtn");
const rainbowBtn = document.getElementById("rainbowBtn");
const clearBtn = document.getElementById("clearBtn");

let current = '';
let size = 16;

//function for taking input from prompt
function sizeInput(){
    let size = prompt("Enter the grid size","16");
    size = parseInt(size);
    if(!size){
        alert("Enter a number");
        location.reload();
        return;
    }
    if(size > 50){
        alert("Enter a number less than 50");
        location.reload();
        return;
    }
    return size;
}

//for grid click and hover
let mouse=false; 
document.body.onmousedown = () => {mouse = true};
document.body.onmouseup = () => {mouse = false};

//generate random num of given length
function generateNum(len){
    return Math.floor(Math.random()*len);
}


//generating random pink neon color
function generateNeon(){
    let neon_mix = ['#00FFFF','#099FFF','#0062FF','#0033FF','#FF00FF','#FF00CC','#FF0099','#CC00FF','#9D00FF','#CC00FF','#6E0DD0','#9900FF'];

    return neon_mix[generateNum(neon_mix.length)];  
}

//generating rainbow color
function generateRainBow(){
    let r = generateNum(256);
    let g = generateNum(256);
    let b = generateNum(256);
    return `rgb(${r},${g},${b})`;
}

//activate function
function activate(current){
    if(current == 'red'){
        return 'red';
    }
    if(current =='neon'){
        return generateNeon();
    }

    if(current =='rainbow'){
        return generateRainBow();
    }
}

function clearGrid(){
    grid.innerHTML = ''
    createGrid(size);
    current=''
}

//onclick events
redBtn.onclick = () => {setMode('red')};
neonBtn.onclick = () => {setMode('neon')};
rainbowBtn.onclick = () =>{setMode('rainbow')};
clearBtn.onclick = () => {setMode('clear')};

//function for creating grids
function createGrid(size){
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;

    for(let i=0;i<size*size;i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.backgroundColor='black';
        cell.addEventListener('mouseover',hoverColor);
        cell.addEventListener('mousedown',hoverColor);
        grid.appendChild(cell);
    }
}

function hoverColor(e){
    if(e.type=='mouseover' && !mouse) return; 
    e.target.style.backgroundColor = activate(current);
    
}


function setMode(mode){
    if(mode == 'red'){
        current = 'red';
        redBtn.classList.add('active');
        neonBtn.classList.remove('active');
        rainbowBtn.classList.remove('active');
        clearBtn.classList.remove('active');
    }
    if(mode == 'neon'){
        current = 'neon';
        neonBtn.classList.add('active');
        redBtn.classList.remove('active');
        rainbowBtn.classList.remove('active');
        clearBtn.classList.remove('active');

    }
    if(mode == 'rainbow'){
        current='rainbow';
        rainbowBtn.classList.add('active');
        neonBtn.classList.remove('active');
        redBtn.classList.remove('active');
        clearBtn.classList.remove('active');

    }
    if(mode =='clear'){
        clearBtn.classList.add('active');
        rainbowBtn.classList.remove('active');
        neonBtn.classList.remove('active');
        redBtn.classList.remove('active');
        clearGrid();
    }
}


function main(){
    size = sizeInput();
    createGrid(size);   
}

main();

