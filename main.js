canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
carwidth=110;
carhieght=130;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
carx=10;
cary=10;
greencarimagetag=" ";
background_imagetag=" ";

function add() {
	background_imagetag=new Image;
	background_imagetag.onload=uploadBackground;
    background_imagetag.src=background_image;

	greencarimagetag=new Image;
	greencarimagetag.onload=uploadgreencar;
	greencarimagetag.src=greencar_image;
}
function uploadBackground() {
	ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencarimagetag,carx,cary,carwidth,carhieght);	
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keycode=e.keyCode;
    console.log(keycode);
    if(keycode=="37"){
        left();
        console.log("left");
        
    }
    if(keycode=="38"){
        up();
        console.log("up");
        
    } if(keycode=="39"){
        right();
        console.log("right");
        
    } if(keycode=="40"){
        down();
        console.log("down");
        
    }
}
function up()
{
	if(cary >= 0){
		cary=cary-10;
		console.log("down arrow is pressed x="+ carx +"y ="+ cary );
		uploadBackground();
		uploadgreencar();
	}
}
function down()
{
	if(cary <= 500){
		cary=cary+10;
		console.log("down arrow is pressed x="+ carx +"y ="+ cary );
		uploadBackground();
		uploadgreencar();
	}
}
function left()
{
	if(carx <= 0){
		carx=carx-10;
		console.log("down arrow is pressed x="+ carx +"y ="+ cary );
		uploadBackground();
		uploadgreencar();
	}	
}

function right()
{
	if(carx <= 500){
		carx=carx+10;
		console.log("down arrow is pressed x="+ carx +"y ="+ cary );
		uploadBackground();
		uploadgreencar();
	}	
}