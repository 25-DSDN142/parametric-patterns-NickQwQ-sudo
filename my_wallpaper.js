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

// 
let petalColor = '#67b7d1';
let innerColor = '#f5c542';
let strokeColor = '#000000';

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH); 
  //pWallpaper.output_mode(GRID_WALLPAPER); 

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
  push();
  translate(100, 100); 

  for (let i = 0; i < 8; i++) {
    push();
    rotate(i * 45);
    drawPetal();
    pop();
  }

  pop();
}

function drawPetal() {
  stroke(strokeColor);
  strokeWeight(1.5);
  fill(petalColor);
  beginShape();
  vertex(0, 0);
  bezierVertex(10, -20, 30, -20, 40, 0);
  bezierVertex(30, 20, 10, 20, 0, 0);
  endShape(CLOSE);

  fill(innerColor);
  ellipse(20, 0, 10, 10); 
}







