canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_1_width=150;
car_1_height=140;
car_1_image="car_1.png";
car_1_x=15;
car_1_y=15;

car_2_width=150;
car_2_height=140;
car_2_image="lambo.jpg";
car_2_x=15;
car_2_y=90;

background_image="race_track.jpg";

function add () {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground();
    background_imgTag.src=background_image;
     
    car_1_imgTag=new Image();
    car_1_imgTag.onload=uploudcar1();
    car_1_imgTag.src=car_1_image;

    car_2_imgTag=new Image();
    car_2_imgTag.onload=uploudcar2;
    car_2_imgTag.src=car_2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width,canvas.height);
}
function uploudcar1() {
    ctx.drawImage(car_1_imgTag,car_1_x,car_1_y,car_1_width,car_1_height);
}
function uploudcar2() {
    ctx.drawImage(car_2_imgTag,car_2_x,car_2_y,car_2_width,car_2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
    if (keyPressed == '87') {
        w();
        console.log("w")
    }
    if (keyPressed == '83') {
        s();
        console.log("s")
    }
    if (keyPressed == '65') {
        a();
        console.log("a")
    }    
    if (keyPressed == '68') {
        d();
        console.log("d")
    }
}


function up() {
    if (car_1_y >= 0) {
        car_1_y=car_1_y-10;
        console.log("when up arrow is pressed,x ="+car_1_x+"| y="+car_1_y);
        uploadBackground();
        uploudcar1();
    }
}

function down() {
    if (car_1_y <= 500) {
        car_1_y=car_1_y+10;
        console.log("when down arrow is pressed,x ="+car_1_x+"| y="+car_1_y);
        uploadBackground();
        uploudcar1();
    }
}

function left() {
    if (car_1_x >= 0) {
        car_1_x=car_1_x-10;
        console.log("when left arrow is pressed,x ="+car_1_x+"| y="+car_1_y);
        uploadBackground();
        uploudcar1();
    }
}

function right() {
    if (car_1_x <= 700) {
        car_1_x=car_1_x+10;
        console.log("when right arrow is pressed,x ="+car_1_x+"| y="+car_1_y);
        uploadBackground();
        uploudcar1();
    }
}

function w() {
    if (car_2_y >= 0) {
        car_2_y=car_2_y-10;
        console.log("when up arrow is pressed,x ="+car_2_x+"| y="+car_2_y);
        uploadBackground();
        uploudcar2();
    }
}

function s() {
    if (car_2_y <= 500) {
        car_2_y=car_2_y+10;
        console.log("when down arrow is pressed,x ="+car_2_x+"| y="+car_2_y);
        uploadBackground();
        uploudcar2();
    }
}

function a() {
    if (car_2_x >= 0) {
        car_2_x=car_2_x-10;
        console.log("when left arrow is pressed,x ="+car_2_x+"| y="+car_2_y);
        uploadBackground();
        uploudcar2();
    }
}

function d() {
    if (car_2_x <= 700) {
        car_2_x=car_2_x+10;
        console.log("when right arrow is pressed,x ="+car_2_x+"| y="+car_2_y);
        uploadBackground();
        uploudcar2();
    }
}
