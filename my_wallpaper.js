//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;
let coreSize = 20;        
let spikeLength = 70;     
let colorHue = 400;       
let numSpikes = 6;        
let hexRadius = 70;       
    





function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  rect(40 ,40, rect_width, rect_height);
}

function my_symbol() {
  push();
  translate(100, 100); 

  colorMode(HSL);
  angleMode(DEGREES);
  strokeWeight(2);
  noFill();

  
  stroke(colorHue, 100, 50);
  beginShape();
  for (let a = 0; a < 360; a += 60) {
    let x = cos(a) * hexRadius;
    let y = sin(a) * hexRadius;
    vertex(x, y);
  }
  endShape(CLOSE);

  
  stroke(colorHue, 100, 70);
  for (let i = 0; i < numSpikes; i++) {
    let angle = i * (360 / numSpikes);
    let x1 = cos(angle) * (coreSize / 2);
    let y1 = sin(angle) * (coreSize / 2);
    let x2 = cos(angle) * spikeLength;
    let y2 = sin(angle) * spikeLength;
    line(x1, y1, x2, y2);
  }

  
  fill(colorHue, 100, 60);
  noStroke();
  ellipse(0, 0, coreSize);

  pop();
}




