// URL to retreive data. Mine is public so anyone can get it
let url = 'https://io.adafruit.com/api/v2/jahrndt/feeds/bezosvsmusk';
let url2 = 'https://io.adafruit.com/api/v2/jahrndt/feeds/musk';
let counter = 0;

let myFont;
function preload() {
  myFont = loadFont('INVASION2000.TTF');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(myFont);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(0);
  //fill(255, 10);
  //rect(0, 0, width, height);
  // only pull this every once in awhile
  if (counter % 180 == 0) {
    getData(); // function for calling data

  }
  counter++;

  line(width/2,100,width/2,height-100);
  stroke(255);
  strokeWeight(3);
}

function getData() {
  background(0);
  let data1;  
  let data2;// local var to get last value
  // this calls a GET function, which requests a URL
  // the arguments are the url to request, the kind of data to expect,
  // and a callback function once the data is ready
  httpGet(url, 'json', function(response) {
    console.log(response);
    
    data = response.last_value; // store the data we're interested in
    // draw an ellipse
    //noStroke();
    //fill(255, 0, 0);
    //ellipse(data, height / 2, 25, 25);
    // print out the data we're keen to see
    console.log(data);
noStroke();  
textSize(36);
fill(255,0,0);
text(data, width/8, height/3,width/2-300,height-100);

  });
    httpGet(url2, 'json', function(response) {
    console.log(response);
    
    data = response.last_value; // store the data we're interested in
    // draw an ellipse
    //noStroke();
    //fill(255, 0, 0);
    //ellipse(data, height / 2, 25, 25);
    // print out the data we're keen to see
    console.log(data);
noStroke();  
textSize(36);
fill(0,0,255)      
text(data, width/2 + (width/9), height/3,width/2-width/5,height/3-100);

  });

}
