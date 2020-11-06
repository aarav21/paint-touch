canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
 
var last_position_of_X, last_position_of_Y;

color = "black";
line_Width = "10";
width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;

if (width < 992 ){
    canvas.width = new_width;
    canvas.height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", touch_start);

function touch_start(e){
    console.log(e);
    color = document.getElementById("color").value;
    line_Width = document.getElementById("width").value;

    last_position_of_X = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_Y = e.touches[0].clientY - canvas.offsetTop;  
}

canvas.addEventListener("touchmove", touch_Move);

function touch_Move(e){
    current_position_of_X = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_Y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_Width;
    console.log("last position:" + last_position_of_X + "," + last_position_of_Y);

    ctx.moveTo(last_position_of_X , last_position_of_Y);
    console.log("current position:" + current_position_of_X + "," + current_position_of_Y);
    ctx.lineTo(current_position_of_X , current_position_of_Y);
    ctx.stroke();
    last_position_of_X = current_position_of_X;
    last_position_of_Y = current_position_of_Y;
}

function clearScreen(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}
