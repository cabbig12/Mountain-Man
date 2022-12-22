/*

The Game Project 7 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;
var treePos_y = 300;
var game_score = 0;
var lives = 4;
var level = 1;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var isTouchingPlatform = false;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	
    if(lives > 0 && level == 1){
        startLevel1();
    }
    
}
function startLevel1()
{
    gameChar_x = width/2;
	gameChar_y = floorPos_y;
    flagpole = {x_pos: 3000, isReached: false}
    
	// Variable to control the background scrolling.
	scrollPos = 0

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
    isFound = false;
    movingup = true;

	// Initialise arrays of scenery objects.
    trees_x = [320, 500, 600, -50, 800, 1200, 1900, 1300,  2400, 5000, 3200, 2900, 4200, 4700]
    cloud1 = {x: 200, y: 100, size: 50}
    cloud2 = {x: 600, y: 100, size: 50}
    cloud3 = {x: 0, y: 80, size: 70}
    cloud4 = {x: 1200, y: 100, size: 50}
    cloud5 = {x: -600, y: 100, size: 70}
    cloud6 = {x: 900, y: 80, size: 90}
    cloud7 = {x: -600, y: 100, size: 50}
    cloud8 = {x: -300, y: 100, size: 60}
    cloud9 = {x: 1900, y: 80, size: 50}
    clouds = [cloud1, cloud2, cloud3, cloud4, cloud5, cloud6, cloud7, cloud8, cloud9]
    
    mountain1 = {x_pos: 300, y_pos: 263}
    mountain2 = {x_pos: 500, y_pos: 263}
    mountain3 = {x_pos: 1400, y_pos: 263}
    mountain4 = {x_pos: 2000, y_pos: 263}
    mountain5 = {x_pos: 3100, y_pos: 263}
    mountain6 = {x_pos: 4000, y_pos: 263}
    mountains = [mountain1, mountain2, mountain3, mountain4, mountain5, mountain6]
    
    canyon1 = {x_pos: 2000 ,width: 100}
    canyon2 = {x_pos: 80 ,width: 80}
    canyon3 = {x_pos: 900 ,width: 70}
    canyon4 = {x_pos: 1600 ,width: 70}
    canyon5 = {x_pos: -400 ,width: 60}
    canyon6 = {x_pos: -900 ,width: 85}
    canyon7 = {x_pos: 2150 ,width: 100}
    canyons = [canyon1, canyon2, canyon3, canyon4, canyon5, canyon6, canyon7]
    
    collectable1 = {x_pos: 2100, y_pos: 100, size: 50}
    collectable2 = {x_pos: 100, y_pos: 100, size: 50}
    collectable3 = {x_pos: 700, y_pos: 100, size: 50}
    collectable4 = {x_pos: 1000, y_pos: 100, size: 50}
    collectable5 = {x_pos: -300, y_pos: 100, size: 50}
    collectable6 = {x_pos: 1400, y_pos: 100, size: 50}
    collectable7 = {x_pos: 1850, y_pos: 100, size: 50}
    collectables = [collectable1, collectable2, collectable3, collectable4, collectable5, collectable6, collectable7]
    
    lives -= 1;
    console.log(lives);
    
    elevator = {x_pos: 200, y_pos: 430}
}

function startLevel2()
{
    gameChar_x = width/2;
	gameChar_y = floorPos_y;
    flagpole = {x_pos: 4000, isReached: false}
    
	// Variable to control the background scrolling.
	scrollPos = 0

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
    isFound = false;
    movingup = true;
    ballmovingdown = true; 
    wallTouched = false;
    rainFalling1 = true;
    rainFalling3 = true;
    rainFalling5 = true;

	// Initialise arrays of scenery objects.
    trees_x = [320, 500, 600, -50, 800, 1200, 2400, 2700, 3500, 3200, 3900, 4200, 4700 ]
    cloud1 = {x: 200, y: 100, size: 50}
    cloud2 = {x: 600, y: 100, size: 50}
    cloud3 = {x: 0, y: 80, size: 70}
    cloud4 = {x: 1200, y: 100, size: 50}
    cloud5 = {x: -600, y: 100, size: 70}
    cloud6 = {x: 900, y: 80, size: 90}
    cloud7 = {x: -600, y: 100, size: 50}
    cloud8 = {x: -300, y: 100, size: 60}
    cloud9 = {x: 1900, y: 80, size: 50}
    clouds = [cloud1, cloud2, cloud3, cloud4, cloud5, cloud6, cloud7, cloud8, cloud9]
    
    mountain1 = {x_pos: 300, y_pos: 263}
    mountain2 = {x_pos: 500, y_pos: 263}
    mountain3 = {x_pos: 800, y_pos: 263}
    mountain4 = {x_pos: 1300, y_pos: 263}
    mountain5 = {x_pos: 2500, y_pos: 263}
    mountain6 = {x_pos: 3900, y_pos: 263}
    mountains = [mountain1, mountain2, mountain3, mountain4, mountain5, mountain6]
    
    canyon1 = {x_pos: 1700 ,width: 100}
    canyon2 = {x_pos: 180 ,width: 70}
    canyon3 = {x_pos: 900 ,width: 40}
    canyon4 = {x_pos: 1600 ,width: 90}
    canyon5 = {x_pos: -400 ,width: 60}
    canyon6 = {x_pos: -900 ,width: 85}
    canyons = [canyon1, canyon2, canyon3, canyon4, canyon5, canyon6]
    
    wall = {x_pos: 2800, y_pos: 150}
    wall2 = {x_pos: 5500, y_pos: 0}
    
    collectable1 = {x_pos: -200, y_pos: 100, size: 50}
    collectable2 = {x_pos: 100, y_pos: 100, size: 50}
    collectable3 = {x_pos: 700, y_pos: 100, size: 50}
    collectable4 = {x_pos: 1000, y_pos: 100, size: 50}
    collectable5 = {x_pos: -300, y_pos: 100, size: 50}
    collectable6 = {x_pos: 1400, y_pos: 100, size: 50}
    collectables = [collectable1, collectable2, collectable3, collectable4, collectable5, collectable6]
    
    specialcollectable = {x_pos: 5300, y_pos: 125}
    
    spike1 = {x_posA: 3000, y_posA: 150, x_posB: 3030, y_posB: 150, x_posC: 3015, y_posC: 120}
    spike2 = {x_posA: 3030, y_posA: 150, x_posB: 3060, y_posB: 150, x_posC: 3045, y_posC: 120}
    spike3 = {x_posA: 3400, y_posA: 150, x_posB: 3430, y_posB: 150, x_posC: 3415, y_posC: 120}
    spike4 = {x_posA: 3430, y_posA: 150, x_posB: 3460, y_posB: 150, x_posC: 3445, y_posC: 120}
    spike5 = {x_posA: 3460, y_posA: 150, x_posB: 3490, y_posB: 150, x_posC: 3475, y_posC: 120}
    spike6 = {x_posA: 3515, y_posA: 150, x_posB: 3545, y_posB: 150, x_posC: 3530, y_posC: 120}
    spike7 = {x_posA: 3545, y_posA: 150, x_posB: 3570, y_posB: 150, x_posC: 3560, y_posC: 120}
    spike8 = {x_posA: 4170, y_posA: 150, x_posB: 4200, y_posB: 150, x_posC: 4185, y_posC: 120}
    spike9 = {x_posA: 4200, y_posA: 150, x_posB: 4230, y_posB: 150, x_posC: 4215, y_posC: 120}
    spike10 = {x_posA: 4300, y_posA: 150, x_posB: 4330, y_posB: 150, x_posC: 4315, y_posC: 120}
    spike11 = {x_posA: 4900, y_posA: 150, x_posB: 4930, y_posB: 150, x_posC: 4915, y_posC: 120}
    spike12 = {x_posA: 4930, y_posA: 150, x_posB: 4960, y_posB: 150, x_posC: 4945, y_posC: 120}
    spikes = [spike1, spike2, spike3, spike4, spike5, spike6, spike7, spike8, spike9, spike10]
    
    falling_ball1 = {x_pos: 4700, y_pos: 10}
    falling_ball2 = {x_pos: 4780, y_pos: 0}
    falling_ball3 = {x_pos: 4830, y_pos: 20}
    falling_balls = [falling_ball1, falling_ball2, falling_ball3]
    
    fire_rain1 = {x_pos: 3510, y_pos: 130}
    fire_rain2 = {x_pos: 3530, y_pos: 130}
    fire_rain3 = {x_pos: 3550, y_pos: 150}
    fire_rain4 = {x_pos: 3570, y_pos: 150}
    fire_rain5 = {x_pos: 3500, y_pos: 180}
    fire_rain6 = {x_pos: 3550, y_pos: 180}
    fire_rain7 = {x_pos: 3600, y_pos: 180}
    fire_rain8 = {x_pos: 3650, y_pos: 180}
    fire_rain9 = {x_pos: 3450, y_pos: 180}
    fire_rain10 = {x_pos: 3750, y_pos: 180}
    fire_rain11 = {x_pos: 3350, y_pos: 180}
    fire_rain12 = {x_pos: 3700, y_pos: 180}
    
    
    fire_rains1 = [fire_rain1, fire_rain2, fire_rain3, fire_rain4]
    fire_rains2 = [fire_rain5, fire_rain6, fire_rain7, fire_rain8]
    fire_rains3 = [fire_rain9, fire_rain10, fire_rain11, fire_rain12]
        
    elevator = {x_pos: 2700, y_pos: 430}
    
    lives -=1
}
    
function renderFlagpole()
{
    if(flagpole.isReached == true){
        fill(0,0,0)
        rect(flagpole.x_pos,floorPos_y - 85,8,85);
        fill(0,255,0)
        triangle(flagpole.x_pos + 8,floorPos_y - 85, flagpole.x_pos + 35, floorPos_y - 75,flagpole.x_pos + 8,floorPos_y - 65)
    }
    if(flagpole.isReached == false){
        fill(0,0,0)
        rect(flagpole.x_pos,floorPos_y - 85,8,85);
        fill(255,0,0)
        triangle(flagpole.x_pos + 8,floorPos_y - 85, flagpole.x_pos + 35, floorPos_y - 75,flagpole.x_pos + 8,floorPos_y - 65)
    }
}

function checkFlagpole()
{
    if(dist(flagpole.x_pos,floorPos_y,gameChar_x,gameChar_y)<15){
        flagpole.isReached = true;//checking if the player has reached the flagpole
        if(lives > 0 && level == 2){
            text("GAME COMPLETED!", 500, 500)
        }
    }
}

function drawClouds()
{
    for(var i = 0; i < clouds.length; i++)
    {
        noStroke();
        fill(255);
        ellipse(clouds[i].x + 25, clouds[i].y, clouds[i].size, clouds[i].size - 10);
        ellipse(clouds[i].x, clouds[1].y, clouds[i].size, clouds[i].size - 10);
        ellipse(clouds[i].x + 40, clouds[i].y + 20, clouds[i].size, clouds[i].size);
        ellipse(clouds[i].x + 20, clouds[i].y + 30, clouds[i].size, clouds[i].size - 10);
        ellipse(clouds[i].x , clouds[i].y + 20, clouds[i].size, clouds[i].size - 10);//drawing all clouds
    }
}
    
function drawMountains()
{
    for(var i = 0; i < mountains.length; i++)
    {
        noStroke();
        fill(105,105,105);
        triangle(mountains[i].x_pos, mountains[i].y_pos - 165, mountains[i].x_pos - 100, mountains[1].y_pos + 170, mountains[i].x_pos + 100, mountains[1].y_pos + 170);
        fill(255,255,255)
        triangle(mountains[i].x_pos, mountains[i].y_pos - 165, mountains[i].x_pos - 50, mountains[i].y_pos, mountains[i].x_pos + 50, mountains[i].y_pos);
        triangle(mountains[i].x_pos - 50, mountains[i].y_pos, mountains[i].x_pos - 30, mountains[i].y_pos, mountains[i].x_pos - 40, mountains[i].y_pos + 25);
        triangle(mountains[i].x_pos - 30, mountains[i].y_pos, mountains[i].x_pos - 10, mountains[i].y_pos, mountains[i].x_pos - 20, mountains[i].y_pos + 25);
        triangle(mountains[i].x_pos - 10, mountains[i].y_pos, mountains[i].x_pos + 10, mountains[i].y_pos, mountains[i].x_pos, mountains[i].y_pos + 25);
        triangle(mountains[i].x_pos + 10, mountains[i].y_pos, mountains[i].x_pos + 30, mountains[i].y_pos, mountains[i].x_pos + 20, mountains[i].y_pos + 25);
        triangle(mountains[i].x_pos + 30, mountains[i].y_pos, mountains[i].x_pos + 50, mountains[i].y_pos, mountains[i].x_pos + 40, mountains[i].y_pos + 25);// drawing the mountain
    }
}

function drawTrees()
{
    for(var i = 0; i < trees_x.length; i++)
    {
        noStroke();
        fill(101,67,33);
        rect(trees_x[i], 333, 40, 100);
        fill(0,128,0)
        ellipse(trees_x[i] + 20,treePos_y + 13, 70, 70)
        ellipse(trees_x[i] + 50,treePos_y + 7, 50, 40)
        ellipse(trees_x[i] + 43,treePos_y + 33, 40, 40)
        ellipse(trees_x[i] + 48,treePos_y - 20, 40, 40)
        ellipse(trees_x[i] + 18,treePos_y - 23 , 40, 40)
        ellipse(trees_x[i] - 5,treePos_y - 5, 40, 40)
        ellipse(trees_x[i],treePos_y + 25, 40, 40)// Drawing the tree
    }
}

function drawSpecialCollectable()
{
    if(level == 2){
        fill(0,128,255)
        rect(specialcollectable.x_pos, specialcollectable.y_pos, 10,10)
    }
}

function touchSpecialCollectable()
{
    if(level == 2){
        if(dist(gameChar_x, gameChar_y, specialcollectable.x_pos, specialcollectable.y_pos) < 50){
            game_score += 10;
            specialcollectable.x_pos = specialcollectable.y_pos + 1000
            wall.y_pos = wall.y_pos + 1000
        }
    }
}

function drawSpikes()
{
    if(level == 2){
        for(var i = 0; i < spikes.length; i++){
            fill(0,0,0)
            triangle(spikes[i].x_posA, spikes[i].y_posA, spikes[i].x_posB, spikes[i].y_posB,spikes[i].x_posC,spikes[i].y_posC)
        }
    }
}

function touchingSpikes()
{
    if(level == 2){
        for(var i = 0; i < spikes.length; i++){
            if(dist(gameChar_x, gameChar_y, spikes[i].x_posC, spikes[i].y_posC) < 5 || dist(gameChar_x, gameChar_y, spikes[i].x_posA, spikes[i].y_posA) < 5 || dist(gameChar_x, gameChar_y, spikes[i].x_posB, spikes[i].y_posB) < 5){
                startLevel2()
            }
        }
    }
    
}

function drawFireRain()
{
    if(level == 2){
        for(var i = 0; i < fire_rains1.length; i++){
            fill(255,0,0)
            rect(fire_rains1[i].x_pos, fire_rains1[i].y_pos, 8, 8)
        }
        for(var i = 0; i < fire_rains2.length; i++){
            fill(255,0,0)
            rect(fire_rains2[i].x_pos, fire_rains2[i].y_pos, 8, 8)
        }
        for(var i = 0; i < fire_rains3.length; i++){
            fill(255,0,0)
            rect(fire_rains3[i].x_pos, fire_rains3[i].y_pos, 8, 8)
        }
    }
}

function moveFireRain()
{
    if(level ==2){
        if(rainFalling1 == true){
            for(var i = 0; i < fire_rains1.length; i++){
                fire_rains1[i].y_pos += 2
                if(fire_rains1[i].y_pos >445){
                    rainFalling1 = false;
                }
            }
        }
        if(rainFalling3 == true){
            for(var i = 0; i < fire_rains2.length; i++){
                fire_rains2[i].y_pos += 2
                if(fire_rains2[i].y_pos >435){
                    rainFalling3 = false;
                }
            }
        }
        if(rainFalling5 == true){
            for(var i = 0; i < fire_rains3.length; i++){
                fire_rains3[i].y_pos += 2
                if(fire_rains3[i].y_pos >455){
                    console.log("rain5",fire_rain5.y_pos)
                    rainFalling5 = false;
                }
            }
        }

        if(rainFalling1 == false){
            for(var i = 0; i < fire_rains1.length; i++){
                fire_rains1[i].y_pos -= 2
                console.log("rain1",fire_rain1.y_pos)
                if(fire_rains1[i].y_pos < 160){
                    rainFalling1 = true;
                }
            }
        if(rainFalling3 == false){
            for(var i = 0; i < fire_rains2.length; i++){
                fire_rains2[i].y_pos -= 2
                console.log("rain3",fire_rain3.y_pos)
                if(fire_rains2[i].y_pos < 160){
                    rainFalling3 = true;
                }
            }
        }
        if(rainFalling5 == false){
            for(var i = 0; i < fire_rains3.length; i++){
                fire_rains3[i].y_pos -= 2
                console.log("rain5",fire_rain5.y_pos)
                if(fire_rains3[i].y_pos < 160){
                    rainFalling5 = true;
                    }
                }
            }
        }
    }
        
}

function touchingFireRain()
{
    if(level == 2){
        for(var i = 0; i < fire_rains1.length; i++){
            if(dist(gameChar_x, gameChar_y - 20, fire_rains1[i].x_pos, fire_rains1[i].y_pos) < 20){
                startLevel2()
            }
        }
        for(var i = 0; i < fire_rains2.length; i++){
            if(dist(gameChar_x, gameChar_y - 20, fire_rains2[i].x_pos, fire_rains2[i].y_pos) < 20){
                startLevel2()
            }
        }
           
        for(var i = 0; i < fire_rains3.length; i++){
            if(dist(gameChar_x, gameChar_y - 20, fire_rains3[i].x_pos, fire_rains3[i].y_pos) < 20){
                startLevel2()
            }
        }
    }
}

function drawFallingBalls()
{
    if(level == 2){
        for(var i = 0; i < falling_balls.length; i++){
            fill(0,0,0)
            ellipse(falling_balls[i].x_pos, falling_balls[i].y_pos, 50, 50)
        }
    }
}

function moveFallingBalls()
{
    if(level == 2){
        for(var i = 0; i < falling_balls.length; i++){

            if(ballmovingdown == true){
                falling_balls[i].y_pos += 1;
            }

            if(falling_balls[i].y_pos == 150){
                ballmovingdown = false;
            }

            if(ballmovingdown == false){
                falling_balls[i].y_pos -= 1;
            }

            if(falling_balls[i].y_pos == 0){
                ballmovingdown = true;
            }
        }
    }
}

function touchingFallingBalls()
{
    if(level == 2){
        for(var i = 0; i < falling_balls.length; i++){
            if(dist(gameChar_x, gameChar_y - 20, falling_balls[i].x_pos, falling_balls[i].y_pos) < 50){
                startLevel2()
            }
        }
    }
}

function drawElevator()
{
    if(level == 2){
        fill(0,0,0)
        rect(elevator.x_pos, elevator.y_pos, 50, 8)
    }
}

function moveElevator()
{
    if(movingup == true){
        elevator.y_pos -= 1;
    }
    if(elevator.y_pos == 150){
        movingup = false;
    }
    if(movingup == false){
        elevator.y_pos += 1;
    }
    if(elevator.y_pos == floorPos_y){
        movingup = true;
    }
}

function standingOnElevator()
{
    for(var i = 0; i < 50; i++)
        if(dist(gameChar_x, gameChar_y, elevator.x_pos + i, elevator.y_pos)<5){
            gameChar_y = elevator.y_pos;
        }
}

function drawPlatform()
{
    if(level == 2){
        fill(0,153,0);
        noStroke()
        rect(2800, 150, 5000, 60)
    }
}

function touchingPlatform()
{
    if(gameChar_y == 150 && gameChar_x > 2785 && level == 2){
        isTouchingPlatform = true;
        isFalling = false;
        isPlummeting = false;
    }
        else{
            isTouchingPlatform = false;
            isFalling = true;
        }
}

function drawWall()
{
    if(level == 2){
        fill(105,105,105);
        noStroke()
        rect(wall.x_pos, wall.y_pos , 40, 350)
    }
}

function draw2ndWall()
{
    if(level == 2){
        fill(105,105,105);
        noStroke()
        rect(wall2.x_pos, wall2.y_pos , 40, 435)
    }
}

function touchingWall()
{
    if(level == 2 && gameChar_x > 2782 && gameChar_x < 2840 && isRight == true && gameChar_y > 150 && wall.y_pos < 435){
        console.log("noooooo")
        gameChar_x -= 5;
        scrollPos += 5; 
    }
    if(level == 2 && gameChar_x > 2785 && gameChar_x < 2850 && isLeft == true && gameChar_y > 150 && wall.y_pos < 435){
        console.log("noooooo")
        gameChar_x += 5;
        scrollPos -= 5; 
    }
    
    if(level == 2 && gameChar_x > 5485 && gameChar_x < 5560 && isRight == true && gameChar_y < 430){
        console.log("noooooo")
        gameChar_x -= 5;
        scrollPos += 5; 
        
    }
}

function draw()
{
    push();
    translate(scrollPos, 0);
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(-100*100, floorPos_y, width * 20, height/4); // draw some green ground
    
    drawClouds();
    
    drawMountains();
    
    drawTrees();
    
    drawGameChar();
    
    checkFlagpole();
    
    renderFlagpole();
    
    drawPlatform();
    touchingPlatform();
    
    drawWall();
    draw2ndWall();
    touchingWall();
    
    drawElevator();
    standingOnElevator();
    moveElevator();
    
    drawSpikes();
    touchingSpikes();
    
    drawFireRain();
    moveFireRain();
    touchingFireRain();
    
    drawFallingBalls();
    moveFallingBalls();
    touchingFallingBalls();
    
    drawSpecialCollectable();
    touchSpecialCollectable();
    //checkLevel();
    
    if(gameChar_y > floorPos_y + 85 && level == 1){
        startLevel1();
    }
    if(gameChar_y > floorPos_y + 85 && level == 2){
        startLevel2();
    }
    
	// Draw canyons.
    for(var i = 0; i < canyons.length; i++){
        drawCanyon(canyons[i]);
        checkCanyon(canyons[i]);
    }
    
	// Draw collectable items.
    isFound = false;
    for(var i = 0; i < collectables.length; i++){
        checkCollectable(collectables[i]);
        if(isFound == false){
            drawCollectable(collectables[i]);
            checkCollectable(collectables[i]);
        }
    }
    pop()
    if(lives < 1){
        text("GAME OVER",500,500)
        return
    }
    if(flagpole.isReached == true && level == 1){
        text("LEVEL COMPLETE",500,500)
        startLevel2()
        level += 1;
    }
    if(flagpole.isReached == true && level == 2){
        text("GAME COMPLETE",500,500)
        return;
    }
    
    if(isPlummeting == true){
        gameChar_y += 6
    } // making player fall in the canyon
    
        
	// Logic to make the game character move or the background scroll.
    
	if(isLeft)
	{
        push()
        translate(scrollPos, 0)
        
		if(gameChar_x > width * 0.8)
		{
			gameChar_x -= 3;
            scrollPos += 3;
		}
		else
		{
			scrollPos += 3;
            gameChar_x -= 3;
            
		}
        pop()
	}

	if(isRight)
	{
        push()
        translate(scrollPos, 0)
        
		if(gameChar_x < width * 0.8)
		{
			gameChar_x += 4;
            scrollPos -= 4;
		}
		else
		{
			scrollPos -= 4; // negative for moving against the background
            gameChar_x  += 4;
		}
        pop()
	}

	// Logic to make the game character rise and fall.
    if(gameChar_y < floorPos_y && isTouchingPlatform == false){
        isFalling = true;
        gameChar_y += 2}
    if (gameChar_y == floorPos_y){
        isFalling = false;
    }

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos
    pop()
    
    text("Score: " + game_score, 20,20);
    text("Lives: " + lives, 100,20);
    text("Level: " + level, 950, 20);
}
// ---------------------
// Key control functions
// ---------------------
function keyPressed(){

    // if statements to control the animation of the character when
	// keys are pressed.
    
    if(key == 'A'){
        isLeft = true;
    }
    
    if(key == 'D'){
        isRight = true;
    }
    
    for(var i = 0; i < 50; i++){
        if(key == 'W' && dist(gameChar_x, gameChar_y, elevator.x_pos + i, elevator.y_pos)<8){
            gameChar_y -= 90
            }
        }
    if(key == 'W' && gameChar_y < floorPos_y + 3 && gameChar_y > floorPos_y - 5){
        gameChar_y -= 90;
        }
    
    if(key == 'W' && isTouchingPlatform
       == true){
        gameChar_y -= 90;
        }
}
function keyReleased()
{
    if(keyCode == 65){
        isLeft = false;
    }
    if(keyCode == 68){
        isRight = false;
    }
}
// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
	// draw game character
    if(isLeft && isFalling)
	{
		//jumping-left code
        stroke(0,0,0)
        rect(gameChar_x - 7, gameChar_y - 50 , 8 , 33)
        fill(255,255,255)
        rect(gameChar_x - 7, gameChar_y - 30 , 8 , 5)
        rect(gameChar_x - 7, gameChar_y - 40 , 8 , 5)
        fill(0,0,0)
        ellipse(gameChar_x - 3, gameChar_y - 57, 15, 15)
        fill(0,0,0)
        rect(gameChar_x - 5, gameChar_y - 19 , 6, 15)
        rect(gameChar_x - 19, gameChar_y - 19 , 6, 15)
        rect(gameChar_x - 3, gameChar_y - 10 , 15, 6)
        rect(gameChar_x - 19, gameChar_y - 23 , 15, 6)
        fill(220,220,220)
        rect(gameChar_x - 23, gameChar_y - 50 , 23 , 5)
        fill(255,255,255)
        ellipse(gameChar_x - 8 , gameChar_y - 60, 5, 5)
        fill(0,0,0)
        ellipse(gameChar_x - 8 , gameChar_y - 60, 1, 1)
	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
        stroke(0,0,0)
        rect(gameChar_x - 7, gameChar_y - 50 , 8 , 33)
        fill(255,255,255)
        rect(gameChar_x - 7, gameChar_y - 30 , 8 , 5)
        rect(gameChar_x - 7, gameChar_y - 40 , 8 , 5)
        fill(0,0,0)
        ellipse(gameChar_x - 3, gameChar_y - 57, 15, 15)
        fill(0,0,0)
        rect(gameChar_x - 7, gameChar_y - 23 , 18, 6)
        rect(gameChar_x - 7, gameChar_y - 23 , 6, 18)
        rect(gameChar_x - 20, gameChar_y - 11 , 18, 6)
        rect(gameChar_x + 6, gameChar_y - 23 , 6, 18)
        fill(220,220,220)
        rect(gameChar_x - 6, gameChar_y - 50 , 23 , 5)
        fill(255,255,255)
        ellipse(gameChar_x + 2 , gameChar_y - 60, 5, 5)
        fill(0,0,0)
        ellipse(gameChar_x + 2 , gameChar_y - 60, 1, 1)
	}
	else if(isLeft)
	{
		// add your walking left code
        stroke(0,0,0)
        rect(gameChar_x - 7, gameChar_y - 50 , 8 , 33)
        fill(255,255,255)
        rect(gameChar_x - 7, gameChar_y - 30 , 8 , 5)
        rect(gameChar_x - 7, gameChar_y - 40 , 8 , 5)
        fill(0,0,0)
        ellipse(gameChar_x - 3, gameChar_y - 57, 15, 15)
        fill(0,0,0)
        rect(gameChar_x - 7, gameChar_y - 17 , 8, 15)
        fill(220,220,220)
        rect(gameChar_x - 6, gameChar_y - 50 , 5 , 23)
        fill(255,255,255)
        ellipse(gameChar_x - 8 , gameChar_y - 60, 5, 5)
        fill(0,0,0)
        ellipse(gameChar_x - 8 , gameChar_y - 60, 1, 1)
	}
	else if(isRight)
	{
		// add your walking right code
        stroke(0,0,0)
        rect(gameChar_x - 7, gameChar_y - 50 , 8 , 33)
        fill(255,255,255)
        rect(gameChar_x - 7, gameChar_y - 30 , 8 , 5)
        rect(gameChar_x - 7, gameChar_y - 40 , 8 , 5)
        fill(0,0,0)
        ellipse(gameChar_x - 3, gameChar_y - 57, 15, 15)
        fill(0,0,0)
        rect(gameChar_x - 7, gameChar_y - 17 , 8, 15)
        fill(220,220,220)
        rect(gameChar_x - 6, gameChar_y - 50 , 5 , 23)
        fill(255,255,255)
        ellipse(gameChar_x + 2 , gameChar_y - 60, 5, 5)
        fill(0,0,0)
        ellipse(gameChar_x + 2 , gameChar_y - 60, 1, 1)
	}
    
    
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        stroke(0,0,0)
        rect(gameChar_x - 7, gameChar_y - 50 , 15 , 33)
        fill(255,255,255)
        rect(gameChar_x - 7, gameChar_y - 30 , 15 , 5)
        rect(gameChar_x - 7, gameChar_y - 40 , 15 , 5)
        fill(0,0,0)
        ellipse(gameChar_x , gameChar_y - 57, 15, 15)
        fill(0,0,0)
        rect(gameChar_x - 7, gameChar_y - 17 , 5, 15)
        rect(gameChar_x + 3, gameChar_y - 17 , 5, 15)
        fill(255,255,255)
        ellipse(gameChar_x - 3 , gameChar_y - 60, 5, 5)
        ellipse(gameChar_x + 2 , gameChar_y - 60, 5, 5)
        fill(0,0,0)
        ellipse(gameChar_x - 3 , gameChar_y - 60, 1, 1)
        ellipse(gameChar_x + 2 , gameChar_y - 60, 1, 1)
        fill(220,220,220)
        rect(gameChar_x -23, gameChar_y - 50 , 16 , 3)
        rect(gameChar_x +8, gameChar_y - 50 , 16 , 3)
	}
    
    
	else
	{
		// add your standing front facing code
        stroke(0,0,0)
        rect(gameChar_x - 7, gameChar_y - 50 , 15 , 33)
        fill(255,255,255)
        rect(gameChar_x - 7, gameChar_y - 30 , 15 , 5)
        rect(gameChar_x - 7, gameChar_y - 40 , 15 , 5)
        fill(0,0,0)
        ellipse(gameChar_x , gameChar_y - 57, 15, 15)
        fill(0,0,0)
        rect(gameChar_x - 7, gameChar_y - 17 , 5, 15)
        rect(gameChar_x + 3, gameChar_y - 17 , 5, 15)
        fill(255,255,255)
        ellipse(gameChar_x - 3 , gameChar_y - 60, 5, 5)
        ellipse(gameChar_x + 2 , gameChar_y - 60, 5, 5)
        fill(0,0,0)
        ellipse(gameChar_x - 3 , gameChar_y - 60, 1, 1)
        ellipse(gameChar_x + 2 , gameChar_y - 60, 1, 1)
        fill(220,220,220)
        rect(gameChar_x -10, gameChar_y - 50 , 3 , 23)
        rect(gameChar_x +9, gameChar_y - 50 , 3 , 23)
    }
}

// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
    // Draw canyons.
    noStroke();
    fill(188,143,143);
    rect(t_canyon.x_pos, 432, t_canyon.width, 160)
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{
    for(var i = 0; i < canyons.length; i++){
        if(gameChar_x < t_canyon.x_pos + t_canyon.width && gameChar_x > t_canyon.x_pos && gameChar_y > floorPos_y  - 2){
            isPlummeting = true;
            } //dectecting if player is over the canyon
    }
}
// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.
function drawCollectable(t_collectable)
{      
    if(isFound == false)
        noStroke();
        fill(255,223,0);
        ellipse(t_collectable.x_pos + 280, t_collectable.y_pos  + 315, t_collectable.size - 40, t_collectable.size - 40);
        rect(t_collectable.x_pos  + 280, t_collectable.y_pos + 313, t_collectable.size - 30, t_collectable.size - 45)
        rect(t_collectable.x_pos  + 290, t_collectable.y_pos + 308, t_collectable.size - 47 ,t_collectable.size - 44)
        rect(t_collectable.x_pos  + 295, t_collectable.y_pos + 308, t_collectable.size - 47 ,t_collectable.size - 44)// drawing the collectable keys
}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{
    for(var i = 0; i < collectables.length; i++){
        if(dist(collectables[i].x_pos + 285 , collectables[i].y_pos + 300, gameChar_x, gameChar_y) < 40){
            isFound = true; 
            collectables.splice(i, 1);
            game_score += 1;//Player collecting the collectable
        }
    }
}