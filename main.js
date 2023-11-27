x = 0;
y = 0;

draw_a = "";

draw_b = "";

draw_m = "";

draw_p = "";

draw_s = "";

apple = "";

apple1 = "";

apple2 = "";

apple3 = "";

apple4 = "";

speak_data = "";

function preload()
{
  apple = loadImage("apple.png");

  apple1 = loadImage("banana.png");

  apple2 = loadImage("mora.png");

  apple3 = loadImage("strawberry.png");

  apple4 = loadImage("pineapple.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "El sistema está escuchando. Por favor, habla.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "Se reconoció la voz como: " + content; 

    if(content == "manzana")
    {
      document.getElementById("status").innerHTML = "Se empezó a dibujar una manzana."; 
      draw_a = "set";
      console.log(content);
    }
    else if(content == "banano")
    {
      document.getElementById("status").innerHTML = "Se empezó a dibujar un banano."; 
      draw_b = "set";
      console.log(content)
    }
    else if(content == "piña")
    {
      document.getElementById("status").innerHTML = "Se empezó a dibujar una piña."; 
      draw_p = "set";
      console.log(content)
    }
    else if(content == "uva")
    {
      document.getElementById("status").innerHTML = "Se empezó a dibujar una uva."; 
      draw_s = "set";
      console.log(content)
    }
    else
    {
      document.getElementById("status").innerHTML = "No hablastes sobre una comida. "; 
    }
}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;

  canvas = createCanvas(1000, 580);
  canvas.center();
  canvas.position(250, 150);
}

function draw() {
  if(draw_a == "set")
  {
    image(apple, 150, 480, 100, 100);
  }

  if(draw_b == "set")
  {
    image(apple1, 200, 300, 100, 100);
  }

  if(draw_m == "set")
  {
    image(apple2, 800, 100, 100, 100);
  }

  if(draw_p == "set")
  {
    image(apple4, 500, 450, 100, 100);
  }

  if(draw_s == "set")
  {
    image(apple3, 400, 50, 100, 100);
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
