canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75 ; 
greencar_height = 100 ; 

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x_position = 5 ;
greencar_y_position = 225 ;

function add() {
	background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;
    
    greencar_imageTag = new Image();
    greencar_imageTag.onload = uploadgreencar;
    greencar_imageTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imageTag , 0 , 0 , canvas.width , canvas.height);

}

function uploadgreencar() {
ctx.drawImage(greencar_imageTag , greencar_x_position , greencar_y_position , greencar_width , greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y_position >=0)
    {
        greencar_y_position  =  greencar_y_position - 10;
        uploadBackground();
        uploadgreencar();

    }
}

function down()
{
	if(greencar_y_position <=500)
    {
        greencar_y_position  =  greencar_y_position + 10;
        uploadBackground();
        uploadgreencar();

    }
}



function left()
{
	if(greencar_x_position >=0)
    {
        greencar_x_position  =  greencar_x_position - 10;
        uploadBackground();
        uploadgreencar();

    }
}


function right()
{
	if(greencar_x_position <=700)
    {
        greencar_x_position  =  greencar_x_position + 10;
        uploadBackground();
        uploadgreencar();

    }
}

