//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;
     
    





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

// Parameters
let petalColor = '#67b7d1';
let innerColor = '#f5c542';
let strokeColor = '#000000';

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  // pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true);

  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 0;
}

function wallpaper_background() {
  background('#e1f5fe');
}

function my_symbol() {
  angleMode(DEGREES); 

  push();
  translate(100, 100); 

  let petalCount = 16;
  let angleStep = 360 / petalCount;

  for (let i = 0; i < petalCount; i++) {
    push();
    rotate(i * angleStep);
    drawPetal(35);
    pop();
  }

  pop();
}

function drawPetal(radius) {
  stroke(strokeColor);
  strokeWeight(1.2);
  fill(petalColor);

  beginShape();
  vertex(radius, 0);
  bezierVertex(radius + 8, -10, radius + 20, -10, radius + 30, 0);
  bezierVertex(radius + 20, 10, radius + 8, 10, radius, 0);
  endShape(CLOSE);

  fill(innerColor);
  noStroke();
  ellipse(radius + 15, 0, 8, 8);
}