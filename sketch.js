    var fixSprite1 ;
    var fixSprite2;
    var fixSprite3;
    var fixSprite4;
    var movingSprite;
    var edges;
    var music;

    function preload (){
   // music = loadSound ("music.mp3");
    }

    function setup (){
    createCanvas (800,600);

    movingSprite= createSprite(random(20,750),100,40,40);
    movingSprite.shapeColor="white";
    movingSprite.velocityX=8;
    movingSprite.velocityY=8;

    fixSprite1=createSprite (0,580,360,30);
    fixSprite1.shapeColor="red";

    fixSprite2=createSprite (295,580,200,30);
    fixSprite2.shapeColor="green";

    fixSprite3=createSprite (515,580,200,30);
    fixSprite3.shapeColor="blue";

    fixSprite4=createSprite (740,580,220,30);
    fixSprite4.shapeColor="yellow";
    }

    function draw () {

    background("purple");
    edges=createEdgeSprites();
    movingSprite.bounceOff(edges);

    if(fixSprite1.isTouching(movingSprite)&& movingSprite.bounceOff(fixSprite1)){
    movingSprite.shapeColor="blue";
  //  music.play();
    }

    if(fixSprite2.isTouching(movingSprite)){
    movingSprite.shapeColor="orange";
    movingSprite.velocityX=0;
    movingSprite.velocityY=0;
  //  music.stop;
    }
    if(fixSprite3.isTouching(movingSprite)&& movingSprite.bounceOff(fixSprite3)){
        movingSprite.shapeColor="red";
      //  music.play();
        }
        if(fixSprite4.isTouching(movingSprite)&& movingSprite.bounceOff(fixSprite4)){
            movingSprite.shapeColor="green ";
          //  music.play();
            }

    drawSprites()
    }















    