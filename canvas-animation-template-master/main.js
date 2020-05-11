// TITLE

/////   Instruction   /////
//There would be 50 snowflakes inititially.
//Press A to add a snowflake;
//Press s to remove a snowflake.

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;



// Logic
let snowArray = []
for (let n = 0; n < 50; n++) {
    //Globle Variables
    let x = Math.random() * cnv.width
    let y = Math.random() * cnv.height
    let r = (Math.random() + 0.5) * 2
    let s = (Math.random() + 0.5) * 4

    snowArray.push([x, y, r, s])
}

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    //drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height)

    //draw snow
    for (let n = 0; n < snowArray.length; n++) {
        //move snow
        snowArray[n][1] += snowArray[n][2]
        //decide teleport or not
        if (snowArray[n][1] >= cnv.height) {
            snowArray[n][1] = 0
            snowArray[n][0] = Math.random() * cnv.width
            snowArray[n][2] = (Math.random() + 0.5) * 2
            snowArray[n][3] = (Math.random() + 0.5) * 4
            console.log("hi")
        }
        //draw snow
        ctx.fillStyle = "white"
        ctx.beginPath();
        ctx.arc(snowArray[n][0], snowArray[n][1], snowArray[n][3], 0, 2 * Math.PI);
        ctx.fill();
    }

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

document.addEventListener("keydown", keyDownHandler)
function keyDownHandler() {
    console.log("3")
    if (event.keyCode == 65) {
        snowArray.push([
            Math.random() * cnv.width,
            0,
            (Math.random() + 0.5) * 2,
            (Math.random() + 0.5) * 4
        ])
        console.log("1")
    } else if (event.keyCode == 83) {
        snowArray.shift()
        console.log("2")
    }
}