document.addEventListener('DOMContentLoaded', () => {
    let grid = document.getElementById("grid");
    let count = 0;
    for (let i = 0; i < 200; i++) {
        count++;
        let div = document.createElement("div")
        grid.appendChild(div)
    

    }

    const width = 10;
    const gridSystem = document.querySelector("#grid");
    const scoreDisplay = document.querySelector('#score');
    const strtBttn = document.querySelector('#startButton');
    let squares = Array.from(document.querySelectorAll('#grid div'));
    console.log(squares);

    //The tetrominoes
    const LTetromino = [ //blue
        [1,width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]
    const ZTetromino = [ //green
        [2,width+2, width+1, width*2+1],
        [0,1,width+1,width+2]
    ]
    const PTetromino = [
        [1, width,width+1, width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width+1,width+2, width*2+1],
        [1,width,width+1,width+2]
    ]
    const STetromino = [0,width,width+1,1]
    const ITetromino = [
        [width,width+1, width+2, width+3],
        [1,width+1,width*2+1, width*3+1]
    ]

    const theTetrominoes = [LTetromino,PTetromino,ZTetromino,STetromino,ITetromino]

    let currentPosition = 4; //center of grid
    let current = theTetrominoes[0][0]

    function draw(){
        current.forEach( index => {
            squares[currentPosition + index].classList.add('tetromino');
        })
    }

    draw()


})