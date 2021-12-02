const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4;
var hero, monster, rope, ground;
var energia = 500

//Variable que declara el estado de juego inicial
var gameState = "play"

function preload() {
  //Imagen de fondo
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  //Crea el suelo
  ground = new Ground(1000, 600, 2500, 20);

  //Crea el heroe con su restriccion
  hero = new Hero(400, 800, 250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  //Crea el mounstro
  monster = new Monster(750, 550, 300);

  //Crea todas las cajas del mounstro 1 {
  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);

  box1_p1 = new Box(600, 100, 70, 70);
  box2_p1 = new Box(600, 100, 70, 70);
  box3_p1 = new Box(600, 100, 70, 70);
  box4_p1 = new Box(600, 100, 70, 70);

  box1_p2 = new Box(900, 100, 70, 70);
  box2_p2 = new Box(900, 100, 70, 70);

  techo_p = new Box(750, 10, 400, 30);
  techo2_p = new Box(750, 5, 300, 30);
  techo3_p = new Box(750, 0, 200, 30);
  techo4_p = new Box(750, -10, 100, 30);
  techo5_p = new Box(750, -15, 50, 30);
  //}

  //Crea el segundo monstruo
  monster2 = new Monster(1800, 550, 300);

  //Crea todas las cajas del segundo monstruo{
  b1 = new Box(1600, 100, 50, 50);
  b2 = new Box(1600, 100, 50, 50);
  b3 = new Box(1600, 100, 50, 50);
  b4 = new Box(1600, 100, 50, 50);
  b5 = new Box(1600, 100, 50, 50);
  b6 = new Box(1600, 100, 50, 50);
  b7 = new Box(1600, 100, 50, 50);

  b8 = new Box(1500, 100, 50, 50);
  b9 = new Box(1500, 100, 50, 50);
  b10 = new Box(1500, 100, 50, 50);
  b11 = new Box(1500, 100, 50, 50);
  b12 = new Box(1500, 100, 50, 50);
  b13 = new Box(1500, 100, 50, 50);
  b14 = new Box(1500, 100, 50, 50);
  //}

}

function draw() {
  //Fondo
  background(bg);
  Engine.update(engine);

  //Muestra en pantalla todos nuestros objetos
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()

  box1_p2.display();
  box2_p2.display();

  box1_p1.display();
  box2_p1.display();
  box3_p1.display();
  box4_p1.display();

  techo_p.display();
  techo2_p.display();
  techo3_p.display();
  techo4_p.display();
  techo5_p.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();

  hero.display();
  rope.display();

  monster.display();
  monster2.display();
  //Funcion para indicar la posicion x de los monstruos y declarar si ganaste
  monster.loss();
  monster2.loss();

  //Funcion para la energia
  if (energia <= 0) {
    //Si la energia es menor Ó igual que 0, el estado del juego pasa a "end"
    gameState = "end";
    //Establece la energia en 0 para que no haya datos diferentes
    energia = 0;
  }

  //Texto con formato para instrucciones
  fill("black");
  textSize(35);
  text("Presiona 'G' para dar un SuperGolpe", 100, 670);
  text("Si das un 'SuperGolpe' perderas energia y perderas", 1300, 670);
  fill("yellow");
  textSize(40);
  //Muestra la energía total y la que queda
  text("Energía [" + energia + "]", 1870, 50);

  //Establece que SI el estado de juego es "end"
  if (gameState == "end") {
    //muestra un texto indicando que perdiste
    textSize(50);
    fill("darkblue");
    text("Perdiste :(", 950, 300);
  }

  //Si el estado de juego es "win"
  if (gameState === "win") {
    //Muestra un texto indicando que ganaste
    textSize(50);
    stroke("black");
    //strokeWeight(5);
    fill("gold");
    text("¡GANASTE!", 900, 300);
    //Establece la energia en el dato que tenía 
    energia = energia;
  }
}

//Funcion para arrastrar al heroe
function mouseDragged() {
  //Si el estado de juego es "play"
  if (gameState === "play") {
    //Puedes arrastrarlo con el mouse
    Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
    //Cada que arrastras el mouse te va quitando progresivamente -1 de energía
    energia = energia - 1;
  }
}

//Funcion para soltar el click del mouse
function mouseReleased() {
  //Suelta al hero de su restriccion
  rope.fly();
}

//Funcion para presionar teclas
function keyPressed() {
  //Si el estado de juego es "play "
  if (gameState === "play") {
    //Si presionas la tecla 'G'
    if (keyCode === 71) {
      //establece al heroe a una nueva restriccion hacía la derecha simulando un Golpe "Veloz"
      //Se agrega a una restriccion para que no se mueva libremente simulando que no tiene energía
      rope = new Rope(hero.body, { x: 1400, y: 200 });
      //Este movimiento cuesta mucha energia al personaje así que le resta -470 de energía (lo suficiente para ganar)
      energia = energia - 470;
    }
  }
}



